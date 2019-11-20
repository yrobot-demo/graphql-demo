import React from 'react'
const showFunc = {
	name: v => v,
	id: v => v,
	friends: (fs = []) => {
        return fs.map(f => f.name).join(';')
    }
}

const UserInfo = ({ user }) => (
	<>
		{Object.keys(user || {}).map((name) => (
			<div className="info-line" key={"user-info-"+name}>
				<div className="name">{name}</div>
				<div className="value">
					{showFunc[name] ? showFunc[name](user[name]) : user[name]}
				</div>
			</div>
		))}
	</>
)
export default UserInfo
