// # pirmitive datatypes
// 7 types 1. number 2. string 3. boolean 4. null 5. undefined 6. symbol 7. bigint

const score = 100;
const score_value = 100.5;
const is_logged_in = false;
const out_side_temp = null;
let user_email;
const id = Symbol("1234");
const another_id = Symbol("1234");
console.log(id === another_id);

const big_number = 123456789n;
console.log(big_number);

// Reference(Non-pirmitive) types 1. object 2. array 3. function

const heros = ["shaktiman", "naagraj", "dogeman"];

let myobjm = {
    name: "shaktiman",
    age: 24,

}

const my_function = function() {
    console.log("hello word");
}

// console.log(typeof big_number); false
// console.log(typeof another_id); false
// console.log(typeof user_email); false
// console.log(typeof out_side_temp);
// console.log(typeof is_logged_in);
// console.log(typeof score_value);
// console.log(typeof score);


