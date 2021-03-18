import React, {Component} from 'react';

export default class Screen extends Component {
    render() {
        return(
            <div >
                <p className="scrn">{this.props.result}</p>
            </div>
        )
    }
}