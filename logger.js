const text = 'ali sajjadi';

const sayHi = (name) => {
    console.log(`hello ${name}`);
};

// module.exports = {
//     text , sayHi
// }


// module.exports.greeting = sayHi;
// module.exports.alis = text;

// module.exports = {
//     greeting : sayHi,
//     alis : text
// };

exports.greeting = sayHi;
exports.alis = text;