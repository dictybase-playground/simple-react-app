import React from 'react';
import './App.css';


class Greenbox extends React.Component {

	// This syntax ensures `this` is bound within handleClick.
    // https://facebook.github.io/react/docs/handling-events.html
    // It binds to the input element
	handleChange = (event) => {
        // use camelCase not snake_case
	    this.setState( {newHobbie: event.target.value} );
	}
    // Read the link below to understand why we are using handlers
    // for every form components(such as input here).
	// https://facebook.github.io/react/docs/forms.html#controlled-components
	handleSubmit = (event) => {
        // check for empty input
        if (this.state.newHobbie) {
	        this.props.onNewHobbie(this.state.newHobbie);
        }
	    event.preventDefault();
	}

	render() {
		return (
			<div className="green-box">
                <form className= "form" onSubmit={this.handleSubmit}>
                    <input className= "add-item"  id='id' type= "text" onChange={this.handleChange}/>
                    <input type= "submit" value= "Add"/>
                </form>
			</div>
		);
	}
}

export default Greenbox;

