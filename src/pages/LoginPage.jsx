import { apiLogin } from '../services/APImarvel';
import './pagesStyle.css';

const LoginPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = document.querySelector("#displayName").value;
    const password = document.querySelector("#password").value;
    await apiLogin(
      displayName,
      password,
    );
    alert("Login successful");
  };
  return (
    <div className="bground">
      <div className="myStyle">
        <h1 className='login-page-title'>Bem vindo!</h1>
        <div className="align">
          <h2>Login</h2>
          <form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="displayName">Name:
          <input type="text" name="displayName" id="displayName" />
            </label>
            <label htmlFor="password">Password:
          <input type="text" name="password" id="password" />
            </label>
            <input className="submit" type="submit" />
          </form>
        </div>
      </div>
      <footer className='footer'>MARVEL APP</footer>
    </div>
  );
};

export default LoginPage;
