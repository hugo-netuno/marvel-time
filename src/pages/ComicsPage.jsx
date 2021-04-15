import { useHistory, Link } from "react-router-dom";
import ComicsList from "../components/ComicsList";
import './pagesStyle.css';

const ComicsPage = () => {
  
  const history = useHistory();

  return (
    <div className="bground">
      <div className="myStyle">
        <h1 className='title'>Marvel comics</h1>
        <div className="align">
          <h1>to do: Favorite toggle</h1>
        </div>
      </div>
      <div>
        <ComicsList />
      </div>
      <footer className='myStyle footer'>MARVEL APP</footer>
    </div>
  );
};

export default ComicsPage;
