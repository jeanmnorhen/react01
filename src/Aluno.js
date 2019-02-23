import React, { Component } from 'react';
class Aluno extends Component {
  
  render() {
    const {aluno}=this.props
    return (
      <div>
            <h1>{aluno.nome}</h1>
            <ul>idade: {aluno.idade}</ul>
            <ul>matricula: {aluno.matricula}</ul>
      </div>
    );
  }
}

export default Aluno;
