import React from 'react';
import '../../Main.css';
import { auth, provider } from '../../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';

function Navigation() {
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Successful login:', result.user);
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  return (
    <nav className="fixed-navigation">
      <img className="logo" src="../Assets/logo.svg" alt="Logo" />
      <ul className="nav-links">
        <li><a className="nav-link" href="#">Home</a></li>
        <li><a className="nav-link" href="#browse">Browse</a></li>
        <li><a className="nav-link" href="#rent">Rent with us</a></li>
        <li><a className="nav-link" href="#">Sign up</a></li>
        <li><button className="button primary" onClick={handleGoogleLogin}>Log in with Google</button></li>
      </ul>
      <button className="button primary hidden">Menu</button>
    </nav>
  );
}

export default Navigation;