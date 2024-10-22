const nums = [8, 2, 4, 1, 3];

const insertionSort = (nums) => {
  // Consider the first part of your list as sorted
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    console.log("Current: ", current);

    // Look at the unsorted part of the list
    let j = i - 1;

    console.log(nums[j]);

    // This means the current index is smaller then the element that comes before it
    // [8, 2] - 2 = current
    //        - 8 = j - 1
    // So we compare both and insert the current before if smaller
    for (j; nums[j] > current && j >= 0; j--) {
      // Insert the bigger number one position ahead
      nums[j + 1] = nums[j];

      // The smaller number in the position that we had the bigger one
      nums[j] = current;
    }
  }

  console.log(nums);
};

insertionSort(nums);
