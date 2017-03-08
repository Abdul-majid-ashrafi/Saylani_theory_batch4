import React, { Component } from 'react';


export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.myName
        }
    }
    render() {
        return (
            <div>
                Hello {this.state.name}
            </div>
        )
    }
}