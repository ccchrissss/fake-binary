function fakeBin(x){

  return x.split('').map( e => e < 5 ? 0 : 1).join('')

}

console.log(fakeBin('12349999'))

// parameter: string     // a string of digits
// return string      // digits below 5 replaced with 0; digits 5 and above replaced w/ 1
// e.g. fakeBin('12349999')
// results in 00001111

// split x into an array
// map method
// if element is less than 5, make element 0 else make element 1
// join and return the array