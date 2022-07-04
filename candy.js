const candy = (rating) => {
  const candyArr = new Array(rating.length).fill(1);

  const checkLeft = (rating, i) => {
    return i !== 0 && rating[i - 1] < rating[i];
  };

  const checkRight = (rating, i) => {
    return i !== rating.length && rating[i + 1] < rating[i];
  };

  for (let i = 0; i < rating.length; i++) {
    if (checkLeft(rating, i)) candyArr[i] += candyArr[i - 1];
  }

  for (let i = rating.length - 1; i >= 0; i--) {
    if (checkRight(rating, i)) {
      let temp = 1 + candyArr[i + 1];
      if (temp > candyArr[i]) candyArr[i] = temp;
    }
  }

  return candyArr.reduce((total, num) => (total += num));
};

console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));
console.log(candy([1, 2, 87, 87, 87, 2, 1]));
console.log(candy([1, 3, 2, 2, 1]));
