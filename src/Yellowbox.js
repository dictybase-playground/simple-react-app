import React, { Component } from 'react';
import './App.css';

class Yellowbox extends React.Component {
	constructor(props) {
        super(props);
        this.state = {hobbies: []}
        }
           		
	render() {	
	    const hobbies = this.state.hobbies;
	    if (this.props.new_hobbie)
    	    hobbies.push(this.props.new_hobbie);	    
        const hobbiesList = hobbies.map((hobbie) =>
                                        <li key={hobbie.id}>
                                           {hobbie}
                                        </li> );          	
		return (
			<div className= "yellow-box">
						<h1> My Hobbies ({this.state.hobbies.length}): </h1>
						<ul className= "hobbies"> 	
						   {hobbiesList}
						</ul>
			</div>
		);
	}
}

export default Yellowbox;

 
