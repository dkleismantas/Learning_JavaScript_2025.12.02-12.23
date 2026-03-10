// 1 Sukurti tuščią objektą pavadinimu sandėlis. Pridėti tokius raktus ir reikšmes: staliniai kompiuteriai - 30, nešiojami kompiuteriai - 35, išorinės duomenų laikmenos - 125. Sukurti kitą objektą (pvz. sandėlioArchyvas), kuris saugotų objekto sandėlis kopiją. Pakeisti objekto sandėlis rakto, nešiojami kompiuteriai, reikšmę į 33. Pašalinti objekto sandėlis staliniai kompiuteriai raktą ir reikšmę. Atspausdinti objektą sandėlis ir objektą sandėlioArchyvas. Ar jie lygūs? Kodėl?

let sandelis = {};

sandelis.staliniaiKompiuteriai = 30;
sandelis.nesiojamiKompiuteriai = 35;
sandelis.isoresDuomenuLaikmenos = 125;

let sandelioArchyvas = { ...sandelis };

sandelis[`nesiojamiKompiuteriai`] = 33;

delete sandelis.staliniaiKompiuteriai;

console.log(sandelis);
console.log(sandelioArchyvas);

// 2 Sukurti objektą, kuris saugo informaciją apie knygą.

let knyga = {
  autorius: `Abigal Dean`,
  leidejas: `Alma littera`,
  metai: 2021,
  puslapiai: 384,
  kalba: `Lietuvių`,
  ivertinimas: `4.5/5`,
};

// Atspausdinti visas objekto reikšmes. Naudoti ciklą for..in.

for (let key in knyga) {
  console.log(`${key}: ${knyga[key]}`);
}

// a Sukurti funkciją printInfo(obj), kuri atspausdina informaciją apie knygą.

// v1

function printInfo(obj) {
  let info = ``;
  for (let key in obj) {
    info += `${key}: ${obj[key]}\n`;
  }
  return info;
}

// v2

function printInfo(obj) {
  let aut = obj.autorius;
  let leid = obj.leidejas;
  let m = obj.metai;
  let psl = obj.puslapiai;
  let kalba = obj.kalba;
  let iv = obj.ivertinimas;
  console.log(`${aut}, ${leid}, ${m}, ${psl}, ${kalba}, ${iv}`);
}

printInfo(knyga);

// v3

function printInfo(obj) {
  let aut = obj.autorius;
  let leid = obj.leidejas;
  let m = obj.metai;
  let psl = obj.puslapiai;
  let kalba = obj.kalba;
  let iv = obj.ivertinimas;
  return `${aut}, ${leid}, ${m}, ${psl}, ${kalba}, ${iv}`;
}

console.log(printInfo(knyga));


// v4

function printInfo({
  autorius,
  leidejas,
  metai,
  puslapiai,
  kalba,
  ivertinimas,
}) {
  return `${autorius}\n${leidejas}\n${metai}\n${puslapiai}\n${kalba}\n${ivertinimas}`;
}

console.log(printInfo(knyga));

// b Sukurti kelis knygų objektus, sudėti juos į masyvą ir atspausdinti, panaudojant prieš tai sukurtą funkciją printInfo(obj).

let knyga2 = {
  autorius: `J. K. Rowling`,
  leidejas: `Leidejas1`,
  metai: 2019,
  puslapiai: 200,
  kalba: `Lietuvių`,
  ivertinimas: `4.7/5`,
};

let knyga3 = {
  autorius: `Kafka`,
  leidejas: `Leidejas2`,
  metai: 2000,
  puslapiai: 150,
  kalba: `Lietuvių`,
  ivertinimas: `4.4/5`,
};

let knyga4 = {
  autorius: `A. Tapinas`,
  leidejas: `Leidejas3`,
  metai: 2005,
  puslapiai: 402,
  kalba: `Lietuvių`,
  ivertinimas: `4.8/5`,
};

