/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import defaultPicture from './components/img/default.jpg'

const APP_TITLE = 'Awesome App'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS } from './utils/api'

//components
import WeatherCard from './components/WeatherCard'

class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            weather: undefined,
            city: ''
        }
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{ APP_TITLE }</h1>
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>

                <div className="App-content">
                    <div className="center-align">

                        <form onSubmit={ this.fetchWeather }>

                            <div className="row">
                                <div className="input-field col s6 offset-s3">
                                    <input id="cityInput" type="text" value={ this.state.city } onChange={ this.handleChange } />
                                    <label htmlFor="cityInput">City</label>
                                </div>
                            </div>

                            <button type="submit" className="waves-effect waves-light btn">
                                Weather?
                            </button>

                        </form>

                    </div>

                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m6 offset-m3">
                            { this.displayWeatherInfo() }
                        </div>
                    </div>
                </div>

            </div>
        )
    }



    handleChange = ( event ) => {
        this.setState( {
            city: event.target.value
        })
    }


    //method triggered by onSubmit event of the form or by onClick event of the "Weather?" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchWeather = async ( event ) => {

        event.preventDefault()

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            let weather = await get( ENDPOINTS.WEATHER_API_URL, {
                //YOU NEED TO PROVIDE YOUR "APIXU" API KEY HERE
                key: '07fb607594c34e5b9ca213416172302',
                q: this.state.city
            })



            try {

                const pictures = await get( ENDPOINTS.PIXABAY_API_URL, {
                    //YOU NEED TO PROVIDE YOUR "PIXABAY" API KEY HERE
                    key: '3658891-beeef4fdb6b8a762ab78e1cf9',
                    q: weather.location.name + '+city',
                    image_type: 'all',
                    safesearch: true
                })

                if ( pictures.hits.length ) {
                    weather.pixabayPicture = pictures.hits[ 0 ].webformatURL
                }
                else {
                    weather.pixabayPicture = defaultPicture
                }

            }
            catch ( error ) {

                weather.pixabayPicture = defaultPicture

                console.log( 'Failed fetching picture: ', error )
            }

            /* React state DOCUMENTATION : https://facebook.github.io/react/docs/lifting-state-up.html */

            this.setState( {
                weather
            })
        }
        catch ( error ) {
            console.log( 'Failed fetching data: ', error )
        }

    }


    //handle display of the received weather object
    displayWeatherInfo = () => {
        const weather = this.state.weather

        if ( weather ) {
            return (
                <WeatherCard data={ weather } />
            )
        }

        return null
    }

}

export default App
