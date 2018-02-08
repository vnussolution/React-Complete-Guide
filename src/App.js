import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state ={
    persons:[
      {name:'frankie',age:20},
      {name:'tiffy',age:30},
      {name:'truthy',age:50}
    ],
    others:'123',
    showPersons:false
  }
  
  togglePersonHandler = ()=>{
      const show = this.state.showPersons;
      this.setState({showPersons:!show});
  }
  
  nameChangedHandler = (event)=>{
    this.setState({
      persons:[
        {name:'newName',age:20},
        {name:event.target.value,age:30},
        {name:'truthy123',age:50}
      ]
    });
  }
  
  deletePersonHandler = (personIndex)=>{
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  
  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid red',
      padding:'8px',
      cursor:'pointer'
    }
    
    let persons = null;
    
    if(this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map((person,index)=>{
              return <Person name={person.name} age={person.age} click={()=> this.deletePersonHandler(index)} />
            })}
            {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}> Hobies : Pingpong ,tennis</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
          </div>
      );
    }
    return (
      <div className="App">
      
        <hr/>
        <h1>Hi, Frankie here</h1>
        <p> this is really working</p>
        <button style={style} onClick={this.togglePersonHandler}>toggle me</button>
        {persons}
      </div>
    );
  }
}

export default App;
