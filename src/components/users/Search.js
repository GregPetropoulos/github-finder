import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ showClear, clearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext);
  
  const [text, setText] =useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert(' Please enter something', 'light');
    } else {
      //console.log(this.state.text)
      //Need to call on api and pass this state to the app.js level and search for users
      githubContext.searchUsers(text);
      setText('');
    }
  };
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='search Users...'
          value={text}
          onChange={onChange}></input>
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'></input>
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
