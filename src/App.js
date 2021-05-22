import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: '1'
        }, 
        {
          name: 'Dracula',
          id: '2'
        },
        {
          name: 'Zombie',
          id: '3'
        },
        {
          name: 'AUV 6.402',
          id: '4'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => <h2 key={monster.id}>{monster.name}</h2>)
        }
      </div>
    );
  }
  
}

export default App;
