require( '../src/db/mongoose' )
const User = require( '../src/models/user' )

User.findByIdAndUpdate( '5eec836bffb8193058548f2b', { age: 6 } ).then( ( user ) => {
  console.log( user )
  return User.countDocuments( { age: 6 } )
} ).then( ( result ) => {
  console.log( result )
} ).catch( ( e ) => {
  console.log( e )
} )