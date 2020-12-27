import React from "react";
import { Button } from "react-bootstrap";
import Header from "./components/common/Header";
import Persons from "./components/Person/Persons";
import NewPerson from "./components/Person/NewPerson";
import { useDispatch, useSelector } from "react-redux";
import {setShowPerson} from "./actions/showPersons"

const App = () => {
    const showPersons=useSelector(state=>state.showPerson1);
    const dispatch=useDispatch();

    return (
        <div className="rtl text-center">
            <Header
                appTitle="مدیریت کننده اشخاص" />

            <NewPerson/>

            <Button
                onClick={()=>dispatch(setShowPerson())}
                variant={showPersons ? "info" : "danger"}
            >
                نمایش اشخاص
            </Button>

            {showPersons?<Persons/>:null}
        </div>
    );
};
export default App;
