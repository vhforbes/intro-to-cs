const nestedOne = [10, [12, 14, [1], [16, [20]]]]; // 94
const nestedTwo = [1, [2], 3]; // 6

const nestedAdd = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      console.log("Its a array, calling nestedAdd for: ", array[i]);

      sum += nestedAdd(array[i], sum);
    } else {
      console.log("NOT array, trying to add: ", array[i]);
      sum += array[i];
    }
  }

  return sum;
};

console.log(nestedAdd(nestedOne));
