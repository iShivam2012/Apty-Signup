import { Redirect, Route, Switch } from "react-router-dom";
import SignUp from './Components/SignUp';
import './App.css';
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <SignUp />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
