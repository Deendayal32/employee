
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmploy from './components/ListEmploy';
import CreateEmploy from './components/CreateEmploy';
import HeaderComponent from './components/HeaderComponent';
import FooterComponebt from './components/FooterComponebt';
function App() {
  return (
    <div className="container">
      <HeaderComponent/>
      <Router>
        <div className="container">
          <Switch> localhost:3000/add-employee
              <Route path = "/" exact component = {ListEmploy}></Route>
              <Route path = "/employees" component = {ListEmploy}></Route>
              <Route path = "/add-employee" component = {CreateEmploy}></Route>
          </Switch>
        </div>
      </Router>
      <FooterComponebt/>
      
    </div>
  );
 
}

export default App;
