import React, { useState, useEffect } from 'react';
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import api from './services/api';

import './App.css';
import image from './assets/viralatinha.jpg';

function App() {
  const [projects, setProjects] = useState([]);
  
  async function handleAddProject(event, title, owner) {
    event.preventDefault();
    
    const response = await api.post('/projects', {
      "title": title,
	    "owner": owner
    });

    setProjects([...projects, response.data]);
  };
  
  function handleDeleteProject(id, index) {
    api.delete(`/projects/${id}`)
    
    console.log(projects)
    projects.splice(index, 1)
    console.log(projects)
    setProjects([...projects]);
  }

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    })
  }, [])

  return (
    <>
      <ProjectForm handleAddProject={handleAddProject}/>

      <ProjectList projects={projects} handleDeleteProject={handleDeleteProject}/>
    </>
  )
}

export default App;