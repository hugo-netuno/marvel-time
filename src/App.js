import 'dotenv/config';
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
import ComicsPage from './pages/ComicsPage';
import CharactersPage from './pages/CharactersPage';

function App() {
  return (
    // <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterUserPage} />
          <Route exact path="/home" component={UserHomePage} />
          <Route exact path="/comics" component={ComicsPage} />
          <Route exact path="/characters" component={CharactersPage} />
        </Switch>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
