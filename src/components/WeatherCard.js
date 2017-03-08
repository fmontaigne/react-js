import React, { Component } from 'react'

import './WeatherCard.css'

class WeatherCard extends Component {

    render() {

        const { locationName, temperature, weatherConditionText, weatherConditionIcon, windSpeed, picture } = this.props

        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image weather-img-container">
                    <img alt="city" className="weather-img" src={ picture } />
                    <span className="card-title" style={ { fontSize: 36 } }>
                        { temperature } °C
                    </span>
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="weather-data">
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ weatherConditionText }</span>
                            </p>
                            <p>
                                <i className="material-icons">flag</i>
                                <span>{ windSpeed } kph</span>
                            </p>
                        </div>

                        <img alt="icon" className="weather-icon" src={ weatherConditionIcon } />
                    </div>
                    <div className="card-action center-align">
                        <a className="weather-city" href="#" onClick={ e => e.preventDefault() }>{ locationName }</a>
                    </div>
                </div>
            </div>
        )
    }

}

export default WeatherCard