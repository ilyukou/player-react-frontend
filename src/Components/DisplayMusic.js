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
                <div className="musics">
                    <Music value={music}/>
                </div>
            );

            return <div>{response}</div>;
        }else {
            return <div/>
        }
    };
    render() {
        return (
            <div>
                {this.display()}
            </div>
        );
    }
}

export default DisplayMusic;