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

  // db.collection( 'users' ).insertOne( {
  //   name: 'Vikram',
  //   age: 27
  // }, ( error, result ) => {
  //   if ( error ) {
  //     return console.log( 'Unable to insert user' )
  //   }

  //   console.log( result.ops )
  // } )

  // db.collection( 'users' ).insertMany( [
  //   {
  //     name: 'Jen',
  //     age: 28
  //   },
  //   {
  //     name: 'Gunther',
  //     age: 27
  //   }
  // ], ( error, result ) => {
  //   if ( error ) {
  //     return console.log( 'Unable to insert documents!' )
  //   }

  //   console.log( result.ops )
  // } )

  // db.collection( 'tasks' ).insertMany( [
  //   {
  //     description: 'Walk the dog',
  //     completed: true
  //   },
  //   {
  //     description: 'Do your homework',
  //     completed: false
  //   },
  //   {
  //     description: 'Buy popcorn',
  //     completed: false
  //   }
  // ], ( error, result ) => {
  //   if ( error ) {
  //     return console.log( 'Unable to insert documents!' )
  //   }

  //   console.log( result.ops )
  // } )


} )