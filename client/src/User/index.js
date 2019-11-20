import React, { Component } from 'react'
import { useQuery } from '@apollo/react-hooks'
import './index.less'
import { GET_USER_INFO } from './graphql'
import UserInfo from './UserInfo'
// import { graphql, withApollo } from 'react-apollo'

const User = props => {
	const { loading, error, data } = useQuery(GET_USER_INFO, {
		variables: { id: 'id2' }
	})
	if (loading) {
		return <div style={{ textAlign: 'center' }}>Loading...</div>
	}
	if (error) {
		return <div style={{ textAlign: 'center', color: 'red' }}>Error!</div>
	}
	return <UserInfo user={data.user} />
}
export default User

// const User = ({ data: { loading, error, user } }) => {
// 	if (loading) {
// 		return <div style={{ textAlign: 'center' }}>Loading...</div>
// 	}
// 	if (error) {
// 		return <div style={{ textAlign: 'center', color: 'red' }}>Error!</div>
// 	}
// 	return <UserInfo user={user} />
// }

// export default graphql(GET_USER_INFO, {
// 	options: props => ({
// 		variables: {
// 			id: 'id1'
// 		}
// 	})
// })(User)

// class User extends Component {
// 	getData() {
// 		const { client } = this.props
// 		client
// 			.query({
// 				query: GET_USER_INFO,
// 				variables: { id: 'id2' }
// 			})
// 			.then(({ data, errors, loading }) => {
// 				this.setState({
// 					loading,
// 					user: data.user,
// 					errors
// 				})
// 			})
// 	}
// 	state = {
// 		loading: true,
// 		user: {},
// 		errors: null
// 	}
// 	componentDidMount() {
// 		this.getData()
// 	}

// 	render() {
// 		const { loading, error, user } = this.state

// 		if (loading) {
// 			return <div style={{ textAlign: 'center' }}>Loading...</div>
// 		}
// 		if (error) {
// 			return <div style={{ textAlign: 'center', color: 'red' }}>Error!</div>
// 		}
// 		return <UserInfo user={user} />
// 	}
// }
// export default withApollo(User)
