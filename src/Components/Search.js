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

            this.setState({response : null});

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
                <InputGroup>
                    <FormControl
                        id="inputQuery"
                        type="text"
                        name="text"
                        onChange={this.onChangeHandler}
                        placeholder="Search"
                    />
                </InputGroup>

                <DisplayMusic value={this.state.response}/>
            </div>
        );
    }
}

export default Search;