import Fastify from 'fastify'
import CORS from '@fastify/cors'
import JWT from '@fastify/jwt'
import dotenv from 'dotenv/config';

import Database from './database/database.js'
import userRoute from './routes/user.js'

const fastify = Fastify({
    logger: false
})

fastify.register(CORS, {
    origin: "http://localhost:3000",
    methods: [ 'GET', 'POST' ],
    credentials: true
});

fastify.register(JWT, {
    secret: process.env.JWT_SECRET,
    sign: {
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
})

const db = new Database(process.env.MONGO_URL);
fastify.decorate('db', db);

fastify.get('/', async function (req, rep) {
    rep.send({
        hello: 'world'
    })
})

fastify.register(userRoute, { prefix: 'auth' })

fastify.listen({ port: process.env.PORT, host: "0.0.0.0" }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Fastify is on : ${address}`)
})
