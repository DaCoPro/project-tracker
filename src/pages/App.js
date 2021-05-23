import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
