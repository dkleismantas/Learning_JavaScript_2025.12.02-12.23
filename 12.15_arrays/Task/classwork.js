function random(a, b) {
  for (let i = a; i <= b; i++) {
    return Math.trunc(Math.random() * (b - a + 1) + a);
  }
}

let randomArr = (n, a, b) => {
  let m = [];
  for (let i = 0; i < n; i++) {
    m.push(random(a, b));
  }
  return m;
};

let getMaxValueIndex = (masyvas) => {
  let maxValue = -Infinity;
  let maxIndex = -1;
  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > maxValue) {
      maxValue = masyvas[i];
      maxIndex = i;
    }
  }
  return maxIndex;
};

let getMinValueIndex = (masyvas) => {
  let minValue = Infinity;
  let minIndex = -1;
  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] < minValue) {
      minValue = masyvas[i];
      minIndex = i;
    }
  }
  return minIndex;
};

let masyvas = randomArr(10, 1, 100);
let maxIndexValue = getMaxValueIndex(masyvas);
let minIndexValue = getMinValueIndex(masyvas);

console.log(masyvas);
console.log(masyvas[maxIndexValue]);
console.log(masyvas[minIndexValue]);
