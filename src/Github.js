import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'tommybernaciak',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }


  render() {
    return (
      <div className="github">
        {this.state.username}
      </div>
    );
  }
}

Github.propTypes ={
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
}

Github.defaultProps ={
  clientId: 'e3580493c9612bdea1a9',
  clientSecret: '699ec6be6bbbf97766109f24b0a948eca77507bd'
}

export default Github;
