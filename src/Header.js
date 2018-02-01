import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <a onClick={this.props.showAbout} className="btn btn-primary my-2">About</a>
              <a onClick={this.props.showCards} className="btn btn-primary my-2">Cards</a>
              <a onClick={this.props.showGithub} className="btn btn-primary my-2">Github viewer</a>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a className="navbar-brand d-flex align-items-center">
              <strong>{this.props.title}</strong>
            </a>
            <button className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;