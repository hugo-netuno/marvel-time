import { useHistory } from "react-router-dom";
import { apiRegisterUser } from '../services/APImarvel';
import './pagesStyle.css';

const RegisterUserPage = () => {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = document.querySelector("#displayName").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const registerUserResponse = await apiRegisterUser(
      displayName,
      email,
      password,
    );
    if (registerUserResponse) {
      alert("Account created successfully");
      history.push("/home");
    }
  };
  return (
    <div className="bground">
      <div className="myStyle">
        <h1 className='title'>CreateAccount</h1>
        <div className="align">
          <h2>Submit fields</h2>
          <form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="displayName">Name:
          <input type="text" name="displayName" id="displayName" />
            </label>
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
      <footer className='myStyle footer'>MARVEL APP</footer>
    </div>
  );
};

export default RegisterUserPage;
