import React from 'react';
import './App.css';

class Yellowbox extends React.Component {
	render() {
        const { hobbies } = this.props;
		return (
			<div className= "yellow-box">
						<h1> My Hobbies ({hobbies.length}) </h1>
						<ul className= "hobbies">
                            {hobbies.map((hobbie, index) =>
                                <li key={index}>
                                    {hobbie}
                                </li>
                            )}
						</ul>
			</div>
		);
	}
}

export default Yellowbox;


