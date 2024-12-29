JavaScript Arrays in Detail

1. Creating Arrays
   You can create arrays in several ways:
   **Using array literals:**

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
```

**Using the Array constructor:**

```javascript
let fruits = new Array("Apple", "Banana", "Cherry");
```

**Empty array:**

```javascript
let emptyArray = [];
```

2. Accessing Array Elements
   Elements are accessed using their index, starting from 0:

```javascript
let firstFruit = fruits[0]; // "Apple"
JavaScript Arrays in Detail
let secondFruit = fruits[1]; // "Banana"
```

3. Modifying Arrays
   You can modify arrays by directly accessing and changing their elements:

```javascript
fruits[1] = "Blueberry"; // Changes "Banana" to "Blueberry"
```

4. Array Properties and Methods
   **Length:**

```javascript
let numberOfFruits = fruits.length; // 3
```

**Push (add to the end):**

```javascript
fruits.push("Dragonfruit"); // ["Apple", "Blueberry", "Cherry", "Dragonfruit"]
```

**Pop (remove from the end):**

```javascript
JavaScript Arrays in Detail
let lastFruit = fruits.pop(); // "Dragonfruit", fruits = ["Apple", "Blueberry", "Cherry"]
```

**Shift (remove from the beginning):**

```javascript
let firstFruit = fruits.shift(); // "Apple", fruits = ["Blueberry", "Cherry"]
```

**Unshift (add to the beginning):**

```javascript
fruits.unshift("Avocado"); // ["Avocado", "Blueberry", "Cherry"]
```

**Splice (add/remove elements):**

```javascript
// Add elements at index 1
fruits.splice(1, 0, "Banana", "Grapes"); // ["Avocado", "Banana", "Grapes", "Blueberry", "Cherry"]
// Remove 1 element at index 2
fruits.splice(2, 1); // ["Avocado", "Banana", "Blueberry", "Cherry"]
```

5. Iterating Over Arrays
   JavaScript Arrays in Detail
   **Using for loop:**

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

**Using for...of loop:**

```javascript
for (let fruit of fruits) {
  console.log(fruit);
}
```

**Using forEach method:**

```javascript
fruits.forEach(function (fruit) {
  console.log(fruit);
});
```

6. Array Methods
   **Map:**
   JavaScript Arrays in Detail
   Creates a new array by applying a function to each element.

```javascript
let uppercasedFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
// ["AVOCADO", "BANANA", "BLUEBERRY", "CHERRY"]
```

**Filter:**
Creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let shortNamedFruits = fruits.filter(function(fruit) {
 return fruit.length <= 6;
// ["Banana", "Cherry"]
```

**Reduce:**
Executes a reducer function on each element, resulting in a single output value.

```javascript
let allFruits = fruits.reduce(function (accumulator, fruit) {
  return accumulator + ", " + fruit;
});
// "Avocado, Banana, Blueberry, Cherry"
```

JavaScript Arrays in Detail
**Find:**
Returns the value of the first element that satisfies the provided testing function.

```javascript
let foundFruit = fruits.find(function (fruit) {
  return fruit.startsWith("B");
});
// "Banana"
```

**Includes:**
Determines whether an array includes a certain value.

```javascript
let hasBanana = fruits.includes("Banana"); // true
```

7. Combining and Slicing Arrays
   **Concat:**
   Merges two or more arrays.

```javascript
let moreFruits = ["Elderberry", "Fig"];
let allFruits = fruits.concat(moreFruits);
// ["Avocado", "Banana", "Blueberry", "Cherry", "Elderberry", "Fig"]
```

JavaScript Arrays in Detail
**Slice:**
Returns a shallow copy of a portion of an array into a new array object.

```javascript
let someFruits = fruits.slice(1, 3);
// ["Banana", "Blueberry"]
```

8. Advanced Array Methods
   **Sort:**
   Sorts the elements of an array in place and returns the array.

```javascript
fruits.sort(); // Alphabetical order
// ["Avocado", "Banana", "Blueberry", "Cherry"]
fruits.sort(function (a, b) {
  return a.length - b.length; // Sort by length
});
// ["Banana", "Cherry", "Avocado", "Blueberry"]
```

**Reverse:**
Reverses the array in place.
JavaScript Arrays in Detail

```javascript
fruits.reverse();
// ["Cherry", "Blueberry", "Banana", "Avocado"]
```

9. Typed Arrays
   JavaScript also provides typed arrays, which are used to handle binary data in memory buffers.
   Examples include Uint8Array, Float32Array, etc. These are useful in performance-critical
   applications like graphics and audio processing.

```javascript
let buffer = new ArrayBuffer(16); // Create a buffer of 16 bytes
let int32View = new Int32Array(buffer); // Create a typed array view on the buffer
int32View[0] = 42; // Set the first 32-bit integer
console.log(int32View[0]); // 42
```
