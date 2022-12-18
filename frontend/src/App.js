import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormModal from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import * as spotsActions from "./store/spots"
import Navigation from "./components/Navigation";

import Home from "./components/Home/Home"

import CreateSpotForm from './components/Get-Spot/index.js'

import SpotDetails from "./components/SpotIndex/index.js";
import UpdateSpotForm from "./components/UpdateSpot";
import Delete from './components/DeleteSpot/deleteSpot'
import LoginFormModal from "./components/LoginFormModal";




function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  const spots = useSelector(state => state.spots)

  useEffect(() => {
    dispatch(spotsActions.getSpots())
  }, [dispatch])

  // console.log(err.message);





  return (
    <>

      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route
          key={"2"} path="/login">
            <LoginFormModal />
          </Route>
          {/* <Route path="/spots/create">
            <CreateSpotForm />
          </Route> */}
          <Route
          key={"3"} path="/signup">
            <SignupFormModal />
            </Route>
          <Route
            key={spots.id+"R"}
             path={`/spots/:spotsId`}>
            <SpotDetails />
          </Route>
          <Route
          key={"2"} 
          exact
            path="/">
            <Home />
          </Route>
          {/* <Route exact path="/spots/create" component={Delete} /> */}
          <Route key ={"9huy"} path="/spots/edit">
            <UpdateSpotForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;