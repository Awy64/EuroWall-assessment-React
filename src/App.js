import React, {useState} from "react";
import { Col, Container, Row } from 'react-bootstrap';
import LoginInfo from "./components/LoginInfo";
import data from './data/data.json';
import "./App.css";
import Assessment1Instruction from "./components/Assessment1Instruction.js";
import Greeting from "./components/Greeting";
import Assessment1Function from "./components/Assessment1Function";

function App() {
  const [state, setstate] = useState(data) // Please Type your name is here
  return (
    <div className="App">
      <dev className="App-header">
      <Container>
        <Row>
          <Col md="6">
            <h1>Hello {state.name}</h1>
            <Greeting/>
          </Col>
          <LoginInfo credentials={state.credentials}/>
          <hr className="col-md-12 my-6" />
          <div class="col-md-6">            
                    <Assessment1Instruction/>
                
        </div>
        <div class="col-md-6">
            <Assessment1Function myWidgets={state.data.myWidgets} tagLookup={state.data.tagLookup}/>
        </div>
        </Row>
      </Container>
      </dev>
    </div>
  );
}

export default App;
