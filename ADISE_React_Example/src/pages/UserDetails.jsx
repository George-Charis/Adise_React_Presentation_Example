// src/pages/UserDetails.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);

  const user = users.find(user => user.id === parseInt(id));

  if (!user) return <p>User not found!</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetails;
