import React, { useEffect } from "react";
import Home from "pages/Home";
import Auth from "pages/Authentication";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import { SET_TOKEN, SET_USER_PROFILE } from "constants/AUTH";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    // console.log(userProfile);
    if (token) {
      dispatch({
        type: SET_TOKEN,
        payload: token,
      });
    }
    if (userProfile) {
      dispatch({
        type: SET_USER_PROFILE,
        payload: userProfile,
      });
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
