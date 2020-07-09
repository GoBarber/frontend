import React, { useState, useEffect } from 'react';
import api from '../services/api';


export default function ProjectForm({projects, handleDeleteProject}) {
  return(
    <>
      <br/><br/><br/>
      <h1>Project List</h1> 
      <ul>
        {projects 
          ? projects.map((project, index) => 
            <li key={ project.id }> 
              { project.title } - { project.owner } 
              <button onClick={() => handleDeleteProject(project.id, index)}>Delete</button>
            </li>) 
          : "Nenhum Projeto cadastrado"}
      </ul>
    </>
  )
}