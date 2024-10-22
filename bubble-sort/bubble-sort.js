const nums = [8, 2, 4, 1, 3];

const bubbleSort = (nums) => {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;

        swapped = true;
      }
    }
  }

  return nums;
};

console.log(bubbleSort(nums));
