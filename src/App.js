import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Course from "./components/Course/Course";
import CourseContainer from "./components/CourseContainer/CourseContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import InstructorDetails from "./components/InstructorDetails/InstructorDetails";
import Instructors from "./components/Instructors/Instructors";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/instructors">
          <Instructors />
        </Route>
        <Route path="/instructor/:id">
          <InstructorDetails />
        </Route>
        <Route path="/courses">
          <CourseContainer />
        </Route>
        <Route path="/course/:id">
          <Course />
        </Route>
        <Route path="/dashboard">
          <AdminDashboard />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
