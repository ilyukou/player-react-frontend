import React, {Component} from 'react';
import axios from 'axios';
import DisplayMusic from "./DisplayMusic";
import {SEARCH_URL} from "./APIproperties";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            response : null
        }
    }

    onChangeHandler=event=>{
        let query = document.getElementById("inputQuery").value;
        if(query !== undefined &&
            query.length > 0){

            axios.get(SEARCH_URL+"?query="+query)
                .then(r => {
                    if(r.data.status === "OK"){
                        this.setState({response : r.data.response});
                    }
                });
        }
    };

    render() {
        return (
            <div>
                <Container >
                    <Row className="show-grid pt-2" row align-items-center>
                        <Col>
                            <InputGroup>
                                <FormControl
                                    id="inputQuery"
                                    type="text"
                                    name="text"
                                    onChange={this.onChangeHandler}
                                    placeholder="Search"
                                />
                            </InputGroup>
                        </Col>

                    </Row>
                    <Row className="show-grid pt-2" row align-items-center>
                        <Col>
                            <DisplayMusic value={this.state.response}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Search;