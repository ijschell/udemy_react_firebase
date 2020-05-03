import React from 'react';
import './App.css';
import { Route } from 'react-router'
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import NewsFeed from './containers/NewsFeed'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      <Route path="/" exact={true} component={Login} />
      <Route path="/register" exact={true} component={Register} />
      <Route path="/app" component={Navbar} />
      <Route path="/app/newsfeed" exact={true} component={NewsFeed} />
    </div>
  );
}

export default App;
