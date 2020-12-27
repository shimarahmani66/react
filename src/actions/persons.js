import { clearPerson } from "./person";

export const addPerson=(fullname)=>{
    return async (dispatch,getState) => {
        const persons = [...getState().persons1];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullname
        };
    
    if (person.fullname !== "" && person.fullname !== " ") {
        persons.push(person);
        await dispatch({type:"ADD_PERSON",payload:persons});
        await dispatch(clearPerson);
    }
    };
}
export const deletePerson=(id)=>{
    return async (dispatch,getState) => {
        const persons = [...getState().persons1];
        const filteredPersons = persons.filter(p => p.id !== id);
        await dispatch({type:"DELETE_PERSON",payload:filteredPersons});
    };
}
export const updatePerson=(event, id)=>{
    return async (dispatch,getState) => {
        const allPersons = [...getState().persons1];

        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;

        const persons = [...allPersons];

        persons[personIndex] = person;
        await dispatch({type:"UPDATE_PERSON",payload:persons});
    };
}