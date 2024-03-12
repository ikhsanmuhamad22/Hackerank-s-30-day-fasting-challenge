// Day 1
// Plus minus
function plusMinus(arr: number[]) {
  const plus = arr.filter((a) => a > 0).length / arr.length;
  const minus = arr.filter((a) => a < 0).length / arr.length;
  const zero = arr.filter((a) => a === 0).length / arr.length;
  console.log(plus, minus, zero);
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
