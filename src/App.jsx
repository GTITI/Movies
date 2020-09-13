import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BreakpointProvider } from "react-socks";
import TvShowSearch from "./containers/TvShowSearch/TvShowSearch";
import TvShowDetailsContainer from "./containers/TvShowDetails/TvShowDetailsContainer";
import Header from "./containers/Header/Header";
import "./App.css";

function App() {
  return (
    <BreakpointProvider>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={TvShowSearch} />
            <Route
              exact
              path="/tvShow/:id"
              component={TvShowDetailsContainer}
            />
          </Switch>
        </Router>
      </div>
    </BreakpointProvider>
  );
}

export default App;
