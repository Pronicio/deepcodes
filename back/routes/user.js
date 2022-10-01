import axios from 'axios'

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

    fastify.route({
        method: 'GET',
        url: '/discord',
        handler: async (req, rep) => {
            const discordCode = req.query.code;

            const params = new URLSearchParams()
            params.append('client_id', process.env.DISCORD_CLIENT_ID)
            params.append('client_secret', process.env.DISCORD_CLIENT_SECRET)
            params.append('grant_type', 'authorization_code')
            params.append('code', discordCode)
            params.append('redirect_uri', process.env.DISCORD_REDIRECT)

            const reqConfig = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            const auth = await axios.post("https://discord.com/api/oauth2/token", params, reqConfig);

            const userResult = await axios.get('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `${auth.data.token_type} ${auth.data.access_token}`,
                },
            });

            const userData = {
                ...userResult.data,
                avatar: `https://cdn.discordapp.com/avatars/${userResult.data.id}/${userResult.data.avatar}.webp?size=256`,
                discord: true
            }

            const user = await db.oauth2(userData)

            if (user) {
                const token = fastify.jwt.sign({
                    username: user.username
                })

                return rep.redirect(`${process.env.ORIGIN}?token=${token}`)
            }

            return rep.send({ success: false })
        }
    })

    fastify.route({
        method: 'POST',
        url: '/info',
        handler: async (req, rep) => {
            const body = JSON.parse(req.body)
            const token = body.token;

            const data = fastify.jwt.decode(token)

            if (data) {
                rep.send({ success: true, username: data.username })
            }

            rep.send({ success: false })
        }
    })
}

export default routes
