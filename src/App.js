import React, { useState } from 'react';
import Header from './components/Header';

import './App.css';
import image from './assets/viralatinha.jpg';

function App() {
  const [projects, setProjects] = useState(['Desenvolviment', 'Front-end Web']);

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projetos">
        <ul>
          {projects.map(project => <li key={ project }> { project } </li>)}
        </ul>
      </Header>
      <button type="button" onClick={handleAddProject}> Adicionar Projeto </button>
      <br/>
      <img src={image} alt="Viralata" width={300}/>
    </>
  )
}

export default App;