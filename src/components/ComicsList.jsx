import React, { useContext, useEffect } from 'react';
// import AppContext from '../context/AppContext';
import { apiGetComics } from '../services/APImarvel';
// import CardFav from './CardFav';
import './componentsStyle.css';


const ComicsList = () => {
  // const { loading, setLoading } = useContext(AppContext);
  useEffect(() => {
    apiGetComics().then((response) => console.log(response))
      .catch((err) => console.error(err));
      // setLoading(false);
  }, []);
  return (
    // !loading ?
    <div className="listContainer">
      <ul className="hoverlist">
        {/* {.map((card) => {
        return <CardFav key={card._id} card={card} />;
         } )} */}
      </ul>    
    </div>
    // : <div>Loading...</div>
  );
};

export default ComicsList;
