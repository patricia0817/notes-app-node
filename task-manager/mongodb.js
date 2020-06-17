//CRUD create read update and delete

// const mongodb = require( 'mongodb' )
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require( 'mongodb' )

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect( connectionURL, { useNewUrlParser: true }, ( error, client ) => {
  if ( error ) {
    return console.log( 'Unable to connect to database!' )
  }

  const db = client.db( databaseName )

  // db.collection( 'users' ).findOne( { _id: new ObjectID( '5ee771b4373b9147987e8bcb' ) }, ( error, user ) => {
  //   if ( error ) {
  //     return console.log( 'Unable to fetch' )
  //   }

  //   console.log( user )
  // } )

  // db.collection( 'users' ).find( { age: 27 } ).toArray( ( error, users ) => {
  //   if ( error ) {
  //     return console.log( 'Unable to fetch' )
  //   }

  //   console.log( users )
  // } )

  // db.collection( 'users' ).find( { age: 27 } ).count( ( error, count ) => {
  //   if ( error ) {
  //     return console.log( 'Unable to fetch' )
  //   }

  //   console.log( count )
  // } )

  db.collection( 'tasks' ).findOne( { _id: new ObjectID( '5ee76356c51f2921208fb27e' ) }, ( error, task ) => {
    if ( error ) {
      return console.log( "Unable to fetch" )
    }

    console.log( task )
  } )

  db.collection( 'tasks' ).find( { completed: false } ).toArray( ( error, tasks ) => {
    if ( error ) {
      return console.log( 'Unable to fetch' )
    }

    console.log( tasks )
  } )
} )