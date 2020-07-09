import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';

import './App.css';
import image from './assets/viralatinha.jpg';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    })
  }, [])

  async function handleAddProject() {
    const response = await api.post('/projects', {
      "title": `Novo Projeto ${Date.now()}`,
	    "owner": "Bernardo Henrique"
    });
    console.log(response)
    response.status < 400 ? setProjects([...projects, response.data]) : null;
  }

  return (
    <>
      <Header title="Projetos">
        <ul>
          { projects.map(project => <li key={ project.id }> { project.title } </li>) }
        </ul>
      </Header>
      <button type="button" onClick={handleAddProject}> Adicionar Projeto </button>
      <br/>
    </>
  )
}

export default App;