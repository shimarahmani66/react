import React, { useState } from 'react';
import Persons from "./components/Person/Persons";
import { ToastContainer, toast } from 'react-toastify';
import SimpleContext from "./context/SimpleContext";
import Header from './components/common/Header';
import NewPerson from './components/Person/NewPerson';

const App=()=> {
    const [getPersons,setPersons]=useState([]);
    const [getSinglePerson,setSinglePerson]=useState("");
    const [getSinglePerson1,setSinglePerson1]=useState({});
    const [getShowPersons,setShowPersons]=useState(true);



    const handleShowPerson = () => {
        setShowPersons(!getShowPersons );
    }
    const handleDeletedPerson = (id) => {
        const filterePerson = getPersons.map(p => {
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

        setPersons(filterePerson);
    }
    const handleChangedPerson = (id) => {
        const allPersons = [...getPersons];
        const personIndex = allPersons.findIndex(p => id === p.id);
        const value1 = getSinglePerson1.value;
        allPersons[personIndex].fullname = value1;
        if (allPersons[personIndex].delFullname !== "") {
            allPersons[personIndex].delFullname = "";
        }


        setPersons(allPersons);
        setSinglePerson1({})
    }
    const handleNewPerson = () => {
        const allOfPersons = [...getPersons];
        const thatPerson = {
            id: allOfPersons.length,
            fullname: getSinglePerson,
            delFullname: "",

        }
        allOfPersons.push(thatPerson);
        setPersons(allOfPersons);
        setSinglePerson("");
        toast.success("برنامه با موفقیت ثبت شد", {
            position: toast.POSITION.TOP_CENTER
          });
    }
    const setPerson = (event) => {
        setSinglePerson(`${event.target.value}`);
    }
    const setPerson1 = (event, id) => {
        const x = {};
        x.value = event.target.value;
        x.id = id;
        setSinglePerson1(x);
    }

        let person = null;



        if (getShowPersons) {
            person = <Persons setPerson1={setPerson1} person1={getSinglePerson1} />;
        }
        return (
            <SimpleContext.Provider value={{
                persons:getPersons,
                person:getSinglePerson,
                handleDeletedPerson : handleDeletedPerson,
                handleChangedPerson : handleChangedPerson,
                handleNewPerson : handleNewPerson,
                setPerson : setPerson
            }}>
                <div className="rtl text-center">
               <Header appTitle="مدیریت برنامه ها"/>             

               <NewPerson/>

                <div className="mt-3">
                    <button className={getShowPersons?"btn btn-success":"btn btn-danger"} onClick={handleShowPerson}>مدیریت برنامه ها</button>
                    {person}
                    <ToastContainer />
                </div>
            </div>
            </SimpleContext.Provider>
        );


}
export default App;