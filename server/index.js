const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const { find, filter } = require('lodash')

const typeDefs = importSchema('./graphql/User.graphql')

const users = [...Array(10)].map((v, i) => ({
	id: 'id' + i,
	name: 'name' + i,
	friends: [`id${i + 1}`, `id${i + 2}`]
}))

const resolvers = {
	Query: {
		user: async (parent, { id }, context) => {
			await new Promise(r => {
				setTimeout(() => {
					r()
				}, 3000)
			})
			return find(users, { id })
		}
	},
	User: {
		friends: (user, param) => {
			return filter(users, u => user.friends.includes(u.id))
		}
	}
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({
		author: 'Yrobot',
		time: Date()
	})
})
server.listen(6969).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`)
})
