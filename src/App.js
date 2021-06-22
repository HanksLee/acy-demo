import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter,Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store";
import './App.css';
import "@/css/config.scss";
import Navbar from "./Navbar";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          {/* <div>
              <ul>
                  <li>
                      <Link to="/">home</Link>
                  </li>
                  <li>
                      <Link to="/login">login</Link>
                  </li>
              </ul>
          </div> */}
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={React.lazy(() => import("./Home"))}></Route>
              <Route path="/login" component={React.lazy(() => import("./Login"))}></Route>
              {/* <Route exact path="/" render={() => <h3>This default router</h3>}></Route> */}
              {/* <Route path="/comp1" component={React.lazy(() => import("./Comp1"))}></Route>
              <Route path="/comp2" component={React.lazy(() => import("./Comp2"))}></Route> */}
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </div>
    </Provider>

  );
}

export default process.env.NODE_ENV === "development" ? hot(module)(App) : App
