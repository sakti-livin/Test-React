import "./styles.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}
