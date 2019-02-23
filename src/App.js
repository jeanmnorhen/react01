import React, { Component } from 'react';
import Lista from './Lista';

class App extends Component {
  state={
    alunos:[{
      nome: "Elizane",
      matricula: "123sfgf456",
      idade: 31
    },{
      nome: "Iago",
      matricula: "1fd23456",
      idade: 31

    },{
      nome: "Jean",
      matricula: "123fdh456",
      idade: 31

    }]
  }
  render() {
    return (
      <div className="App">
      <Lista alunos={this.state.alunos}></Lista>
      </div>
    );
  }
}

export default App;
