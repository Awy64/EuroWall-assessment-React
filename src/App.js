import React, {useState} from "react";
import { Col, Container, Row } from 'react-bootstrap';
import LoginInfo from "./components/LoginInfo";
import data from './data/data.json';

function App() {
  const [state, setstate] = useState(data) // Please Type your name is here
  return (
    <div className="App">
      <header className="App-header">
      <Container>
        <Row>
          <Col md="4">
            <h1>Hello {state.name}</h1>
          </Col>
          <LoginInfo credentials={data.credentials}/>
        </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
