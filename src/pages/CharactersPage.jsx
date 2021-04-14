import { useHistory, Link } from "react-router-dom";
import './pagesStyle.css';

const CharactersPage = () => {
  
  const history = useHistory();

  return (
    <div className="bground">
      <div className="myStyle">
        <h1 className='title'>Marvel cge;s</h1>
        <div className="align">
          <h1>to do: Favorite toggle</h1>
        </div>
      </div>
      <div>
        <h1>to do: render component</h1>
      </div>
      <footer className='myStyle footer'>MARVEL APP</footer>
    </div>
  );
};

export default CharactersPage;
