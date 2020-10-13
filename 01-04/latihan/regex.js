var foo = /arofah/;

console.log(foo);  // /ab+c/
console.log(typeof foo);  // object

var bar = new RegExp("arofah");

console.log(bar);  ///ab+c/
console.log(typeof bar);  // object

var foo = "Belajar JavaScript";
var pola = /JavaScript/;

console.log(pola.test(foo));  // true
console.log(/Belajar/.test(foo));  // true
console.log(/belajar/.test(foo));  // false

var foo = "1 jam sama dengan 60 menit, juga sama dengan 3600 detik";
var pola = /\d+/;

console.log(pola.exec(foo));  // Array ["1"]

