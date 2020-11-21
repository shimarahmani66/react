import React, { Component } from 'react';
import Persons from "./components/Person/Persons";

class App extends Component {

    state = {
        persons:[],
        person:"",
        showPersons:false
    };
    handleShowPerson=()=>{
         this.setState({showPersons:!this.state.showPersons});
    }
    handleDeletedPerson=(id)=>{
        
        const filterePerson=this.state.persons.filter(p=>id!==p.id);
        this.setState({persons:filterePerson});
   }
   handleChangedPerson=(event,id)=>{
    const allPersons=[...this.state.persons];    
    const personIndex=allPersons.findIndex(p=>id===p.id);
    // const person=allPersons[personIndex];
    // person.fullname=event.target.value;
    allPersons[personIndex].fullname=event.target.value;
    this.setState({persons:allPersons});
    
}
handleNewPerson=()=>{
    const allOfPersons=[...this.state.persons];  
    const thatPerson={
        id:allOfPersons.length,
        fullname:this.state.person
    }
    allOfPersons.push(thatPerson);
    this.setState({persons:allOfPersons,person:""});
}
setPerson=(event)=>{
    this.setState({person:event.target.value});
}

    render() {
        let person=null; 
        if(this.state.showPersons){
            person=<Persons persons={this.state.persons} personDeleted={this.handleDeletedPerson} personchanged={this.handleChangedPerson}/>;
            // console.log('hi')
        }
        return (
         <div>
            <div>
            <input type="text" placeholder="ساخت شخص جدید" onChange={this.setPerson} value={this.state.person}/>
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