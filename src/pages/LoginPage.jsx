import { apiLogin } from '../services/APImarvel';
import './pagesStyle.css';

const LoginPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const loginResponse = await apiLogin(
      email,
      password,
    );
    console.log(loginResponse);
    // alert("Login successful");
  };
  return (
    <div className="bground">
      <div className="myStyle">
        <h1 className='login-page-title'>Bem vindo!</h1>
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
      <footer className='footer'>MARVEL APP</footer>
    </div>
  );
};

export default LoginPage;
