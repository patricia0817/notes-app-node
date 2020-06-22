require( '../src/db/mongoose' )
const Task = require( '../src/models/task' )

// Task.findByIdAndDelete( '5ef07801c2d9cd5f54c81d2a' ).then( ( task ) => {
//   console.log( task )
//   return Task.countDocuments( { completed: false } )
// } ).then( ( result ) => {
//   console.log( result )
// } ).catch( ( e ) => {
//   console.log( e )
// } )

const deleteTaskAndCount = async ( id ) => {
  const task = await Task.findByIdAndDelete( id )
  const count = await Task.countDocuments( { completed: false } )
  return count
}

deleteTaskAndCount( '5ef077d4c2d9cd5f54c81d27' ).then( ( count ) => {
  console.log( count )
} ).catch( ( e ) => {
  console.log( e )
} )