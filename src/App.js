import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 'about'};

    this.handleShowAbout = this.handleShowAbout.bind(this);
    this.handleShowCards = this.handleShowCards.bind(this);
    this.handleShowGithub = this.handleShowGithub.bind(this);
    this.handleShowQuiz = this.handleShowQuiz.bind(this);
  }

  handleShowAbout() {
    this.setState({page: 'about'})
  }
  handleShowCards() {
    this.setState({page: 'cards'})
  }
  handleShowGithub() {
    this.setState({page: 'github'})
  }
  handleShowQuiz() {
    this.setState({page: 'quiz'})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title}</h1>
        </header>
        <Header
          title="React Tutorial"
          showAbout={this.handleShowAbout}
          showCards={this.handleShowCards}
          showGithub={this.handleShowGithub}
          showQuiz={this.handleShowQuiz}/>
        <Main
          page={this.state.page}/>
        <Footer />
      </div>
    );
  }
}

App.defaultProps ={
  title: 'React'
}

export default App;
