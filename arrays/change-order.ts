const fn1 = (arr: unknown[], k: number) => {
  const n = arr.length - 1;

  for (let i = n; i > n - k; i--) {
    const e = arr.pop();
    arr.unshift(e);
  }

  return arr;
};

const fn2 = (arr: unknown[], k: number) => {
  const n = arr.length;
  const subarray = arr.splice(n - k);
  const result = [...subarray, ...arr];
  return result;
};

console.assert(
  fn1([1, 2, 3, 4, 5, 6, 7], 3).toString() === [5, 6, 7, 1, 2, 3, 4].toString(),
  "fn1 did not match"
);

console.assert(
  fn2([1, 2, 3, 4, 5, 6, 7], 3).toString() === [5, 6, 7, 1, 2, 3, 4].toString(),
  "fn2 did not match"
);
