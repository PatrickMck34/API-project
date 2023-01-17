import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import SignupFormModal from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import * as spotsActions from "./store/spots"
import Navigation from "./components/Navigation";
import * as reviewsActions from "./store/reviews"

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

useEffect(() => {
  dispatch(reviewsActions.getReviews())
}, [dispatch])

  // console.log(err.message);





  return (
    <>

      
        <Switch>
          
          {/* <Route path="/spots/create">
            <CreateSpotForm />
          </Route> */}
          <Route
            key={spots.id}
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
          <Route  path={"/spots/:spotId"}>
            <UpdateSpotForm />
          </Route>
          <Route>
  <h1>404: Page not found</h1>
</Route>
        </Switch>
      
    </>
  );
}

export default App;