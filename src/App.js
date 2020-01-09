import React from 'react';
import './App.css';
import FileForm from "./Components/FileForm";
import Search from "./Components/Search";
import Brand from "./Components/Brand";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Container>
            <Row>
                <Brand/>
            </Row>
            <Row>
                <FileForm/>

            </Row>
            <Row>
                <Search/>
            </Row>
        </Container>
    </div>
  );
}
export default App;