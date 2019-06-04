var arrStudent = [
    { lastname: 'aaa', firstname: 'aaa', age: 20, gender: 1  },
    { lastname: 'aaa', firstname: 'aaa', age: 26, gender: 1  },
    { lastname: 'bbb', firstname: 'bbb', age: 25, gender: 1  },
    { lastname: 'ccc', firstname: 'ccc', age: 27, gender: 1  },
    { lastname: 'ddd', firstname: 'ddd', age: 22, gender: 0  }
];

let reduceWithCondition = arrStudent.reduce((previosVal, currentVal) => {
    if (currentVal.age > 25 && Object.is(currentVal.gender, 1)) {
        previosVal.push(currentVal);
    }
    return previosVal;
}, []);
console.log({ reduceWithCondition })

// /**
//  * falsy
//  */
// let aCompare = { a: '2' };
// let bCompare = { a: '2' };
// let cCompare = 0;
// if (aCompare === bCompare) 
//     return console.log(` == `);
// return console.log(`!=`);

const objDemo = {};
console.log({ _: objDemo.__proto__ })

const objNull = Object.create(null);
console.log({ _: objNull.__proto__ })