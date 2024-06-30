import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const contractAddress = '0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0';

const contractABI = require('../artifacts/contracts/SmartContract.sol/SimpleContract.json').abi;

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

const App = () => {
  const [contract, setContract] = useState(null);
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [users, setUsers] = useState([]);
  const [deleteName, setDeleteName] = useState('');

  useEffect(() => {
    const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
    setContract(contractInstance);
  }, []);

  const handleSetUser = async () => {
    await contract.methods.setUser(user.name, user.email, user.password).send({ from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' });
    setUser({ name: '', email: '', password: '' });
  };

  const handleGetUsers = async () => {
    const users = await contract.methods.getAllUsers().call();
    setUsers(users);
  };

  const handleDeleteName = async () => {
    await contract.methods.deleteUser(deleteName).send({ from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' });
    setDeleteName('');
    handleGetUsers();
  };

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  const inputStyle = {
    margin: '0.5rem',
    padding: '0.25rem',
  };

  const buttonStyle = {
    margin: '0.5rem',
    padding: '0.25rem',
  };

  return (
    <div style={centerStyle}>
      <h1>User Registration</h1>

      <input
        style={inputStyle}
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        style={inputStyle}
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        style={inputStyle}
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <button style={buttonStyle} onClick={handleSetUser}>
        Register User
      </button>

      <input
        style={inputStyle}
        type="text"
        placeholder="Email"
        value={deleteName}
        onChange={(e) => setDeleteName(e.target.value)}
      />
      <button style={buttonStyle} onClick={handleDeleteName}>
        Delete User
      </button>

      <button style={buttonStyle} onClick={handleGetUsers}>
        Get All Users
      </button>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email} - {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
