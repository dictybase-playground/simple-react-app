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
        // Look here for better understanding
        // https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
    	this.setState((prevState) => ({
            // es6 spread operator, look here
            // https://davidwalsh.name/spread-operator
            hobbies: [...prevState.hobbies, hobbie]
        }));
    }

    render() {
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


