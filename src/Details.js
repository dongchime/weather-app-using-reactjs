import React from 'react';
import propTypes from 'prop-types';
import './Details.css';

function Details({apparentTemperature, humidity, windSpeed, uvindex}) {
    return (
        <div className="Details">
            <table className="Details__Table">
                <tbody>
                    <tr>
                        <th className="leftside">Details</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td className="leftside">Feels like</td>
                        <td className="rightside">{Math.round((apparentTemperature - 32) * 5/9)}°</td>
                    </tr>
                    <tr>
                        <td className="leftside">Humidity</td>
                        <td className="rightside">{humidity} %</td>
                    </tr>
                    <tr>
                        <td className="leftside">Wind speed</td>
                        <td className="rightside">{windSpeed} km/h</td>
                    </tr>
                    <tr>
                        <td className="leftside">UV Index</td>
                        <td className="rightside">{uvindex}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Details.propTypes ={
    apparentTemperature: propTypes.number.isRequired,
    humidity: propTypes.number.isRequired,
    windSpeed: propTypes.number.isRequired,
    uvindex: propTypes.number.isRequired
}

export default Details;