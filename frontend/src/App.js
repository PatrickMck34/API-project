import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import * as spotsActions from "./store/spots"
import * as reviewsActions from "./store/reviews"
import Navigation from ".//components/Navigation/index"
import CreateSpotForm from "./components/Get-Spot";
import Home from "./components/Home/Home"
import SpotDetails from "./components/SpotIndex/index.js";
import UpdateSpotForm from "./components/UpdateSpot";
import ReviewCard from "./components/ReviewCard/ReviewCards";
import Header from "../src/components/Header/Header"

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
    dispatch(spotsActions.getSpots())
  
  }, [dispatch])

  return (
    <>
 
<Navigation isLoaded={isLoaded} />
      {isLoaded && (
      
        <Switch>
           <Route 
           key={spotsId + "new"}
      path={"/spots/:spotsid/new"}>
            <CreateSpotForm spots={spots}/> 
        </Route> 
          <Route
          key={spotsId}
             path={`/spots/:spotsid`}>
            <SpotDetails spots={spots}/>
          </Route>
        <Route
          exact
            path="/">
           
            <Home />
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