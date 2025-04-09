// Import the framework and instantiate it
import Fastify from 'fastify'
import dotenv from 'dotenv'
import fastifyCors from '@fastify/cors';
import User from './users/user-model.js'
import { connect } from './db/connect.js'
import { compareHash, getHashFromClearText } from './utils/crypto.js'

dotenv.config()

const port = process.env.PORT

const fastify = Fastify({
  logger: true
})

await fastify.register(fastifyCors, {
  origin: '*', // Ou mets ton lien Netlify ici pour être plus strict
});

// Declare a aroute
fastify.get('/api/hello', async function handler (request, reply) {
  return { hello: 'world' }
})

const validUsername = 'stan'
const validPassword = 'stan'

fastify.post('/api/users', async function handler (request, reply) {
  const {username, password : clearPassword, email } = request.body; // Récupération des identifiants envoyés
  const password = getHashFromClearText(clearPassword)
  const user = new User({username, password, email})
  await user.save()
  reply.status(201).send(user)
  return user
})

fastify.post('/api/token', async function handler (request, reply) {
  const user = await User.findOne({ username: request.body.username });

  if (!user) {
    reply.status(401).send({ error: 401, message: 'User not found' });
    return;
  }

  const password = request.body.password;

  if (!user.comparePassword(password)) {
    reply.status(401).send({ error: 401, message: 'Invalid credentials' });
    return;
  }

  return {
    token: createJWT() 
  };
});


function createJWT (){
  return 'todo'
}

// Run the server!
try {
  await connect()
  await fastify.listen({ port, host:"0.0.0.0" })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}