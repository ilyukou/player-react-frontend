import React, {Component} from 'react';
import Music from "./Music";

class DisplayMusic extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.display = this.display.bind(this);
    }

    display(){
        if(this.props.value !== null){
            let response =  this.props.value.map((music) =>
                <Music value={music}/>
            );
            return <div>{response}</div>;

        }else {
            return <div/>
        }
    };
    render() {
        return (
            <div className="DisplayMusic">
                {this.display()}
            </div>
        );
    }
}

export default DisplayMusic;