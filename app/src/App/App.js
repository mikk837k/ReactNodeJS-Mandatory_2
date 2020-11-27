import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import Profile from "../Pages/Profile";
import Secret from "../Pages/Secret";

import NavButton from "../Components/buttons/nav_button";

import './App.css';



function App() {
  return (
    <Router>
    <header>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/secret">Secret Page</Link>
          <NavButton></NavButton>
          <NavButton></NavButton>
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
