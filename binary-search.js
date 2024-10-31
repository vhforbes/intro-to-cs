let array = [0, 5, 10, 12, 15, 22, 25, 30, 40];

// start in the middle

// look to the left

function binarySearch(array, number) {
  let half = Math.floor(array.length / 2);

  if (array[half] === number) {
    return `FOUND IT! ${array[half]}`;
  }

  if (array[half - 1] >= number) {
    const leftHalf = array.slice(0, half);

    return binarySearch(leftHalf, number);
  } else {
    return binarySearch(array.slice(half, array.length), number);
  }
}

// console.log(binarySearch(array, 12));

function binarySeachIter(array, number) {
  let min = 0;
  let max = array.length - 1;
  let index;

  while (min <= max) {
    index = Math.floor(min + max / 2);

    if (array[index] === number) {
      return number;
    }

    if (array[index - 1] >= number) {
      max = index - 1;
    } else {
      min = index + 1;
    }
  }
}

console.log(binarySeachIter(array, 12));
