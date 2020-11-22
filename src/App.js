import React, { Component } from 'react';
import Persons from "./components/Person/Persons";

class App extends Component {

    state = {
        persons: [],

        person: "",
        person1: {},
        showPersons: false
    };
    handleShowPerson = () => {
        this.setState({ showPersons: !this.state.showPersons });
    }
    handleDeletedPerson = (id) => {
        // const filterePerson1=[...this.state.persons[deletedPersonIndex]];
        // const filterePerson=this.state.persons.filter(p=>id!==p.id);
        const filterePerson = this.state.persons.map(p => {
            if (id === p.id) {
                p.delFullname = p.fullname;

                return p;
            }
            return p;
        }
        );
        // const filterePerson1=this.state.persons;
        // const filterePerson={id:filterePerson1[deletedPersonIndex].id,fullname:filterePerson1[deletedPersonIndex].fullname,delFullname:filterePerson1[deletedPersonIndex].fullname};
        // filterePerson1
        // const filterePerson1=
        this.setState({ persons: filterePerson });
    }
    handleChangedPerson = (id) => {
        const allPersons = [...this.state.persons];
        const personIndex = allPersons.findIndex(p => id === p.id);
        const value1 = this.state.person1.value;
        // const person=allPersons[personIndex];
        // person.fullname=event.target.value;
        // console.log( this.state.person1[0].val);
        // ~~ allPersons[personIndex].fullname = this.state.person1;
        allPersons[personIndex].fullname = value1;
        if (allPersons[personIndex].delFullname !== "") {
            allPersons[personIndex].delFullname = "";
        }
        // personss1=[{id:"",val:""}];

        this.setState({ persons: allPersons,person1:{} });

    }
    handleNewPerson = () => {
        const allOfPersons = [...this.state.persons];
        const thatPerson = {
            id: allOfPersons.length,
            fullname: this.state.person,
            delFullname: "",

        }
        allOfPersons.push(thatPerson);
        this.setState({ persons: allOfPersons, person: "" });
    }
    setPerson = (event) => {
        this.setState({ person: event.target.value });
    }
    setPerson1 = (event,id) => {
         const x={};
        // const x=this.state.person1;
        x.value=event.target.value;
        x.id=id;
        // x.value=event.target.value;
        this.setState({ person1: x });
        
        //~~ this.setState({ person1: event.target.value });

        // const Personss = this.state.persons.map(p => {
        //     if (id === p.id) {
        //         p.id = id;
        //         p.val= event.target.value;;
        //         // p.val=event.target.value;
        //         return p;
        //     }
        //      p.id = id;
        //      p.val="";
        //     return p;
        // }
        // );
        // this.setState({ person1: Personss });
    }
    render() {
        let person = null;
        if (this.state.showPersons) {
            person = <Persons persons={this.state.persons} personDeleted={this.handleDeletedPerson} personchanged={this.handleChangedPerson} setPerson1={this.setPerson1} person1={this.state.person1} />;
            // console.log('hi')
        }
        return (
            <div>
                <div>
                    <input type="text" placeholder="ساخت شخص جدید" onChange={this.setPerson} value={this.state.person} />
                    <button onClick={this.handleNewPerson}>افزودن</button>
                </div>
                <div>
                    <button onClick={this.handleShowPerson}>مدیریت اشخاص</button>
                    {person}
                </div>
            </div>

        );
    }
}
export default App;