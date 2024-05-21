import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import Register from "./components/Register/Register";
import SingleListPage from "./pages/SingleListPage/SingleListPage";
import Explore from "./components/Explore/Explore";
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
          <Route path="/explore" component={Explore} />
          <Route path="/listing/:id" component={SingleListPage} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
