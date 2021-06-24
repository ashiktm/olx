import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext, FirebaseContext } from "./contexts/FirebaseContext";
// import SignupPage from "./Pages/Signup";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import Create from "./Components/Create/Create";
import ViewPost from "./Pages/ViewPost";
import Post from "./contexts/PostContext";
function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/create" component={Create} />
          <Route path="/view" component={ViewPost} />
        </Router>
      </Post>
    </div>
  );
}

export default App;
