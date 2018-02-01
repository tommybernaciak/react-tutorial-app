import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import CardContainer from './CardContainer';
import Github from './Github';

class Main extends Component {
  render() {
    var content = '';
    if (this.props.page === 'about') {
      content = <Jumbotron />
    }
    if (this.props.page === 'cards') {
      content = <CardContainer />
    }
    if (this.props.page === 'github') {
      content = <Github />
    }

    return (
      <main role="main">
        {content}
      </main>
    );
  }
}

export default Main;
