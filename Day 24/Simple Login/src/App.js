
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom"
import Home  from './Router/Home';
import About from './Router/About';
import Dashboard from './Router/Dashboard';
import Profile from './Router/Profile'
import {AuthContext} from './context/AuthContext';


function App() {
  return (
    
    <div className="App">
        <Router>
      <nav>
        <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/About">About</Link>
          </li>
          <li>
          <Link to="/Profile">Profile</Link>
          </li>
          <li>
          <Link to="/Dashboard">DashBoard</Link>
          </li>
        </ul>
      </nav>




   
       <Switch>
         <AuthContext>
         <Route exact path="/" component={Home} />
         <Route exact path="/About" component={About} />
         <Route exact path="/Dashboard" component={Dashboard} />
         <Route exact path="/Profile" component={Profile} />
         </AuthContext>
       
       </Switch>
     </Router>
    </div>
  );
}

export default App;
