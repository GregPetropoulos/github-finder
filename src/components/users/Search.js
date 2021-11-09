import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  
  const [text, setText] =useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert(' Please enter something', 'danger');
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
      {githubContext.users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
