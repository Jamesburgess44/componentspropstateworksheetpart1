import React, { Component } from 'react';

class AddSuperhero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            superheroId: '',
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const superhero = {
            superheroId: this.props.superheroArray.length + 1,
            name: this.state.newName,
            primaryAbility: this.state.newPrimaryAbility,
            secondaryAbility: this.state.newSecondaryAbility
        }
        this.props.addNewSuperhero(superhero);
        console.log(this.props.superheroArray)
        this.setState({
            superheroId: '',
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        });
        
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Create Your Own Superhero!!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Superhero Name</label>
                    <input name='newName' onChange={this.handleChange} value={this.onChange}></input>
                    <br/>
                    <label>Primary Ability</label>
                    <input name='newPrimaryAbility' onChange={this.handleChange} value={this.onChange}></input>
                    <br/>
                    <label>Secondary Ability</label>
                    <input name='newSecondaryAbility' onChange={this.handleChange} value={this.onChange}></input>
                    <button type='submit'>Create</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default AddSuperhero;