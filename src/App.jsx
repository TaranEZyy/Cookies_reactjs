import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieExample = () => {
  const [username, setUsername] = useState('');

  // Load the username from the cookie when the component mounts
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  // Handle login and setting a new cookie
  const handleLogin = () => {
    const newUsername = 'Taranpreet';
    try {
      Cookies.set('username', newUsername, { expires: 7 });
      setUsername(newUsername);
    } catch (error) {
      console.error('Failed to set cookie', error);
    }
  };

  // Handle logout and cookie removal
  const handleLogout = () => {
    try {
      Cookies.remove('username');
      setUsername('');
    } catch (error) {
      console.error('Failed to remove cookie', error);
    }
  };

  return (
    <div style={styles.container}>
     <div style={styles.center}>
     <h2 style={styles.heading}>
        {username ? `Welcome, ${username}!` : 'No user logged in'}
      </h2>
      <div style={styles.buttonContainer}>
        {!username ? (
          <button style={styles.button} onClick={handleLogin}>
            Login
          </button>
        ) : (
          <button style={styles.button} onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
     </div>
    </div>
  );
};

// Styles for better UI
const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
   justifyContent:"center",
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '5px 4px 20px 10px gray',
  },
  centerDiv:{
    display: "flex",
    justifyContent: "center", /* Centers horizontally */
    alignItems: "center",      /* Centers vertically */
  }
  ,heading: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color:"black"
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default CookieExample;
