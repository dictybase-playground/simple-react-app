import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Greenbox from "./Greenbox";
import Yellowbox from "./Yellowbox";


class App extends Component {
    constructor(props) {
        super(props);
               
		this.state = {new_hobbie:''};				
	    this.onNewHobbie = this.onNewHobbie.bind(this);					
    }

    onNewHobbie(hobbie) {
    	this.setState( {new_hobbie: hobbie} )    
    }

    render( ) {
		const new_hobbie = this.state.new_hobbie
		          
		return ( 		   
			<div className="app">
				<Header />
				<div className= "container">				
					<Greenbox onNewHobbie={this.onNewHobbie}/>
					<Yellowbox new_hobbie={this.state.new_hobbie}/>
				</div>
			</div>
			);
	}
}

export default App;