// masyvo kurimas v1

let knygos = [knyga, knyga2, knyga3, knyga4];

// masyvo kurimas v2

let knygos2 = [];
knygos2.push(knyga, knyga2, knyga3, knyga4);

// Spausdinimui panaudota formule v2

for (let i = 0; i < knygos.length; i++) {
  printInfo(knygos[i]);
}

// Spausdinimui panaudota formule v3

for (let i = 0; i < knygos2.length; i++) {
  console.log(printInfo(knygos2[i]));
}

// 3 Sukurti objektą algos, kuriame išsaugoti šias reikšmes: Jonas - 300, Petras - 400, Rasa - 500. Apskaičiuoti ir atspausdinti visų darbuotojų algų bendrą sumą.

let algos = {
  jonas: 300,
  petras: 400,
  rasa: 500,
};

let suma = 0;

for (let key in algos) {
  suma += algos[key];
}

console.log(suma);

// a Sukurti funkciją, kuri apskaičiuoja visų darbuotojų algų bendrą sumą.

function alguSuma(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

console.log(alguSuma(algos));

// b Sukurti kelių įmonių darbuotojų algų sąrašus-objektus. Darbuotojų skaičius turi būti skirtingas.

let algos2 = {
  rytis: 500,
  antanas: 600,
};

let algos3 = {
  virga: 400,
  ona: 800,
  giedre: 750,
  laura: 900,
};

let algos4 = {
  kazys: 300,
  stasys: 400,
  virgis: 600,
  rapolas: 650,
  liudas: 800,
};

// Sudėti visus įmonių darbuotojų sąrašus į masyvą. Atspausdinti kiekvienos įmonės darbuotojų algų bendrą sumą.

let imones = [];

imones.push(algos, algos2, algos3, algos4);

for (let i = 0; i < imones.length; i++) {
  console.log(alguSuma(imones[i]));
}

//  v2

imones.forEach((item) => console.log(alguSuma(item)));

// c Apskaičiuoti kiek iš viso įmonės skirs algoms.

let sum = 0;

for (let i = 0; i < imones.length; i++) {
  sum += alguSuma(imones[i]);
}

console.log(sum);

// v2

imones.forEach((item) => (sum += alguSuma(item)));

console.log(sum);

// 5 Sukurti masyvą, kuris saugotų tris objektus. Objektas turi dvi reikšmių poras. Pvz.: name: “John”, age: 33. Pridėti dar kelis objektus į masyvą. Objekto reikšmes įvesti iš klaviatūros.

let array = [
  { name: `Dainius`, age: 34 },
  { name: `Audrius`, age: 29 },
  { name: `Marija`, age: 29 },
];

let n = +prompt(`Kiek objektu noresite prideti?`);

for (let i = 3; i < n + 3; i++) {
  array.push({
    name: prompt(`Iveskite ${i - 2} varda`),
    age: +prompt(`Iveskite ${i - 2} amziu`),
  });
}

console.log(array);

// a Sukurti funkciją, kuri spausdina visas objekto reikšmes: printInfo(arr);

function printInfo(arr) {
  let result = ``;
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      result += `${key}: ${arr[i][key]} `;
    }
    result += `, `;
  }
  return result;
}

console.log(printInfo(array));

// v2

function printInfo(arr) {
  for (let object of arr) {
    for (let key in object) {
      console.log(`${key}: ${object[key]}`);
    }
  }
}

printInfo(array);

// 6 Sukurti tuščią masyvą. Iš klaviatūros n kartų įvesti prekės pavadinimą ir kainą (visos prekės skirtingos). Šią prekės informaciją išsaugoti objekte ir pridėti į masyvą. Sukurti atitinkamas funkcijas ir atspausdinti rezultatus:

let array = [];
let n = +prompt(`Kiek prekiu ivedinesite?`);

