import React,{createContext} from 'react';
const SimpleContext=createContext({
    state:{},
    handleDeletedPerson : () => {},
    handleChangedPerson : () => {},
    handleNewPerson : () => {},
    setPerson : () => {},
    
});
export default SimpleContext;
