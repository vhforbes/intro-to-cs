const nestedOne = [10, [12, 14, [1], [16, [20]]]]; // 94
const nestedTwo = [1, [2], 3]; // 6

const nestedAdd = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let current = array[i];

    // Base case, calls itself it needs to add more or just add the number
    if (Array.isArray(current)) {
      sum += nestedAdd(current);
    } else {
      sum += current;
    }
  }

  console.log(sum);
  return sum;
};

nestedAdd(nestedOne);
