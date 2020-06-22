require( '../src/db/mongoose' )
const User = require( '../src/models/user' )

// User.findByIdAndUpdate( '5eec836bffb8193058548f2b', { age: 6 } ).then( ( user ) => {
//   console.log( user )
//   return User.countDocuments( { age: 6 } )
// } ).then( ( result ) => {
//   console.log( result )
// } ).catch( ( e ) => {
//   console.log( e )
// } )

const updateAgeAndCount = async ( id, age ) => {
  const user = await User.findByIdAndUpdate( id, { age } )
  const count = await User.countDocuments( { age } )
  return count
}

updateAgeAndCount( '5ef07670abcdc9781828f1ba', 1 ).then( ( count ) => {
  console.log( count )
} ).catch( ( e ) => {
  console.log( e )
} )
