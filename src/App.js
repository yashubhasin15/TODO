import React from 'react'
// import ReactDOM from 'react-dom'
import Header from "./components/Header"
import TodosList from "./components/TodosList"
import About from "./components/About"
import Footer from "./components/Footer"
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

export default function App(){
    

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <TodosList/>
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}