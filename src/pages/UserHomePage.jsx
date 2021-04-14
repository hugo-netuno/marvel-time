import './pagesStyle.css';

const UserHomePage = () => {
  return (
    <div className="bground">
      <div className="myStyle">
        <h1 className='homeTitle'>Home</h1>
        <div className="align">
          <h2>Options:</h2>
          <ul>
            <li>Edit account settings</li>
            <li>View Marvel comics</li>
            <li>View Marvel characters</li>
            <li>Logout</li>
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
