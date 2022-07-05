const longestConsecutive = (nums) => {
  let maxLength = 0;
  const set = new Set(nums);

  for (let num of nums) {
    if (!set.has(num - 1) && set.has(num)) { /* check num has previous num in set or not and if num has to present in set */
      let currNum = num;
      let currLen = 1;

      while (set.has(currNum + 1)) {
        set.delete(
          currNum
        ); /* delete the num from set to repeate duplicate solution of same sequence */
        currNum += 1;
        currLen += 1;
      }

      maxLength = Math.max(maxLength, currLen);
    }
  }

  return maxLength;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
