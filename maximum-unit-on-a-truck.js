const maximumUnits = (boxTypes, truckSize) => {
  boxTypes.sort((a, b) => {
    let i = a[0];
    let j = b[0];
    return j - i;
  });

  return boxTypes;
};

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);
