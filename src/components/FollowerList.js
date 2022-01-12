import React from 'react';
import Following from './Follower';


class FollowingList extends React.Component {
    render() {
        return (
            <div id='following'>
            {
                this.props.following.map(following=> {
                    return(<Following key={following.login} following={following}/>)
                })
            }
            </div>
          
        )
    }
}

export default FollowingList;