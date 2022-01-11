import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

function App() {

  const [users, setUsers] = useState([])

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        newUser
      ]
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
