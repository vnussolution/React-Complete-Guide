import React from 'react';
import Person from './Person.css';
import Radium from 'radium';


const person=(props)=>{
    
    const style = {'@media (max-width:900px)':{
        width:'150px'
    }};
    return (
        <div className='Person' style={style}>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old</p>
            <h3> {props.children}</h3>
            <input type='text' 
                onChange={props.changed}
                value={props.name}
            />
        </div>
    )
};

export default Radium(person);