async function routes (fastify, options) {

    const db = fastify.db;

    fastify.route({
        method: 'POST',
        url: '/login',
        handler: async (req, rep) => {
            const body = JSON.parse(req.body)
            const email = body.email;
            const password = body.password;

            const user = await db.login(email, password)

            if (user) {
                const token = fastify.jwt.sign({
                    username: user.username
                })

                rep.send({ success: true, username: user.username, token })
            }

            rep.send({ success: false })
        }
    })

    fastify.route({
        method: 'POST',
        url: '/register',
        handler: async (req, rep) => {
            const body = JSON.parse(req.body)
            const email = body.email;
            const password = body.password;
            const username = body.username;

            const newUser = await db.register(email, username, password)

            if (newUser) {
                const token = fastify.jwt.sign({
                    username: newUser.username
                })

                return rep.send({ success: true, username: newUser.username, token })
            }

            rep.send({ success: false })
        }
    })

}

export default routes
