import { useHistory } from "react-router-dom";
import { useRef } from 'react';
import { apiLogin } from '../services/APImarvel';
import './pagesStyle.css';

const LoginPage = () => {
  const history = useHistory();
  const createAccount = useRef(null);
  createAccount.addEventListener("click", function() {
    history.push("/user");
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const loginResponse = await apiLogin(
      email,
      password,
      );
      console.log(typeof loginResponse);
      // alert("Login successful");
    };
    // history.push("/login");
    return (
      <div className="bground">
      <div className="myStyle">
        <h1 className='loginTitle'>Welcome!</h1>
        <div className="align">
          <h2>Login</h2>
          <form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email">Email:
          <input type="text" name="email" id="email" />
            </label>
            <label htmlFor="password">Password:
          <input type="text" name="password" id="password" />
            </label>
            <input className="submit" type="submit" />
          </form>
        </div>
      </div>
      <div>
        <h1 className="createAccount" ref={createAccount}>New around here? Create an account now...</h1>
      </div>
      <footer className='myStyle footer'>MARVEL APP</footer>
    </div>
  );
};

export default LoginPage;
