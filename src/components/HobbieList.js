import React from 'react'
import Hobbie from './Hobbie'


//HobbieList presentational component - renders a list of items, recieves hobbies array 
//State: Hobbies Array 


const HobbieList = ({ hobbies }) => (
  <div className= "yellow-box">
	  <h1> My Hobbies: ({hobbies.length}) </h1>
	  <ul>
		{hobbies.map(hobbie =>
		  <Hobbie
		    key={hobbie.id}
		    {...hobbie}		   
		  />
		)}
	  </ul>
  </div>
)


export default HobbieList
