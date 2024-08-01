const {format} = require('date-fns');
const uuid = require('uuid');

console.log(format(new Date(), 'yyy-MM-dd\tHH:mm:ss'));

console.log(uuid.v4()) 