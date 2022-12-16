import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormModal from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import * as spotsActions from "./store/spots"
import Navigation from "./components/Navigation";
// import {useFetch} from 'react-fetch-hook'
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import CreateSpotForm from './components/Get-Spot/index.js'
import Card from './components/Cards/Card'
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
  const spots = useSelector(state=> state.spots)

 useEffect(() => {
         dispatch(spotsActions.getSpots())
             }, [dispatch])

          // console.log(err.message);
        
    

 

  return (
    <>
    
    <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact
        path={`/spots/${spots.id}`} component={SpotDetails}/>
          <Route path="/" >
            <Home/>
            </Route>
            <Route path="/login">
        <LoginFormModal />
        </Route>
          <Route path="/signup">
          <SignupFormModal />
      
          </Route>
          <Route path="/spots/create">
             <CreateSpotForm/>
            </Route>
          <Route path="/spots/edit">
            <UpdateSpotForm/>
            </Route>
          <Route exact path="/spots/create" component={Delete}/>
        </Switch>
      )}
    </>
  );
}

export default App;