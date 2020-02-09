import React from 'react';
import PropTypes from 'prop-types';

export default function Instructions(props) {
    const { name, instructions } = props;

    return (
        <div className='column' id='instructions-container'>
            <span id='meal-title'>{name}</span>
            <p>{instructions}</p>
        </div>
    )
}

Instructions.propTypes = {
    name: PropTypes.string,
    instructions: PropTypes.string
};