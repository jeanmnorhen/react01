import React, { Component } from 'react';
import Aluno from './Aluno';

class Lista extends Component {
  
  render() {
      const {alunos}=this.props
    return (
      <ul >
        {
            alunos.map((aluno)=>
            <li key={aluno.matricula}>
            <Aluno aluno={aluno}/></li>)
        }
      </ul>
    );
  }
}

export default Lista;
