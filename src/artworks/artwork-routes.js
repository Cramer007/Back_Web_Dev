// src/artworks/artwork-routes.js
import Artwork from './artwork-model.js'

export default async function (fastify, opts) {
  
  // GET artworks d'un utilisateur
  fastify.get('/api/artworks', async (request, reply) => {
    const username = request.headers['x-user'] // récupère le username envoyé par le front
    if (!username) {
      return reply.status(401).send({ error: 'Unauthorized: missing username' })
    }

    const artworks = await Artwork.find({ username }) // filtre par user
    reply.send(artworks)
  })

  // POST artwork pour un utilisateur
  fastify.post('/api/artworks', async (request, reply) => {
    const { title, artist, image, price } = request.body
    const username = request.headers['x-user'] // 👈 récupère le user qui crée l’œuvre

    if (!username) {
      return reply.status(401).send({ error: 'Unauthorized: missing username' })
    }

    const artwork = new Artwork({ title, artist, image, price, username })
    await artwork.save()
    reply.status(201).send(artwork)
  })
}
