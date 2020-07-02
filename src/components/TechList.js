import React, { Component } from 'react';
import TechItem from './TechItem';

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
            <TechItem
              key={tech}
              tech={tech}
              onDelete={ () => this.handleDelete(tech) }
            />
          ))}
        </ul>
        <input type='text' onChange={this.handleInputChange} value={this.state.newTech}/> 
        <button type="submit">enviar</button>
      </form>
    )
  }
}

export default TechList;