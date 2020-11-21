import React from 'react';
import Person from "./Person";
const Persons=({ persons,personDeleted,personchanged})=> {

    // constructor() {
    //     super();
    //     this.persons = persons;
    //     this.personDeleted=persons.map(person,()=>personDeleted(person.id));

    // }
    // personDeleted=function(){
    //     return personDeleted();
    // }

    // render() {
        return (
            <div>
                {persons.map(person => <Person key={person.id} fullname={person.fullname} deleted={()=>personDeleted(person.id)} changed={(event)=>personchanged(event,person.id)}/>)}
            </div>

        );

    // }
}

export default Persons;