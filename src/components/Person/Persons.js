import React, { Component } from 'react';
import SimpleContext from "./../../context/SimpleContext";
import Person from "./Person";
 class Persons extends Component{
    static contextType=SimpleContext;

     render(){
        const {persons}=this.context.state;
        return (

           
            <div>
                {/* { console.log(this..persons)} */}
                {persons.map(person => <Person key={person.id} fullname={person.fullname} delFullname={person.delFullname} deleted={()=>this.context.handleDeletedPerson(person.id)} changed={()=>this.context.handleChangedPerson(person.id)} edited={(event)=>this.props.setPerson1(event,person.id)} person1={person.id===this.props.person1.id?this.props.person1.value:""}/>)}
            </div>
          

        );
     }
 }   

export default Persons;