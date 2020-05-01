import React from 'react';
import {useAuth} from '../../contexts/auth'

function SignIn() {

  const { signed, user, signIn } = useAuth();

  console.log (signed);
  console.log (user);

  function handleSignIn () {
    // pegar email e passsword do formulário 
    
    signIn();
  }

  return (
    <div>
      <button title="Login" onClick={handleSignIn}>Login</button>
    </div>
  )

};

export default SignIn