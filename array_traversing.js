// Array Traversing & Loop over array

// 1. ----------
let data = [0, 48, 29, 4, 99, 29, 12, 33, 57, 68];

for (let i = 0; i < data.length; i++) {
  document.write(` ${i} : ${data[i]} <br> `);
}

// getting output & value form Input

function getElement() {
  const val = document.querySelector("#input").value;

  if (val < data.length) {
    console.log(val == data[val]);

    alert(data[val]);
  } else {
    alert("Enter a valid input");
  }
}
