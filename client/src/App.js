import React from 'react'
import './App.css'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import User from './User'

const client = new ApolloClient({
	link: new HttpLink({
		uri: 'http://localhost:6969',
		headers: {
			Authorization: `Yrobot Test`
		}
	}),
	cache: new InMemoryCache()
})

function App() {
	return (
		<ApolloProvider client={client}>
			<User></User>
		</ApolloProvider>
	)
}

export default App
