import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'node',
      'react', 
      'native'
    ]
  }

  handleInputChange = e => {
    console.log(e.target.value);
    this.setState({newTech: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.newTech)

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    })
  }

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t != tech)});
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          <h1>{this.state.newTech}</h1>
          {this.state.techs.map(tech => (
          <li key={tech}>
            {tech}
            <button type="button" onClick={() => this.handleDelete(tech)}>Remover</button>
          </li>
          ))}
        </ul>
        <input type='text' onChange={this.handleInputChange} value={this.state.newTech}/> 
        <button type="submit">enviar</button>
      </form>
    )
  }
}

export default TechList;