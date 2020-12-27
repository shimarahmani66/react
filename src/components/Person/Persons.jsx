import React from "react";
import Person from "./Person";
import { useDispatch, useSelector } from "react-redux";
import {deletePerson,updatePerson} from './../../actions/persons';

const Persons = () => {
    const persons=useSelector(state=>state.persons1);
    const dispatch=useDispatch();
    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    deleted={() => dispatch(deletePerson(person.id))}
                    changed={event => dispatch(updatePerson(event, person.id))}
                />
            ))}
        </div>
    );
};

export default Persons;
