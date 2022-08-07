import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LangingPage/LangingPage";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import Register from "./components/Register/Register";
function App() {
  const [user, setUser] = useState(null);
  const setUserData = (userEmail) => {
    setUser(userEmail);
  };
  useEffect(() => {
    const fetchUserData = () => {
      const userData = localStorage.getItem("user");
      setUser(userData);
    };
    fetchUserData();
  }, []);
  return (
    <BrowserRouter>
      <Navbar user={user} />
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route
            path="/login"
            render={(props) => (
              <LoginPage {...props} setUserData={setUserData} />
            )}
          />
          <Route path="/register" render={(props) => <Register {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
