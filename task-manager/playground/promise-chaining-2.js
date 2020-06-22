require( '../src/db/mongoose' )
const Task = require( '../src/models/task' )

Task.findByIdAndDelete( '5ef07801c2d9cd5f54c81d2a' ).then( ( task ) => {
  console.log( task )
  return Task.countDocuments( { completed: false } )
} ).then( ( result ) => {
  console.log( result )
} ).catch( ( e ) => {
  console.log( e )
} )