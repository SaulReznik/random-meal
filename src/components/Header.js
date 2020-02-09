import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
    const { getMeal } = props;

    return (
        <header>
            <h1>Push The Button To Get A Meal</h1>
            <button id='get-meal-btn' onClick={getMeal}>Get Meal</button>
        </header>
    );
}

Header.propTypes = {
    getMeal: PropTypes.func
}