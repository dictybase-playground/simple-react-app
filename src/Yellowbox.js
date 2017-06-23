import './App.css';
import React from 'react';

const Yellowbox = (props) => {
    return (
        <div className= "yellow-box">
                    <h1> My Hobbies ({props.hobbies.length}) </h1>
                    <ul className= "hobbies">
                        {props.hobbies.map((hobbie, index) =>
                            <li key={index}>
                                {hobbie}
                            </li>
                        )}
                    </ul>
        </div>
    );
}

export default Yellowbox;


