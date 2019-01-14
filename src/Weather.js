import React from 'react';
import propTypes from 'prop-types';
import './Weather.css';

function Weather({temperature, summary}) {
    return (
        <div className="Weather">
            <div className="Weather__Location">
                <div className="Location_detail">Yeon-dong, Jeju</div>
                <div className="Location_country">South Korea</div>
            </div>

            <div className="Weather__Summary">{summary}</div>
            <div className="Weather__Temperature">{Math.round((temperature - 32) * 5/9)}°</div>
        </div>
    )
}

Weather.propTypes = {
    temperature: propTypes.number.isRequired,
    summary: propTypes.string.isRequired
}

export default Weather;