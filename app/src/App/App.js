import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';



function App() {
  return (
    <Router>
    <header>
      <nav>
        <div>
          <Link to="/secret">Secret Page</Link>
        </div>
        {/* Knap components */}
      </nav>
    </header>
    <main>
      <Switch>
        <Route exact path="/">
    
        </Route>
        <Route path="/signup">
    
        </Route>
        <Route path="/login">
    
        </Route>
        <Route path="/logout">
    
        </Route>
        <Route path="/profile">
    
        </Route>
        <Route path="/secret">
    
        </Route>
      </Switch>
    </main>
    </Router>
  );
}

export default App;
