import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import * as spotActions from "./store/spots"
import Navigation from "./components/Navigation";
// import {useFetch} from 'react-fetch-hook'
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import CreateSpotForm from './components/Get-Spot/index.js'
import Card from './components/Cards/Card'






function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
 

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
 useEffect(() => {
    // e.preventDefault(e);
    fetch('/api/spots')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
         dispatch(spotActions.getSpots(data))
         
        //  console.log(data.Spots)
        
          
        })
        .catch((err) => {
          // console.log(err.message);
        });
      }, [dispatch]);

 
  const spots = useSelector(state=> state.spots)

  return (
    <>
    <div className="app">
    </div>
  <Header />
    {/* <GetSpots /> */}
     {/* <Home />  */}
    <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
          <SignupFormPage />
          </Route>
          <Route
        path="/spots">
          <Card />
        
         </Route>
        </Switch>
      )}
    </>
      
  );
}

export default App;