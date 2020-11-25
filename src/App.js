import React, { Component } from 'react';
import Persons from "./components/Person/Persons";
import { ToastContainer, toast } from 'react-toastify';
import SimpleContext from "./context/SimpleContext";
import Header from './components/common/Header';
import NewPerson from './components/Person/NewPerson';


class App extends Component {

    state = {
        persons: [],

        person: "",
        person1: {},
        showPersons: true,
        appTitle:'مدیریت برنامه ها'
    };
    handleShowPerson = () => {
        this.setState({ showPersons: !this.state.showPersons });
    }
    handleDeletedPerson = (id) => {
        const filterePerson = this.state.persons.map(p => {
            if (id === p.id) {
                p.delFullname = p.fullname;
                toast.error(`برنامه ${p.fullname} با موفقیت حذف شد`, {
                    position: toast.POSITION.TOP_CENTER
                  });

                return p;
            }
            return p;
        }
        );

        this.setState({ persons: filterePerson });
    }
    handleChangedPerson = (id) => {
        const allPersons = [...this.state.persons];
        const personIndex = allPersons.findIndex(p => id === p.id);
        const value1 = this.state.person1.value;
        allPersons[personIndex].fullname = value1;
        if (allPersons[personIndex].delFullname !== "") {
            allPersons[personIndex].delFullname = "";
        }


        this.setState({ persons: allPersons, person1: {} });

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
        toast.success("برنامه با موفقیت ثبت شد", {
            position: toast.POSITION.TOP_CENTER
          });
    }
    setPerson = (event) => {
        this.setState({ person: event.target.value });
    }
    setPerson1 = (event, id) => {
        const x = {};
        x.value = event.target.value;
        x.id = id;
        this.setState({ person1: x });

    }
    render() {
        let person = null;



        if (this.state.showPersons) {
            person = <Persons setPerson1={this.setPerson1} person1={this.state.person1} />;
        }
        return (
            <SimpleContext.Provider value={{
                state:this.state,
                handleDeletedPerson : this.handleDeletedPerson,
                handleChangedPerson : this.handleChangedPerson,
                handleNewPerson : this.handleNewPerson,
                setPerson : this.setPerson
            }}>
                <div className="rtl text-center">
               <Header/>             

               <NewPerson/>

                <div className="mt-3">
                    <button className={this.state.showPersons?"btn btn-success":"btn btn-danger"} onClick={this.handleShowPerson}>مدیریت برنامه ها</button>
                    {person}
                    <ToastContainer />
                </div>
            </div>
            </SimpleContext.Provider>
        );
    }
}
export default App;