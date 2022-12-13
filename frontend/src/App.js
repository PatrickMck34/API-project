import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import {useFetch} from 'react-fetch-hook'
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import CreateSpotForm from './components/CreateSpots/index.js'
/* HOME:header, banner(search), cards, footer*/ 
/*/search page*/
import GetSpots from './components/GetSpots/index'





function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
 

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
    <div className="app">
    </div>
  <Header />
    <GetSpots />
     <Home /> 
    <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
          <SignupFormPage />
          </Route>
          <Route
        path="/spots">
        <CreateSpotForm />
 </Route>
        </Switch>
      )}
    </>
      
  );
}

export default App;