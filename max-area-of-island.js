const maxAreaOfIsland = (grid) => {
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const stack = [];
  let maxArea = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        let area = 1;
        stack.push([row, col]);
        grid[row][col] = 0;
        while (stack.length > 0) {
          const [r, c] = stack.pop();

          for (let [i, j] of dir) {
            let ri = r + i;
            let cj = c + j;

            if (
              ri < grid.length &&
              ri >= 0 &&
              cj < grid[0].length &&
              cj >= 0 &&
              grid[ri][cj] === 1
            ) {
              area += 1;
              stack.push([ri, cj]);
              grid[ri][cj] = 0;
            }
          }
        }

        maxArea = Math.max(area, maxArea);
      }
    }
  }

  return maxArea;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);

console.log(
  maxAreaOfIsland([
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
  ])
);
