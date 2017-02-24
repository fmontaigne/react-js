import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */
/* https://www.apixu.com/api-explorer.aspx */

export const ENDPOINTS = {

    WEATHER_API_URL: 'http://api.apixu.com/v1/current.json'

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