/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

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
            weather: undefined
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

                        {/* button onClick event calls the fetchWeather method */ }

                        <button onClick={ this.fetchWeather } className="waves-effect waves-light btn">
                            Weather?
                        </button>

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


    //method triggered by onClick event of the "Weather?" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchWeather = async () => {

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            const weather = await get( ENDPOINTS.WEATHER_API_URL, {
                //YOU NEED TO PROVIDE YOUR API KEY HERE
                key: undefined,
                q: 'Paris'
            })

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
