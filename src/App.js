import React from 'react';
import './App.css';
import FileForm from "./Components/FileForm";
import Search from "./Components/Search";
import Brand from "./Components/Brand";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Container>
            <Row>
                <Col/>
                <Col>
                    <Brand/>
                    <FileForm/>
                    <Search/>
                </Col>
                <Col/>
            </Row>
        </Container>
    </div>
  );
}
export default App;