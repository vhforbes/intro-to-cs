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

function merge(left, right) {
  let newList = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      newList.push(left.shift());
    } else {
      newList.push(right.shift());
    }
  }

  console.log(newList.concat(left, right));
  return newList.concat(left, right);
}

mergeSort([7, 3, 5, 8]);
