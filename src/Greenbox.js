import React, { Component } from 'react';
import './App.css';
import Yellowbox from "./Yellowbox";


class Greenbox extends React.Component {
	
	handleChange(event){
		this.setState( {new_hobbie: event.target.value} );
	}
	
	handleSubmit(event){	
	    this.props.onNewHobbie(this.state.new_hobbie);	 
	    event.preventDefault();	  
	    document.getElementById("id").value=''; //this clears the input field
	}
	
	render(){		
		return (
			<div className="green-box">
						<form className= "form" onSubmit={this.handleSubmit.bind(this)}>
							<input className= "add-item"  id='id' type= "text" onChange={this.handleChange.bind(this)}/>
							<input type= "submit" value= "Add"/>						
						</form>
			</div>
		);
	}
}

export default Greenbox;

