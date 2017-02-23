import React, { Component } from 'react'

import picture from './img/paris.jpg'

import './WeatherCard.css'

class WeatherCard extends Component {

    // THIS COMPONENT TAKES A 'data' object as "props"

    /*
        DATA FORMAT SENT BY THE API :

        {
            "location": {
                "name": string,
                "region": string,
                "country": string,
                "lat": number,
                "lon": number,
                "tz_id": string,
                "localtime_epoch": number,
                "localtime": string
            },
            "current": {
                "temp_c": number,
                "is_day": boolean,
                "condition": {
                    "text": string,
                    "icon": string
                },
                "wind_kph": number
            }
        }

    */


    render() {

        const weather = this.props.data

        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image">
                    <img alt="city" src={ picture } />
                    <span className="card-title" style={ { fontSize: 36 } }>
                        { weather.current.temp_c } °C
                    </span>
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="weather-data">
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ weather.current.condition.text }</span>
                            </p>
                            <p>
                                <i className="material-icons">flag</i>
                                <span>{ weather.current.wind_kph } kph</span>
                            </p>
                        </div>

                        <img alt="icon" className="weather-icon" src={ weather.current.condition.icon } />
                    </div>
                    <div className="card-action center-align">
                        <a className="weather-city" href="#" onClick={ e => e.preventDefault() }>{ weather.location.name }</a>
                    </div>
                </div>
            </div>
        )
    }

}

export default WeatherCard