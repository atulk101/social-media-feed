import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import Tweet from "./components/Timeline/Tweet";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/timeline" component={Landing} />
            <Route exact path="/tweet" component={Tweet} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
