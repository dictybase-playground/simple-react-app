import React from 'react'
import { connect } from 'react-redux'
import { addHobbie } from '../actions'

// AddHobbie component: 1. State: N/A- the field's display doesn't change.
// 2. Actions (Events): allow us to create new Hobbie items by listening to DOM events and by reading data 
//from the input field. This event is mapped into a JSON object (with type ADD_HOBBIE) called Action.

//This container implements the "onSubmit" callback fubction and pass it as a property to the child 
//presentation component. When a user submits new hobbie, this "onSubmit" will be called.

let AddHobbie = ({ dispatch }) => {
  let input

  return (
    
    <div className= "green-box">
      <form className= "form" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addHobbie(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <input type="submit" value= "Add"/>
      
      </form>
    </div>
  )
}
AddHobbie = connect()(AddHobbie)

export default AddHobbie
