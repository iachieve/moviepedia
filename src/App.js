import React from 'react';
import Header from './components/layout/Header'
import './App.css';
import Footer from "./components/layout/Footer";
import Landing from "./components/home/Landing";
import {Container, Row} from "react-bootstrap";
function App() {
  return (
    <div className="App">
    <Header/>
    <Container>
      <Landing/>
    </Container>
    <Footer/>
    </div>
  );
}

export default App;