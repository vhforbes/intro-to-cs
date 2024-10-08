const nums = [8, 2, 4, 1, 3];

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];

    console.log(i);

    let j = i - 1;

    for (j; nums[j] > current && j >= 0; j--) {
      console.log(j);

      nums[j + 1] = nums[j];
      nums[j] = current;
    }
  }
  console.log(nums);
  return nums;
};

insertionSort(nums);
