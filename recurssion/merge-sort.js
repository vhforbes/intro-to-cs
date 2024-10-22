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

// console.log(mergeSort([0, 1, 2, 5]));

// Consider both are sorted
// FAILED HERE, STUDY HERE!!!
function merge(array1, array2) {
  let newArray = [];

  for (let i = 0; i < array1.length; i++) {}

  console.log(newArray);
  return newArray;
}

merge([0, 1], [2, 5]);
