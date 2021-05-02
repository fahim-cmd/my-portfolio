import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ContactPage from './components/ContactPage/ContactPage';



function App() {
  return (
    <>
      <Router>
     
        <Main></Main>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
