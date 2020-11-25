import {createContext} from 'react';
const SimpleContext=createContext({
    persons:[],
    person:"",
    handleDeletedPerson : () => {},
    handleChangedPerson : () => {},
    handleNewPerson : () => {},
    setPerson : () => {},
    
});
export default SimpleContext;
