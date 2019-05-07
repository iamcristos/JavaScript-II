// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
//a function that adds all even number in an array
function sumEvenArray (arr) {
  const even = arr.filter(num=> num%2===0);
  const addFunc =  (even)=> even.reduce((a,b)=> a+b, 0);
  return addFunc(even);
}

console.log(sumEvenArray([1,2,3,4,5,6,7,8,9,10]));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0
  const increaseCount = () =>  count += 1;
  return increaseCount;
};
const newCounter = counter()
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
console.log(newCounter(),'hiiiiiii')
console.log(newCounter(),'hiiiiiii')
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let value = 10;
   return {
    increment : function increment() { return value += 1},
    decrement : function decrement() {return value -= 1}
  }
};
const obj = counterFactory()
console.log(obj.increment())

