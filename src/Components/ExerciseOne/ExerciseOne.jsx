import React from 'react';

const DisplayNames = (props) => {
    return (
        <div>
            <h1 className="display-4">First Name and Last Name</h1>
            <h1 className="text-muted">{props.firstName} {props.lastName}</h1>
        </div>
    );
}

export default DisplayNames;