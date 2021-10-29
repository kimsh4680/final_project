import React from "react";
import LoginTest from "./LoginTest";
import Home from "./Home";
import { Route } from "react-router-dom";
import JoinTest from "./JoinTest";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/join" component={JoinTest} />
      <Route path="/login" component={LoginTest} />
    </>
  );
}
