import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import Provider from './context/Provider';
import LoginPage from './pages/LoginPage';
import RegisterUserPage from './pages/RegisterUserPage';
import UserHomePage from './pages/UserHomePage';

function App() {
  return (
    // <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterUserPage} />
          <Route exact path="/home" component={UserHomePage} />
        </Switch>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
