import React from 'react';

const DisplayFirstNames = (props) => {
    return (
        <ul>
          {props.firstNames.map((firstName) => {
            return (
              <React.Fragment>
                <li>{firstName}</li>
                <hr />
              </React.Fragment>
            )
          })}
        </ul>
    );
}

export default DisplayFirstNames;