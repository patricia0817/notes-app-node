//Object property shorthand

const name = 'Patricia'
const userAge = 30

const user = {
  name,
  age: userAge,
  location: 'Romania'
}

console.log( user )

//Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  sellPrice: undefined
}

// const { label: productLabel, stock, rating = 5 } = product
// console.log( productLabel )
// console.log( stock )
// console.log( rating )

const transaction = ( type, { label, stock } ) => {
  console.log( type, label, stock )
}

transaction( 'order', product )
