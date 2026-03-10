// 1

let a = `# `;
let b = ` #`;
let c = ``;
let d = c;
let n = +prompt(`sk`);
for (let i = 1; i <= n; i++) {
  if (i % 2 != 0) {
    for (let j = 1; j <= n; j++) {
      c += a;
    }
    console.log(c);
    c = d;
  } else {
    for (let k = 1; k <= n; k++) {
      c += b;
    }
    console.log(c);
    c = d;
  }
}

// 2

// a

let a = `# `;
let b = ``;
let n = +prompt(`Iveskite trikampio dydi`);

for (let i = 1; i <= n; i++) {
  b += a;
  console.log(b);
}

// b

let a = ``;
let b = `# `;
let c = a;
let n = +prompt(`sk`);
let m = n;

for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= n; j++) {
    a += b;
  }
  console.log(a);
  a = c;
  n--;
}

// c

let a = ``;
let b = `# `;
let c = `  `;
let d = a;
let n = +prompt(`Iveskite trikampio dydi`);
let m = n;

for (let i = 1; i <= m; i++) {
  for (let k = 1; k < i; k++) {
    a += c;
  }
  for (let j = 1; j <= n; j++) {
    a += b;
  }
  console.log(a);
  a = d;
  n--;
}

// d

let a = ``;
let b = `# `;
let c = `  `;
let d = a;
let n = +prompt(`sk`);
let m = n;

for (let i = 1; i <= m; i++) {
  for (let j = 1; j < n; j++) {
    a += c;
  }
  for (let k = 1; k <= i; k++) {
    a += b;
  }
  console.log(a);
  a = d;
  n--;
}