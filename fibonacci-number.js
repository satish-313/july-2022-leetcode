const fib = (n) => {
  const fibArr = [0, 1];

  if (n === 0 || n === 1) return fibArr[n];

  for (let i = 2; i <= n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }

  return fibArr[n]
};


console.log(fib(23))