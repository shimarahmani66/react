export const setShowPerson=()=>{
    return async dispatch => {
        await dispatch({type:"SHOW_PERSON"});
    };
}