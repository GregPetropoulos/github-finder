import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state.text)
    //Need to call on api and pass this state to the app.js level and search for users
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='search Users...'
            value={this.state.text}
            onChange={this.onChange}></input>
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'></input>
        </form>
      </div>
    );
  }
}

export default Search;
