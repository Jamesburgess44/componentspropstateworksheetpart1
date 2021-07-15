import React from 'react';

const DisplaySuperheroTable = (props) => {
    return (
        <React.Fragment>
        <h1>A Table of Superheros</h1>
        <div>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Superhero and Their Powers!!</th>
                                <th></th>
                                    </tr>
                                        </thead>
                                    <tbody>
                                {
                                    props.heroes.map((key) => {
                                        return (
                                            <tr key={key.superheroId}>
                                            <td className="text-muted">{key.name}</td>
                                            <td>{key.primaryAbility}</td>
                                            <td>{key.secondaryAbility}</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
            <div></div>
        </div>
        </React.Fragment>
    );
}


export default DisplaySuperheroTable;