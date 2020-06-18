const mongoose = require( 'mongoose' )
const validator = require( 'validator' )

mongoose.connect( 'mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
} )

const User = mongoose.model( 'User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate( value ) {
      if ( !validator.isEmail( value ) ) {
        throw new Error( 'Email is invalid' )
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate( value ) {
      if ( value.toLowerCase().includes( 'password' ) ) {
        throw new Error( 'Password cannot contain "password"' )
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate( value ) {
      if ( value < 0 ) {
        throw new Error( 'Age must be a positive number' )
      }
    }
  }
} )

const Task = mongoose.model( 'Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
} )

const me = new User( {
  name: '  Patricia ',
  email: 'MyEmail@test.com',
  password: 'qwertyu'
} )

me.save().then( () => {
  console.log( me )
} ).catch( ( error ) => {
  console.log( 'Error!', error )
} )

// const task = new Task( {
//   description: 'Learn the mongoose library',
//   completed: false
// } )

// task.save().then( () => {
//   console.log( task )
// } ).catch( ( error ) => {
//   console.log( 'Error!', error )
// } )