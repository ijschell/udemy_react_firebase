import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router'
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import NewsFeed from './containers/NewsFeed'
import Profile from './containers/Profile'
import Navbar from './components/Navbar'
//importo service para controlar authentication del usuario
import services from './services'


export default class App extends Component{

  state = {
    loading : true
  }

  //al iniciar la app controlo si el usuario esta logueado
  componentDidMount() {
    
    const {auth} = services
    ////const {history} = this.props

    auth.onAuthStateChanged(user => {

      //si user es null va para el loading
      if(user){
        if(['/', '/register'].indexOf(window.location.pathname) !== -1){

          
        }
      }
      
      this.setState({
        loading : false
      })

    })

  }
  
  render(){

    const {loading} = this.state

    if(loading){

      return 'Loading...'

    }else{

      return (
        <div>
          <Route path="/" exact={true} component={Login} />
          <Route path="/register" exact={true} component={Register} />
          <Route path="/app" component={Navbar} />
          <Route path="/app/newsfeed" exact={true} component={NewsFeed} />
          <Route path="/app/profile" exact={true} component={Profile} />
        </div>
      )

    }

    
  }
  
}

