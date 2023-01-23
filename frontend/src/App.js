import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import * as spotsActions from "./store/spots"
import * as reviewsActions from "./store/reviews"
import Navigation from ".//components/Navigation/index"

import Home from "./components/Home/Home"
import SpotDetails from "./components/SpotIndex/index.js";
import UpdateSpotForm from "./components/UpdateSpot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
const [isSpots, setIsSpots] = useState(false)
const [isReviews, setIsReviews] = useState(false)
const num = (window.location.href.length - 1)
const  spotsId = (window.location.href[num])
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch, isLoaded]);


  const spots = useSelector(state => state.spots)
  const reviews = useSelector(state=> state.reviews)

  useEffect(() => {
 

    dispatch(spotsActions.getSpots()).then(() => setIsSpots(true))
  
  }, [dispatch])
  
  useEffect(() => {
      dispatch(reviewsActions.getReviews(spotsId)).then(() => setIsReviews(true))
}, [dispatch. reviews])







  return (
    <>

<Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
        <Route
          exact
            path="/">
            <Home isLoaded={isLoaded}/>
          </Route>
          <Route
          
             path={`/spots/:spotsid`}>
            <SpotDetails isLoaded={isLoaded}/>
          </Route>
       
     <Route  path={"/spots/:spotId"}>
            <UpdateSpotForm isLoaded={isLoaded}/> 
         </Route> 
          <Route>
  <h1>404: Page not found</h1>
</Route>
        </Switch>
      )}
    </>
  );
}

export default App;