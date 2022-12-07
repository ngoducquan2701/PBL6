import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import baseURL from '../../api/request';
import { Context } from '../../context/Context';
import { loginError, loginFullfill, loginPending } from '../../context/Actions';
import './login.css';

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const [state, dispatch] = useContext(Context);
  const { error } = state;
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginPending());

    try {
      const res = await baseURL.post('auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(loginFullfill(res.data));
    } catch (e) {
      dispatch(loginError());
      setErrorMsg(e.message);
    }
  };

  return (
    <div className="login" onSubmit={handleSubmit}>
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
        {error && <span style={{ color: 'red' }}>{errorMsg}</span>}
      </form>
      <Link to="/register">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
}
