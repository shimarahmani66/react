const showPersonsReducers=(state=[],action)=>{
    switch(action.type){
        case "SHOW_PERSON":return !state;
        default:return state;
    }
    }
    export default showPersonsReducers;