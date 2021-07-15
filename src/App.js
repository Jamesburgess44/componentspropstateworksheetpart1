import React, { Component } from 'react';
import DisplayFirstNames from './Components/ExerciseTwo/ExerciseTwo';
import AlertUser from './Components/AlertUser/AlertUser'
import DisplaySuperheroTable from './Components/SuperheroTable/SuperheroTable';
import DisplayNames from './Components/ExerciseOne/ExerciseOne';
import AddSuperhero from './Components/AddSuperhero/AddSuperhero';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: ['Reggie'],
      lastName: ['White'],
      firstNames: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
      superheroes: [
        {
            superheroId: 1,
            name: 'Batman',
            primaryAbility: 'Wealthy',
            secondaryAbility: 'Rich'
        },
        {
            superheroId: 2,
            name: 'Superman',
            primaryAbility: 'Super strength',
            secondaryAbility: 'Fly'
        },
        {
            superheroId: 3,
            name: 'Spiderman',
            primaryAbility: 'Spider senses',
            secondaryAbility: 'Shoots web'
        }
    ]
  }
  }

  addNewSuperhero(superhero){
    let tempSuperhero = this.state.superheroes
    tempSuperhero.push(superhero);
    this.setState({
        superheroes: tempSuperhero
    })
}

  render() {
    return (
      <React.Fragment>
        <DisplayNames firstName={this.state.firstName} lastName={this.state.lastName}/>
        <DisplayFirstNames firstNames={this.state.firstNames} />
        <AlertUser />
        <AddSuperhero addNewSuperhero={this.addNewSuperhero.bind(this)} superheroArray={this.state.superheroes}/>
        <DisplaySuperheroTable heroes={this.state.superheroes}/>
      </React.Fragment>
    );
  }
}

export default App;