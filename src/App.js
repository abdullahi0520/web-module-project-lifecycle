import React from 'react';

class App extends React.Component {
  render() {
    return(
    <div>
      <h1>Github Info</h1>
      <form>
      <input placeholder='Github Handle'/>
      <button>Search</button>
      </form>
      <div id='UserCard'>
      <img src='https://avatars.githubusercontent.com/u/90243393?v=4'/>
      <a target='_blank' href='https://github.com/abdullahi0520'><h3>Abdullahi Ahmed</h3></a>
      <p>(abdullahi0520)</p>
      <p>Total Repos: 34</p>
      <p>Total Following: 0</p>
      </div>
     <div id='following'>
       <div className='following'>
        <img width='200px' src='https://avatars.githubusercontent.com/u/11069106?v=4'/>
        <a target='_blank' href='https://github.com/Divici'><p>Divici</p></a>
       </div>
       <div className='following'>
        <img width='200px' src='https://avatars.githubusercontent.com/u/11069106?v=4'/>
        <a target='_blank' href='https://github.com/Divici'><p>Divici</p></a>
       </div>
       <div className='following'>
        <img width='200px' src='https://avatars.githubusercontent.com/u/11069106?v=4'/>
        <a target='_blank' href='https://github.com/Divici'><p>Divici</p></a>
       </div>
       <div className='following'>
        <img width='200px' src='https://avatars.githubusercontent.com/u/11069106?v=4'/>
        <a target='_blank' href='https://github.com/Divici'><p>Divici</p></a>
       </div>
     </div>
    </div>
    );
  }
}

export default App;
