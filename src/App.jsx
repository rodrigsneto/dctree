import { useState } from 'react'
import './App.css';
import Link from './components/Link';
import LinkList from './components/LinkList';

const links = [
  {
    label: "Quero aprender a programar"
  },
  {
    label: "Quero aprender data analystic"
  },
  {
    label: "Quero aprender marketin digital",
    title: "Curso intensivo",
    description: "Veja aqui quais os cursos intensivos estão com turmas abertas e garanta sua vaga."
  },
  {
    label: "Clique e se inscreva",
    title: "Digital Plus",
    description: "Evento exclusivo para alunos!"
  }
];

function App() {
  return (
    
    <LinkList>
      { links.map(item => <Link {...item} />)}
    </LinkList>
  )
}

export default App
