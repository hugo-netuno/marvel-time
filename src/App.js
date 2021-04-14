import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Provider from './context/Provider';
import LoginPage from './pages/MainPage';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
