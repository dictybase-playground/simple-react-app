import React from 'react'
import Hobbie from './Hobbie'
import { YellowBox } from './styles'


//HobbieList presentational component - renders a list of items, recieves hobbies array
//State: Hobbies Array


const HobbieList = ({ hobbies }) => (
    <YellowBox>
	  <h1> My Hobbies: ({hobbies.length}) </h1>
	  <ul>
		{hobbies.map(hobbie =>
		  <Hobbie
		    key={hobbie.id}
		    {...hobbie}
		  />
		)}
	  </ul>
   </YellowBox>
)


export default HobbieList
