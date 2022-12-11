import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import {useFetch} from 'react-fetch-hook'
import Home from "./components/Home/Home.js"
import Header from "./components/Header/Header.js"
/* HOME:header, banner(search), cards, footer*/ 
/*/search page*/





function App() {
  // const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
 

  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  return (
    <>
    <div className="app">
    </div>
    <Header />
    <Home />
      {/* <Navigation isLoaded={isLoaded} /> */}
      {/* {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch> */}
      {/* )} */}
    </>
  );
}

export default App;