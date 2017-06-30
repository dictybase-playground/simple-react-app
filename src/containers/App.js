import React from 'react'
import Header from '../components/Header'
import HobbieList from '../components/HobbieList'
import HobbieInput from '../components/HobbieInput'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as hobbyActionCreators from '../actions'
import '../components/App.css'

// es6 destructuring http://exploringjs.com/es6/ch_destructuring.html#sec_destructuring-patterns
const App = ({actions, hobbies }) => (
  <div>
  	<Header />
  	<div className= "container">
  		<HobbieInput actions={actions} />
    	<HobbieList hobbies={hobbies} />
	</div>
  </div>
)

// https://github.com/reactjs/react-redux/blob/master/docs/api.md#inject-todos-and-all-action-creators-addtodo-completetodo--as-actions
const mapStateToProps = (state) => {
    return {
        // gets passed as props
        hobbies: state.hobbies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // gets passed as props
        actions: bindActionCreators(hobbyActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
