import {combineReducers} from 'redux';
import personReducers from './person';
import personsReducers from './persons';
import showPersonsReducers from './showPerson';
const reducers=combineReducers({
person:personReducers,
persons1:personsReducers,
showPerson1:showPersonsReducers
})
export default reducers;