//Reducers are functions that take "state" from Redux and "action"
//JSON object and return a new state to be stored back in Redux.

// 1. Reducer function is called by the "container" when there is a user action.
// 2. If the reducer changes state, Redux passes the new state to each component
//    and React re-renders each component.
  
const hobbieApp = (state = [], action) => {  //takes Redux state and returns a new array of hobbies (new state)
  switch (action.type) {  //new Hobbie added if action's type is "ADD_HOBBIE"
    case 'ADD_HOBBIE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text       
        }
      ]

    default:
      return state
  }
}

export default hobbieApp
