import React, { useState } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import './LoginForm.css'

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/imtheboss" />;
  }

  return (
    <div className='login-form-container'>
      {/* <div></div> */}
      <form className='login-form' onSubmit={onLogin}>
        <div className='form-errors'>
          {errors.map((error) => (
            <div className='login-error-message'>{error}</div>
          ))}
        </div>
        <div className='form-inputs'>
          <label className='login-label' htmlFor="email">Email</label>
          <input
            className='login-input'
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />

          <label className='login-label' htmlFor="password">Password</label>
          <input
            className='login-input'
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div className='login-button' onClick={onLogin}>Login</div>
      </form>
    </div>
  );
};

export default LoginForm;
