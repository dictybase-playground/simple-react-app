import { combineReducers } from 'redux'
import hobbieReducer from './hobbies'


const rootReducer = combineReducers({
    hobbie: hobbieReducer
})

export default rootReducer
