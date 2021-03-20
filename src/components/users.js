import React from 'react';
import axios from 'axios';

class User extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(`http://exercises.getsandbox.com/users`).then(res => {
      const allUsers = res.data;
      this.setState({ loading: false, users: allUsers });
    });
  }

  render() {
    return (
      <div>
        <h3>List of Users:</h3>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              {user.lastName}, {user.firstName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default User;
