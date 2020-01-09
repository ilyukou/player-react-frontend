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
                <div>
                        <InputGroup>
                            <FormControl
                                type="file"
                                name="file"
                                placeholder="Put the file"
                                required
                                onChange={this.onChangeHandler}
                            />
                        </InputGroup>

                        <Button onClick={this.sendFileToServer}>Send</Button>
                </div>
        );
    }
}
export default FileForm;
/*
accept="zip,
                                   application/octet-stream,
                                   application/zip,
                                   application/x-zip,
                                   application/x-xz,
                                   application/x-7z-compressed,
                                   application/x-zip-compressed"
                                   */