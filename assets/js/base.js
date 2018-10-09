// require jQuery normally
const $ = require('jquery');

// create global $ and jQuery variables
global.$ = global.jQuery = $;

require('../css/base.scss');

const f1 = { name: "Mark", age: 23 };
const f2 = { name: "Mark", age: 23 };
const f3 = { name: "Mark", age: 23 };

console.log('Hello Webpack Encore');
console.log({ f1, f2, f3 });