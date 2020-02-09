import React from 'react';
import PropTypes from 'prop-types';

export default function VideoSection(props) {
    const { video } = props;
    
    return (
        <div id='video-section'>
            <h2>Video Of Cooking</h2>
            <iframe width='100%' height='600px' title='video'
                // We are using this kind of writing because in the original url there is nor 'embed' part
                src={`https://www.youtube.com/embed/${video.slice(-11)}`}>
            </iframe>
        </div>
    )
}

VideoSection.prototypes = {
    video: PropTypes.string
};