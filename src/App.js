import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      monsters: [
        {
          name: 'Frankenstein'
        }, 
        {
          name: 'Dracula'
        },
        {
          name: 'Zombie'
        },
        {
          name: 'AUV 6.402'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => <h2>{monster.name}</h2>)
        }
      </div>
    );
  }
  
}

export default App;
