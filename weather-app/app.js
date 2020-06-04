const request = require( 'request' )

const url = 'http://api.weatherstack.com/current?access_key=290822359e8baddc66c29a2a5ee6380e&query=37.8267,-122.4233&units=f'

request( { url: url, json: true }, ( error, response ) => {
  if ( error ) {
    console.log( 'Unable to connect to weather service!' )
  } else if ( response.body.error ) {
    console.log( 'Unable to find location' )
  } else {
    console.log( `${ response.body.current.weather_descriptions[ 0 ] }. It's curretly ${ response.body.current.temperature } degrees out. It feels like ${ response.body.current.feelslike } degrees out.` )
  }
} )


//Geocoding

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGF0cmljaWFtaWh1dCIsImEiOiJja2Iwa3JhZDUwOHlzMnZzOTE0eHI0NWxsIn0.kWVFFFTEHZX9z61W7_9Rug&limit=1'

request( { url: geocodeUrl, json: true }, ( error, response ) => {
  if ( error ) {
    console.log( 'Unable to connect to location services!' )
  } else if ( response.body.features.length === 0 ) {
    console.log( 'Unable to find location. Try another search.' );

  } else {
    const latitude = response.body.features[ 0 ].center[ 1 ]
    const longitude = response.body.features[ 0 ].center[ 0 ]
    console.log( latitude, longitude )
  }
} )