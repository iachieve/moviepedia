import React from 'react';
import './App.css';
import Landing from "./components/home/Landing";
import {Container} from "react-bootstrap";
import {Route} from "react-router-dom";
import Movie from "./components/home/Movie";

function App() {
  return (
    <div className="App">
    <Container>
      <Route exact path="/" component={Landing}/>
      <Route path='/movie/:id' component={Movie}/>
    </Container>
    </div>
  );
}

export default App;