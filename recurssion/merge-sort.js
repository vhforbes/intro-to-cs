// THIS IS HARD, ITS OKAY!

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  // Divide array into two
  const half = Math.round(array.length / 2);

  const slice1 = array.slice(0, half);
  const slice2 = array.slice(half, array.length);

  return merge(mergeSort(slice1), mergeSort(slice2));
}

console.log(mergeSort([0, 1, 2, 5]));

// Consider both are sorted
// FAILED HERE, STUDY HERE!!!
function merge(left, right) {
  let newArray = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      //                 shift - Remove the item from the front of the array
      newArray.push(left.shift());
    } else {
      newArray.push(right.shift());
    }
  }

  return newArray.concat(left, right);
}

// console.log(merge([0, 1], [2, 5]));