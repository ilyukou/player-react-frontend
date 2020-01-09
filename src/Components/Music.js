import React, {Component} from 'react';
import {Container, Col, Row, Card} from "react-bootstrap";
import {DOWNLOAD_FILE,GET_FILE_TYPE} from './APIproperties';
import axios from 'axios';

class Music extends Component {
    constructor(props) {
        super(props);

        this.state = {
            music : props.value
        };
    }

    render() {
        return (
            <div className="Music">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.state.music.name}</Card.Title>
                        <Card.Text>
                            More info. bla-bla
                        </Card.Text>
                        <Card.Link href={DOWNLOAD_FILE+"?id="+this.state.music.id}>Download</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Music;