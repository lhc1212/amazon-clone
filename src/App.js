import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Components/Header";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;