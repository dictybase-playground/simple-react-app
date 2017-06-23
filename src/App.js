import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Greenbox from "./Greenbox";
import Yellowbox from "./Yellowbox";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {hobbies: []};
    }

    onNewHobbie = (hobbie) => {
    	this.setState((prevState) => ({
            hobbies: [...prevState.hobbies, hobbie]
        }));
    }

    render( ) {
		return (
			<div className="app">
				<Header />
				<div className= "container">
					<Greenbox onNewHobbie={this.onNewHobbie}/>
					<Yellowbox hobbies={this.state.hobbies}/>
				</div>
			</div>
			);
	}
}

export default App;


