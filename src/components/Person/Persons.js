import React from 'react';
import Person from "./Person";
const Persons=({ persons,personDeleted,personchanged,setPerson1,person1})=> {
    
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
                {/* {console.log(person1)} */}
                {persons.map(person => <Person key={person.id} fullname={person.fullname} delFullname={person.delFullname} deleted={()=>personDeleted(person.id)} changed={()=>personchanged(person.id)} edited={(event)=>setPerson1(event,person.id)} person1={person.id===person1.id?person1.value:""}/>)}
            </div>

        );

    // }
}

export default Persons;