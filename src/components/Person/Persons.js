import React, { Component } from 'react';
import SimpleContext from "./../../context/SimpleContext";
import Person from "./Person";
// const Persons=({ persons,personDeleted,personchanged,setPerson1,person1})=> {
 class Persons extends Component{
     render(){
        return (
            <SimpleContext.Consumer>{context=>(
           
            <div>
                {/* { console.log(this..persons)} */}
                {context.state.persons.map(person => <Person key={person.id} fullname={person.fullname} delFullname={person.delFullname} deleted={()=>context.handleDeletedPerson(person.id)} changed={()=>context.handleChangedPerson(person.id)} edited={(event)=>this.props.setPerson1(event,person.id)} person1={person.id===this.props.person1.id?this.props.person1.value:""}/>)}
            </div>
             )
            }
                    </SimpleContext.Consumer>

        );
     }
 }   
    // constructor() {
    //     super();
    //     this.persons = persons;
    //     this.personDeleted=persons.map(person,()=>personDeleted(person.id));

    // }
    // personDeleted=function(){
    //     return personDeleted();
    // }

    // render() {


    // }
// }

export default Persons;