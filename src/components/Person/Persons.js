import React, { useContext } from 'react';
import SimpleContext from "./../../context/SimpleContext";
import Person from "./Person";
const Persons=({setPerson1,person1})=>{
    const context=useContext(SimpleContext);


        const {persons}=context;
        return (

           
            <div>
                { console.log(person1)}
                {persons.map(person => <Person key={person.id} fullname={person.fullname} delFullname={person.delFullname} deleted={()=>context.handleDeletedPerson(person.id)} changed={()=>context.handleChangedPerson(person.id)} edited={(event)=>setPerson1(event,person.id)} person1={person.id===person1.id?person1.value:""}/>)}
            </div>
          

        );

 }   

export default Persons;