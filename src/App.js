import React from 'react';
import User from './components/User';
import FollowingList from './components/FollowerList';
import axios from 'axios';

class App extends React.Component {
  state = {
    currentUser: 'abdullahi0520',
    user: {},
    following: []
    }

    componentDidMount () {
      axios.get(`https://api.github.com/users/${this.state.currentUser}`).then(res=> {
        this.setState({
          ...this.state,
          user: res.data
        })
      })
    }


    componentDidUpdate (prevProps, prevState) {
          if(this.state.user !== prevState.user) {
            axios.get(`https://api.github.com/users/${this.state.currentUser}/following`).then(res=> {
        this.setState({
          ...this.state,
          following: res.data
        })
      })
          }
    }

    handleChange = (e) => {
      this.setState ({
        ...this.state,
        currentUser:e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.currentUser}`).then(res=> {
        this.setState({
          ...this.state,
          user: res.data
        })
      })
    }
  
  render() {
    
    return(
    <div>
      <h1>Github Info</h1>
      <form onSubmit={this.handleSubmit}>
      <input placeholder='Github Handle' onChange={this.handleChange}/>
      <button>Search</button>
      </form>
      <User user={this.state.user} /> 
      <FollowingList following={this.state.following}/>
    </div>
    );
  }
}


export default App;
