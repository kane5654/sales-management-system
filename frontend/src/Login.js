import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      alert(response.data.message);
    } catch (error) {
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Sign in</h1>
      <p>to continue to your Evernote account.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Email address or Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="continue-btn">Continue</button>
      </form>
      <div className="divider">
        <hr />
        <span>or</span>
        <hr />
      </div>
      <div className="social-login">
        <button className="google-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" />
          Continue with Google
        </button>
        <button className="apple-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
          Continue with Apple
        </button>
      </div>
      <div className="footer-links">
        <p>Don't have an account? <a href="#">Sign up</a></p>
        <p>Can't sign in? <a href="#">Click here</a></p>
      </div>
    </div>
  );
}

export default Login; // 確保默認導出