for (let i = 0; i < n; i++) {
  let preke = prompt(`Iveskite ${i + 1} preke`);
  let kaina = +prompt(`Iveskite ${i + 1} prekes kaina`);
  let prekes = {};
  prekes[preke] = kaina;
  array.push(prekes);
}

console.log(array);

// 6.1 Visų prekių sąrašą: prekės pavadinimas: printCart(arr), pvz.: Pienas - 0.69 Eur.

function printCart(arr) {
  let result = ``;
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      result += `${key} - ${arr[i][key]}\n`;
    }
  }
  return result;
}

console.log(`Sarasas \n` + printCart(array));

// 6.2 Atspausdinti prekių kiekį: get…(arr);

function getQt(arr) {
  let quantity = 0;
  for (let i = 0; i < arr.length; i++) {
    quantity++;
  }
  return quantity;
}

console.log(`Kiekis ` + getQt(array));

// 6.3 Atspausdinti prekių sumą: get…(arr);

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      sum += arr[i][key];
    }
  }
  return sum.toFixed(2);
}

console.log(`Suma ` + getSum(array));

// 6.4 Atspausdinti prekę, kurios kaina yra didžiausia, get…(arr), pvz.: Kumpis - 7.99 Eur.
// v1 prastesnis bet veikia

function getMax(arr) {
  let max;
  let maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      maxArr.push(arr[i][key]);
    }
  }
  max = Math.max(...maxArr);
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      if (max == arr[i][key]) {
        return `${key} - ${arr[i][key]}`;
      }
    }
  }
}

console.log(`Brangiausia: ` + getMax(array));

// 6.5 Atspausdinti prekę, kurios kaina yra mažiausia, get…(arr), pvz.: Trintukas - 0.29 Eur.
// v2 geresnis

function getMin(arr) {
  let min = Infinity;
  let minKey = -1;
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      if (arr[i][key] < min) {
        min = arr[i][key];
        minKey = key;
      }
    }
  }
  return `${minKey} - ${min}`;
}

console.log(`Pigiausia ` + getMin(array));

// 6.6 Atspausdinti vidutinę prekių kainą: get…(arr);

function getAvg(arr) {
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      sum += arr[i][key];
      avg = sum / i + 1;
    }
  }
  return avg.toFixed(2);
}

console.log(`Vidurkis: ` + getAvg(array));

// 6 v2

let array = [];
let n = +prompt(`Kiek prekiu ivedinesite?`);

for (let i = 0; i < n; i++) {
  array.push({
    pavadinimas: prompt(`Iveskite ${i + 1} prekes pavadinima`),
    kaina: prompt(`Iveskite ${i + 1} prekes kaina`),
  });
}

console.log(array);

// 6.1 v2

function printCart(arr) {
  for (let item of arr) {
    console.log(`${item.pavadinimas} - ${item.kaina} Eur`);
  }
}

printCart(array);

// 6.2 v2

function getQt(arr) {
  return arr.length;
}

console.log(getQt(array));

// 6.3 v2

function getSum(arr) {
  let sum = 0;
  for (let object of arr) {
    sum += object.kaina;
  }
  return sum;
}

console.log(getSum(array));

// 6.4 v2

function getMax(arr) {
    let max = -Infinity
    let max2;
    for (let object of arr) {
        if (object.kaina > max) {
            max = object.kaina
            max2 = object.pavadinimas
        }
    }
    console.log(`${max2} - ${max} Eur`)
}

getMax(array);

// 6.5 v2

function getMin(arr) {
    let min = Infinity
    let min2;
    for (let object of arr) {
        if (object.kaina > min) {
            min = object.kaina
            min2 = object.pavadinimas
        }
    }
    console.log(`${min2} - ${min} Eur`)
}

getMax(array);

// 6.6 v2

function getAvg(arr) {
  let sum = 0;
  for (let object of arr) {
    sum += object.kaina;
  }
  return (sum / arr.length).toFixed(2);
}

console.log(getAvg(array));