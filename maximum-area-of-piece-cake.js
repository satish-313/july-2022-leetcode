const maxArea = (h, w, horizontalCuts, verticalCuts) => {
  verticalCuts.push(0, w);
  horizontalCuts.push(0, h);
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  let hmax = 0;
  let vmax = 0;

  for (let i = 1; i < horizontalCuts.length; i++) {
    vmax = Math.max(vmax, horizontalCuts[i] - horizontalCuts[i - 1]);
  }

  for (let i = 1; i < verticalCuts.length; i++) {
    hmax = Math.max(hmax, verticalCuts[i] - verticalCuts[i - 1]);
  }

  return (BigInt(hmax) * BigInt(vmax)) % 1000000007n;
};

console.log(maxArea(5, 4, [1, 2, 4], [1, 3]));
console.log(maxArea(5, 4, [3, 1], [1]));
console.log(maxArea(5, 4, [3], [3]));
console.log(maxArea(1000000000, 1000000000, [2], [2]));
