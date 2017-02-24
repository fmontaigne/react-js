import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */

/* WEATHER: https://www.apixu.com/api-explorer.aspx */

/* IMAGES: https://pixabay.com/api/docs/ */

export const ENDPOINTS = {

    WEATHER_API_URL: 'http://api.apixu.com/v1/current.json',
    PIXABAY_API_URL: 'https://pixabay.com/api/'

}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    })
}