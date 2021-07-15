import React, { Component } from 'react';

class AddSuperhero extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newSuperheroName: '',
            newSuperheroPrimaryAbility: '',
            newSuperheroSeccondaryAbility: '',
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.tartet.name]: event.target.value
        });
    }

    handleSubmin = (event) => {
        event.preventDefault();
        this.props.addSuperhero(this.state.newSuperhroName)
    }

    render() { 
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Superhero Name</label>
                    <input name='newSuperheroName' onChange={this.handleChange} value={this.state.newSuperheroName} />
                    <br/>
                    <label>Primary Ability</label>
                    <input name='newSuperheroPrimaryAbility' onChange={this.handleChange} value={this.state.newSuperheroPrimaryAbility} />
                    <br/>
                    <label>Secondary Ability</label>
                    <input name='newSuperheroSeccondaryAbility' onChange={this.handleChange} value={this.state.newSuperheroSeccondaryAbility} />
                    <button type='submit'>Create</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default AddSuperhero;