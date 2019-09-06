import React from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import './App.css';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }
componentDidMount() {
  axios.get(`http://localhost:5000/api/players`)
  .then(res => {
    const players = res.data;
    this.setState({players});
  }) 
  .catch(error => {
    console.log("whaaaaat!", error);
  })
}


render(){
  console.log(this.state.players);
  return (
    <div className="App">
      <Header/>
      <div className="container">
        {this.state.players.map(ply => (
        <div className="the-list">
          <h2 className="name" >Name: {ply.name}</h2>
          <h3 className="country" >Plays for: {ply.country}</h3>
        </div>
      ))}
      </div>
    </div>
  );
  }
}

export default App;
