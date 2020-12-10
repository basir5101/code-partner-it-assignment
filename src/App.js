import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Catalog from './Pages/Catalog/Catalog';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route path = '/catalog'>
          <Catalog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
