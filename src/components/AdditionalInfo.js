import React from 'react';
import PropTypes from 'prop-types';

export default function AdditionalInfo(props) {
    const {
        image,
        category,
        area,
        ingredients
    } = props;
    
    return (
        <div className='column'>
            <img id='meal-image' src={image} alt='meal'/>
            <div id='area-and-ingredients-container'>
                <span className='category-area-text'><strong>Category:</strong> {category}</span>
                <span className='category-area-text'><strong>Area:</strong> {area}</span>
                <h2>Ingredients</h2>
                {/* Creating list from ingredients object */}
                <ul>
                    {
                        Object.entries(ingredients).map((item, index) => {
                            return <li key={index}><strong>{item[0]}:</strong> {item[1]}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

AdditionalInfo.protoTypes = {
    image: PropTypes.string,
    category: PropTypes.string,
    area: PropTypes.string,
    ingredients: PropTypes.object
};