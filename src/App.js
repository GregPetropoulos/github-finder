import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  //Search Github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  //Clear users from the state
  clearUsers = () => this.setState({ users: [], loading: false });

  //}
  render() {
    const {users, loading } =this.state
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true: false} />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}
export default App;
