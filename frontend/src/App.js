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


  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  const spots = useSelector(state => state.spots)
  const reviews = useSelector(state=> state.reviews.allReviews)

  useEffect(() => {
    dispatch(spotsActions.getSpots())
    
  }, [dispatch])
  
//   useEffect(() => {
//   if(reviews.length)
//   dispatch(reviewsActions.getReviews())
// }, [reviews.length, dispatch])

  // console.log(err.message);





  return (
    <>

      <Navigation/>
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