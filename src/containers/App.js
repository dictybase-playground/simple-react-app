import React from 'react'
import Header from './Header'
import HobbieList from './HobbieList'
import AddHobbie from '../containers/AddHobbie'
import VisibleHobbieList from '../containers/VisibleHobbieList'
import './App.css'

const App = () => (
  <div>
  	<Header />
  	<div className= "container">	
  		<AddHobbie />            {/*container components that deal with Redux, dispatch "Actions", etc...*/}
    	<VisibleHobbieList />							
	</div>   
  </div>
)

export default App
