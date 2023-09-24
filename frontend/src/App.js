import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import * as spotsActions from "./store/spots"
import TreeFind from "./components/treeFind";


import Home from "./components/Tree"
import Navbar from "./components/navbar/Navbar";
import SingleTree from "./components/singleTree/singleTree";
import LoginFormModal from "./components/LoginFormModal";
import SignupFormModal from "./components/SignupFormModal";
import Admin from "./components/Admin/admin";
import Banner from "./components/Banner/Banner";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

const num = (window.location.href.length - 1)
const  spotsId = (window.location.href[num])
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch, isLoaded]);


  const spots = useSelector(state => state.spots)
 

  useEffect(() => {
    dispatch(spotsActions.getTrees())
    
  }, [dispatch])
  
  return (
    <>
 

        <Switch>
           <Route 
           key={spotsId + "new"}
      path={"/tree"}>
           <Navbar />
           <Banner />
          <TreeFind />
        </Route> 
        <Route
          exact
            path="/api/:treeId">
           <Navbar/>
    <Banner />
           <SingleTree  />
          </Route>
          <Route
          exact
            path="/admin">
           <Navbar />
            <LoginFormModal />
            {/* <SignupFormModal /> */}
          </Route>
          <Route
          exact
            path="/dashboard">
            <Admin />
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


</>
  );
}

export default App;