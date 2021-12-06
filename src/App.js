import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Navbar } from './components/navbar/index';
import { HomePage } from './components/pages/HomePage'; 
import { PhoneDetailsPage } from './components/pages/PhoneDetailsPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/new">
              <div>New Page</div>
            </Route>
            <Route path="/phone/:id">
              <PhoneDetailsPage/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
