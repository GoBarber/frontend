import React, { useState, useEffect } from 'react';
import api from '../services/api';


export default function ProjectForm({handleAddProject}) {
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');
  
  return(
    <form>
      <h1> Project Form </h1>
      Title
      <input 
        type="text" 
        name="name"
        onChange={e => setTitle(e.target.value)}
      />
        
      <br/>
      Owner  
      <input 
        type="text" 
        name="ownder"
        onChange={e => setOwner(e.target.value)}
      />
      <br/>
      <button onClick={() =>  handleAddProject(event, title, owner)}>Submit</button>
    </form>
  )
}