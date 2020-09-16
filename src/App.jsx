import React from "react";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Flights from "./Components/Flights";
import About from "./Components/About";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import SingleFlight from "./Components/SingleFlight";
import { MyProvider } from "./Context";
import "./css/style.css";

function App() {
  return (
    <MyProvider>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/flights" component={Flights} />
          <Route exact path="/flights/:slug" component={SingleFlight} />
          <Route exact path="/about" component={About} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </React.Fragment>
    </MyProvider>
  );
}

export default App;
