import React from 'react';

class Following extends React.Component {
    render() {
        const { following } = this.props;
        return (
        <div className='following'>
             <img width='200px' src={following.avatar_url}/>
             <a target='_blank' href={following.html_url}><p>{following.login}</p></a>
            </div>
        )   
    }
}

export default Following;