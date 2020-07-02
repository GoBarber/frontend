import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  static defaultProps = { /* Poderia colocar desta maneira também. */ };
  static propTypes = { /* Poderia colocar desta maneira também. */ };

  state = {
    newTech: '',
    techs: [ ]
  }

  // Executado assim que o component aparece na tela
  // Um exemplo de utilização é fazer chamada para uma API para, com os valores, montar o componente
  componentDidMount() { 
    const techs = localStorage.getItem('techs');

    if(techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Chamado sempre quando uma Prop ou State é alterado.
  // Os estados/props antigos são passados como parâmetro (prevProps e prevState)
  componentDidUpdate(_, prevState) {  // O _ é um padrão para indicar que não será usado
    if(prevState.tech !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente vai ser deletado.
  componentWillUnmount() {

  }

  handleInputChange = e => {
    console.log(e.target.value);
    this.setState({newTech: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

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