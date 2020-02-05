// let favMovie = ( movie='Room', name= 'world') => console.log(`My favorite movie is ${movie},with ${name}`);


// // favMovie('ET','Tim');

// let str = 'Ryan Unruh';
// let gitFirstName = (str) => {
//   console.log(str.split(' ')[0]);
// }

// gitFirstName(str);



// let getFirstNameConcise = (str) => console.log(str.split(' ')[0])

// getFirstNameConcise(str);


// let product = (a, b) => {
//   return `exponent is ${a ** b} and product is ${a * b}`
  
  // return {
  //   exponent: a ** b,
  //   product: a * b
  // }
// }

// console.log(product(2, 5))

// let info = (a,b,c) =>{
// console.log(`name is ${a} location is ${b} food is ${c}`)
  
// }

// info('ryan', 'KS', 'snickers');



// let arr = ['Paul', 'Birmingham', 'Kimchi'];

// let info = (a,b,c) =>{
// console.log(`name is ${a} location is ${b} food is ${c}`)
  
// }

// info(...arr);



let spreadStr = () =>{
  let str = 'Paul';
  let arr = [...str];
  for (let index = 0; index < arr.length; index++) {
   
    console.log(`name is ${arr[index]} `);
  }
 
}

spreadStr();