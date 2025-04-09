// src/artworks/artwork-routes.js
import Artwork from './artwork-model.js'

export default async function (fastify, opts) {
  fastify.get('/api/artworks', async (request, reply) => {
    const artworks = await Artwork.find()
    reply.send(artworks)
  })

  fastify.post('/api/artworks', async (request, reply) => {
    const { title, artist, image, price } = request.body
    const artwork = new Artwork({ title, artist, image, price })
    await artwork.save()
    reply.status(201).send(artwork)
  })
}
