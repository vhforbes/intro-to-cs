const arrayToSort = [8, 2, 4, 1, 3];

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    // Get the current item
    const current = nums[i];

    let j;

    // Check backwards against the sorted section of the array
    for (j = i - 1; nums[j] > current && j >= 0; j--) {
      nums[j + 1] = nums[j];
    }

    nums[j + 1] = current;
  }

  return nums;
};

insertionSort(arrayToSort);
