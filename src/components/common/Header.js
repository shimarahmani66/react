import React, { useContext } from 'react';
import SimpleContext from "../../context/SimpleContext";
// const Persons=({ persons,personDeleted,personchanged,setPerson1,person1})=> {
const Header =(props)=> {
    const context=useContext(SimpleContext);
    

        const {persons}=context;
        let badgeStyle="";
        if(persons.length<=1){
            badgeStyle="badge-danger";
        }
        if(persons.length===2){
            badgeStyle="badge-warning";

        }
        if(persons.length>=3){
            badgeStyle="badge-success";

        }
        return (

  
        <div>
        <h2 className="alert alert-info">
            {props.appTitle}
        </h2>
        <h5 className="alert alert-light">
            برای امروز <span className={`badge badge-pill ${badgeStyle}`}>{persons.length}</span> برنامه دارید
        </h5>
        </div>
      

        );
    }
export default Header;

