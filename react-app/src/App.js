import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ParallaxHomepage from "./components/MainPage/ParallaxHomepage"

// import { authenticate } from "./services/auth";
import { authenticate } from "./store/session";
import MainPage from './components/MainPage'
import Modal from "./components/MainPage/Modals/Modal";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Modal />
      <Switch>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
        <Route path="/opensesame" exact={true}>
          <NavBar />
          <LoginForm />
        </Route>
        <Route path="/testcomp" exact={true}>
          <ParallaxHomepage />
        </Route>
        <ProtectedRoute path="/imtheboss" exact={true}>
          <NavBar />
          <h1>My Admin Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
