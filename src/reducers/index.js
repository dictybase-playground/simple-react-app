import { combineReducers } from 'redux'
import hobbieReducer from './hobbies'


const rootReducer = combineReducers({
    hobbies: hobbieReducer
})

export default rootReducer
