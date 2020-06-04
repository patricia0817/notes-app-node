const request = require( 'request' )

const url = 'http://api.weatherstack.com/current?access_key=290822359e8baddc66c29a2a5ee6380e&query=37.8267,-122.4233&units=f'

request( { url: url, json: true }, ( error, response ) => {
  const x = 10
  console.log( `${ response.body.current.weather_descriptions[ 0 ] }. It's curretly ${ response.body.current.temperature } degrees out. It feels like ${ response.body.current.feelslike } degrees out.` )
} )
