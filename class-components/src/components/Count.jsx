import { Component } from "react";

class Count extends Component {
    render() {
        return (
            <h4>Number of tasks: {this.props.count}</h4>
        )
    }
}

export default Count;