import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useState} from "react";

import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import Profile from "../Pages/Profile";
import Secret from "../Pages/Secret";

import NavButton from "../Components/buttons/nav_button";

import './App.css';

function App() {

  const [dest, setDest] = useState(["Login", "Signup"]);


  
  return (
    <Router>
    <header>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/secret">Secret Page</Link>
          <Link to={"/"+dest[0]}><NavButton destTitle={dest[0]}></NavButton></Link>
          <Link to={"/"+dest[1]}><NavButton destTitle={dest[1]}></NavButton></Link>
      </nav>
    </header>
    <main>
      <Switch>
        <Route exact path="/">
        <h1>Welcome stranger!</h1>
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/logout">
          <Logout></Logout>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/secret">
          <Secret></Secret>
        </Route>
      </Switch>
    </main>
    </Router>
  );
}

export default App;
