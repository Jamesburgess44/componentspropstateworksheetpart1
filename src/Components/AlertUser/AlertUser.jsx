import React, { Component } from 'react';

class AlertUser extends Component {
    click() {
        alert("devCodeCamp")
    }
    render() {
        return (
            <React.Fragment>
                <form>
                    <button onClick={this.click}>Click Me!</button>
                </form>
            </React.Fragment>
        );
    }
}

export default AlertUser;