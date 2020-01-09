import React, {Component} from 'react';
import {UPLOAD_FILE} from "./APIproperties";
import axios from 'axios';
import {Col, Container, Row, InputGroup, FormControl, Button} from "react-bootstrap";

class FileForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFile : null
        };

        this.sendFileToServer = this.sendFileToServer.bind(this);
    }

    sendFileToServer(){
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        axios.put(UPLOAD_FILE, data).then(r => {});
    }

    onChangeHandler=event=>{
        console.log( event.target.files[0]);
        this.setState({selectedFile : event.target.files[0]});
    };

    render() {
        return (
            <Container>
                <Row className="show-grid pt-2" row align-items-center>
                    <Col>
                        <InputGroup>
                            <FormControl
                                type="file"
                                name="file"
                                placeholder="Put the file"
                                required
                                onChange={this.onChangeHandler}
                                accept="zip,
                                   application/octet-stream,
                                   application/zip,
                                   application/x-zip,
                                   application/x-zip-compressed"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={this.sendFileToServer}>Send</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default FileForm;
/*
<input id="uploadFileInput"
                       type="file"
                       name="file"
                       placeholder="Put the file"
                       required
                       onChange={this.onChangeHandler}
                       accept="zip,
                       application/octet-stream,
                       application/zip,
                       application/x-zip,
                       application/x-zip-compressed"
                />

                <button
                    placeholder="Send"
                    onClick={this.sendFileToServer}
                >
                    <label>Send</label>
                </button>
 */