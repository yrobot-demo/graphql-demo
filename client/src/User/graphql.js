import gql from 'graphql-tag'
export const GET_USER_INFO = gql`
	query user($id: ID!) {
		user(id: $id) {
			id
			name
			friends {
				id
				name
			}
		}
	}
`
