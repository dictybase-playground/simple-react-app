import React from 'react'
import Header from './Header'
import Hobbies from '../components/Hobbies'
import HobbieInput from '../components/HobbieInput'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addHobbie as addHobbieAction } from '../actions'
import './App.css'

const App = (props) => (
  <div>
  	<Header />
  	<div className= "container">
  		<HobbieInput />            {/*container components that deal with Redux, dispatch "Actions", etc...*/}
    	<Hobbies />
	</div>
  </div>
)

const mapStateToProps = (state) => {
    return {
        hobbies: state.hobbies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(addHobbieAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
