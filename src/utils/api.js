import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */
/* https://www.apixu.com/api-explorer.aspx */

export const ENDPOINTS = {

    WEATHER_API_URL: 'http://api.apixu.com/v1/current.json'

}

/* FETCH DOCUMENTATION */
/* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */


export async function get( url, queryParameters ) {
    return await request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    })
}