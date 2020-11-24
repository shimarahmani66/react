import React, { Component } from 'react';
import SimpleContext from "./../context/SimpleContext";
// const Persons=({ persons,personDeleted,personchanged,setPerson1,person1})=> {
class Header extends Component {
    render() {
        let badgeStyle="";
        // if(context.state.persons.length>=0){
        //     badgeStyle="badge-danger";
        // }
        // if(context.state.persons.length>=2){
        //     badgeStyle="badge-warning";

        // }
        // if(context.state.persons.length>=3){
        //     badgeStyle="badge-success";

        // }
        return (
            <SimpleContext.Consumer>{context=>(
  
        <div>
        <h2 className="alert alert-info">
            {context.state.appTitle}
        </h2>
        <h5 className="alert alert-light">
            برای امروز <span className={`badge badge-pill ${badgeStyle}`}>{context.state.persons.length}</span> برنامه دارید
        </h5>
        </div>
        
        )
    }
            </SimpleContext.Consumer>

        );
    }}
export default Header;

