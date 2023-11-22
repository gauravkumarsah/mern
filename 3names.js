// Modules

// local / private
const secret = "SUPER SECRET"

// share
const john = 'John';
const peter = 'Peter';

// const sayHi = (name) => {
//   console.log(`Hello there ${name}`);
// };

// sayHi('Susan');
// sayHi(peter);
// sayHi(john);



module.exports = { john, peter}



//  following code will be pasted in the module that will use code in this file


// const names = require('./3names');
// const { sayHi } = require('./4utils');
// const data = require('./5alternateFlavour');
// require('./6mindGranade');

// console.log(data);

// sayHi(names.peter);

// sayHi(names.john);