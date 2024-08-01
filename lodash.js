const _ = require('lodash');

const items = [1, [2, [3, [4, [5]]]]];

const flattened = _.flattenDeep(items);
console.log(flattened);

flattened.map((item) => {
  console.log(item);
})


const originalObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};

const deepClonedObject = _.cloneDeep(originalObject);

console.log(deepClonedObject); 

deepClonedObject.b.d.e = 4;

console.log(originalObject.b.d.e); 
console.log(deepClonedObject.b.d.e);
