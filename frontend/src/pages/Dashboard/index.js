import React from 'react';
import {useAuth} from '../../contexts/auth'

function Dashboard() {
  const { signed, user, signOut } = useAuth(); 

  console.log (signed);
  console.log (user);

  function handleSignOut () {
    signOut();
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem vindo, {user.name}</p>
      <button title="Logout" onClick={handleSignOut}> Logout </button>
    </div>
  )

};

export default Dashboard;
