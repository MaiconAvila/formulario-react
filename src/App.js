import React from 'react';
import './App.css';
import Menu from './components/menu'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      components: [
        'imagem1',
        'imagem2',
        'imagem3',
      ],
      renderizado: '',
    }
  }

  render() {
    return (
    <div>
      <Menu components={this.state.components}/>
    </div>
      )
  }
}
