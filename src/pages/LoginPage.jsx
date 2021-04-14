import { useHistory, Link } from "react-router-dom";
import { apiLogin } from '../services/APImarvel';
import './pagesStyle.css';

const LoginPage = () => {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const loginResponse = await apiLogin(
      email,
      password,
    );
    if (loginResponse) {
      alert("Login successful");
      history.push("/home");
    }
  };
  return (
    <div className="bground">
      <div className="myStyle">
        <h1 className='title'>Welcome!</h1>
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
      <div style={{display: "flex"}}>
        <Link className="links createAccount" to={`/register`}>New around here? Create an account now...</Link>
      </div>
      <footer className='myStyle footer'>MARVEL APP</footer>
    </div>
  );
};

export default LoginPage;
