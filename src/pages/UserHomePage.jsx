import { Link } from "react-router-dom";
import './pagesStyle.css';

const UserHomePage = () => {
  return (
    <div className="bground">
      <div className="myStyle">
        <h1 className='title'>Home</h1>
        <div className="align">
          <h2>Options:</h2>
          <ul className="optionsList">
            <li><Link className="optionsLinks" to={`/`}>Edit account settings</Link></li>
            <li><Link className="optionsLinks" to={`/comics`}>View Marvel comics</Link></li>
            <li><Link className="optionsLinks" to={`/characters`}>View Marvel characters</Link></li>
            <li><Link className="optionsLinks" to={`/`}>Logout</Link></li>
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
