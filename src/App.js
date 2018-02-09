import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium,{StyleRoot}  from 'radium';


class App extends Component {
  state ={
    persons:[
      {id:'1',name:'frankie',age:20},
      {id:'2',name:'tiffy',age:30},
      {id:'3',name:'truthy',age:50}
    ],
    others:'123',
    showPersons:false
  }
  
  togglePersonHandler = ()=>{
      const show = this.state.showPersons;
      this.setState({showPersons:!show});
  }
  
  nameChangedHandler = (event,id)=>{
    // const personIndex1 = this.state.persons.findIndex(id);
    // console.log(' personIndex1 ',personIndex1);
    
    const personIndex = this.state.persons.findIndex(person=> person.id === id);
    console.log(' personIndex ',personIndex);
    
    const newPerson = {...this.state.persons[personIndex]};
    newPerson.name = event.target.value;
    
    const newPersons = [...this.state.persons];
    // const newPersons = Object.assign({},this.state.persons);
    newPersons[personIndex] = newPerson;
    
    this.setState({
      persons:newPersons
    });
  }
  
  deletePersonHandler = (personIndex)=>{
    // const persons = this.state.persons;
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  
  render() {
    const style = {
      backgroundColor:'green',
      text:'white',
      font:'inherit',
      border:'1px solid red',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'salmon',color:'black'
      }
    }
    
    let persons = null;
    
    if(this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map((person,index)=>{
              return <Person name={person.name} age={person.age} key={person.id}
                          changed={(event)=>this.nameChangedHandler(event,person.id)}
                          click={()=> this.deletePersonHandler(index)} />
            })}
            {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}> Hobies : Pingpong ,tennis</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
          </div>
      );
      
      style.backgroundColor = 'red';
      style[':hover'] = {backgroundColor:'blue',color:'yellow'}
    }
    
    const classes = [];
    if(this.state.persons.length <=2) {
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }
    return (
      <StyleRoot>
          <div className="App">
          
            <hr/>
            <h1>Hi, Frankie here</h1>
            <p className={classes.join(' ')} > this is really working</p>
            <button style={style} onClick={this.togglePersonHandler}>toggle me</button>
            {persons}
          </div>
      </StyleRoot>
          
    );
  }
}

export default Radium(App);
