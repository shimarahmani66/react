import React, { Component } from 'react';
import SimpleContext from "./../../context/SimpleContext";
// const Persons=({ persons,personDeleted,personchanged,setPerson1,person1})=> {
 class NewPerson extends Component{
    render() {
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
                <div className="d-flex justify-content-center">
                <div className="input-group w-25 ">
                <input className="form-control" type="text" placeholder="ساخت برنامه جدید" onChange={context.setPerson} value={context.state.person} />
                <div className="input-group-prepend">
                    <button type="submit" onClick={context.handleNewPerson} className="btn btn-success fa fa-plus" />    
                </div>
                
            </div>
                </div>
        
        )
    }
            </SimpleContext.Consumer>

        );
    }}
export default NewPerson;