import { useHistory } from "react-router-dom";
import './pagesStyle.css';

const UserHomePage = () => {
  const history = useHistory();
  return (
    <div className="bground">
      <div className="myStyle">
        <h1 className='title'>Home</h1>
        <div className="align">
          <h2>Options:</h2>
          <ul className="optionsList">
            <li onEvent={"click", history.push("/")}>Edit account settings</li>
            <li onEvent={"click", history.push("/comics")}>View Marvel comics</li>
            <li  onEvent={"click", history.push("/characters")}>View Marvel characters</li>
            <li onEvent={"click", history.push("/")}>Logout</li>
          </ul>
        </div>
      </div>
      <div>
        <h1>to do: render component</h1>
      </div>
      <footer className='myStyle footer'>MARVEL APP</footer>
    </div>
  );
};

export default UserHomePage;
