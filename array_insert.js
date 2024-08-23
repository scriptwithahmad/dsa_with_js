// Initialize an array of numbers
let data = [12, 83, 92, 32, 99];
// Define the new element to be inserted
let newElm = 70;
// Define the position at which to insert the new element
let position = 2;

// Print the original array
console.log(data);

// Start iterating over the array in reverse order
for (let i = data.length - 1; i >= 0; i--) {
  console.log(data[i]);
  // If the current index is greater than or equal to the specified position
  if (i >= position) {
    // Move the current element one position to the right
    data[i + 1] = data[i];
    // If the current index is exactly the position where we want to insert the new element
    if (i === position) {
      // Insert the new element at the specified position
      data[i] = newElm;
    }
  }
}

// Print the modified array
console.log(data);
