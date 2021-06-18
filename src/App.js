import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListTrend from "./pages/ListTrend";
import SingleTrend from "./pages/SingleTrend";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ListTrend} />

          <Route path="/singletrend" component={SingleTrend} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
