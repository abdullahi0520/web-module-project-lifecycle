import React from 'react';

class User extends React.Component {
    render() {
        const { user } = this.props;
        console.log(user)
        return (
    <div id='UserCard'>
        <img src={user.avatar_url}/>
            <a target='_blank' href={user.html_url}><h3>{user.name}</h3></a>
                <p>({user.login})</p>
                <p>Total Repos: {user.public_repos}</p>
                <p>Total Following: {user.following}</p>
    </div>
        )
    }
}

export default User;