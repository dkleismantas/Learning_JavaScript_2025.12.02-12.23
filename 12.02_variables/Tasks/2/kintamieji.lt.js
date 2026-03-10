// 1 Programa, įvedus trikampio kraštinių ilgius, apskaičiuoja trikampio perimetrą ir išveda rezultatą į ekraną.
// Žingsniai:
// 1. Aprašomi kintamieji: a, b, c, perimetras;
// 2. Prašoma įvesti duomenis;
// 3. Duomenys įvedami, priskiriami kintamiesiems;
// 4. Atliekami skaičiavimai;
// 5. Spausdinamas rezultatas į ekraną.

let a = +prompt(`Įveskite kraštinę a:`);
let b = +prompt(`Įveskite kraštinę b:`);
let c = +prompt(`Įveskite kraštinę c:`);
let perimetras = a + b + c;

console.log("Perimetras = " + perimetras);

// 2 Ištiestinis kampas (180o) padalintas į tris kampus, žinomi tik du kampai. Programa apskaičiuoja nežinomo kampo didumą ir rezultatą išveda į ekraną.
// Žingsniai:
// 1. Aprašomi kintamieji: pirmas, antras, x;
// 2. Prašoma įvesti duomenis;
// 3. Duomenys įvedami, priskiriami kintamiesiems;
// 4. Atliekami skaičiavimai;
// 5. Išvedamas rezultatas į ekraną.

let a = +prompt("Iveskite pirmo kampo skaiciu");
let b = +prompt("Iveskite antro kampo skaiciu");
let x = 180 - a - b;

console.log("Ivesta: " + a + ", " + b + ";");
console.log("Gauta: " + x);

// 3 Programa įvestus duomenis kilometrais konvertuoja į metrus ir rezultatą išveda į ekraną.
// Žingsniai:
// 1. Aprašomi kintamieji: km, m;
// 2. Prašoma įvesti duomenis;
// 3. Duomenys įvedami, priskiriami kintamiesiems;
// 4. Atliekami skaičiavimai;
// 5. Išvedamas rezultatas į ekraną.

let km = +prompt("Iveskite km");
let m = km * 1000;

console.log("Ivesta: " + km + " km");
console.log("Gauta: " + m + " m");

// 4 Programa įvestus duomenis kilometrais ir metrais konvertuoja į metrus ir rezultatą išveda į ekraną.
// Žingsniai:
// 1. Aprašomi kintamieji: km, m, metrai;
// 2. Prašoma įvesti duomenis;
// 3. Duomenys įvedami, priskiriami kintamiesiems;
// 4. Atliekami skaičiavimai;
// 5. Išvedamas rezultatas į ekraną.

let km = +prompt("Iveskite km");
let m = +prompt("Iveskite m");
let metrai = km * 1000 + m;

console.log("Ivesta: " + km + " km ir " + m + " m:");
console.log("Gauta: " + metrai + " m");

// 5 Žinoma, kai vanduo plona srovele teka iš nesandariai užsukto čiaupo, tai per valandą prarandame apie 18 litrų vandens. Parašykite programą, kuri pateiktų šiuos duomenis: kiek netenkama vandens per dieną; per savaitę.
// Žingsniai:
// 1. Aprašomi kintamieji: val = 18, diena, savaite;
// 2. Išvedamas rezultatas į ekraną.

let val = 18;
let diena = val * 24;
let savaite = diena * 7;

console.log("Gauta: per diena - " + diena + ", per savaite - " + savaite);

// 6 Nuo metų pradžios praėjo d dienų (tarkime, kad pirmoji metų diena - pirmadienis). Parenkite programą, kuri apskaičiuotų, kiek savaičių s praėjo nuo metų pradžios.
// Žingsniai:
// 1. Aprašomi kintamieji: dienos, sav.
// 2. Įvedame dienos;
// 3. Apskaičiuojame sav;
// 4. Spausdiname rezultatą.

let dienos = +prompt("Iveskite diena no metu pradzios");
let sav = Math.trunc(dienos / 7);

console.log("Ivesta: " + dienos + " dienu");
console.log("Gauta: " + sav + " savaite");

// 7 Olimpiadoje dalyvavo n devintokų. Mokytoja nupirko m saldainių (m>n) ir išdalijo mokiniams po lygiai. Po kiek saldainių s gavo kiekvienas mokinys ir kiek saldainių k liko mokytojai.
// Žingsniai:
// 1. Aprašomi kintamieji: m, n, k, s;
// 2. Įvedame m ir n;
// 3. Apskaičiuoti s ir k;
// 4. Spausdiname rezultatą į ekraną.

let n = +prompt("Kiek devintoku dalyvavo olimpiadoje?");
let m = +prompt("Kiek mokytoja nupirko saldainiu?");
let s = Math.trunc(m / n);
let k = m % n;

console.log("Ivesta: n = " + n + ", m = " + m);
console.log("Gauta: s = " + s + ", k = " + k);

// 8 Kasininkė grąžą pirkėjui pabėrė centais ct. Reikia apskaičiuoti kiek tai yra eurų eg ir centų ctg.
// Žingsniai:
// 1. Aprašomi kintamieji: ct, eg, ctg;
// 2. Įvedame ct;
// 3. Apskaičiuojame eg ir ctg;
// 4. Išvedame rezultatus į ekraną.

let ct = +prompt("Kiek atidave centais?");
let eg = Math.trunc(ct / 100);
let ctg = ct % 100

console.log("Ivesta: " + ct);
console.log("Gauta: " + eg + " Eur ir " + ctg + " ct");

// 9 Lėktuvo pakilimo laikas h valandų ir min minučių. Skrydžio trukmė truk (minutėmis). Parenkite programą, kuri apskaičiuotų kada lėktuvas nusileis: h1 ir min1.

let h = +prompt("Iveskite pakilimo valanda");
let min = +prompt("Iveskite pakilimo minutes");
let truk = +prompt("Iveskite skrydzio trumke minutemis");
let h1 = h + Math.trunc(truk / 60);
let min1 = (min + truk) % 60;

console.log("Isskrido: " + h + " h " + min + " min");
console.log("Skrydzio laikas: " + truk + " min");
console.log("Atskrido: " + h1 + " h " + min1 + " min");

// 10 Filmas prasideda h valandų ir min minučių. Filmo metu būna 3 reklamos po 10 minučių. Filmo trukmė h1 valandų ir min1 minučių. Kada filmas pasibaigs?

let h = +prompt("Kelinta valanda prasideda filmas?");
let min = +prompt("Kelinta valandos minute prasideda filmas?");
let h1 = +prompt("Kiek valandu trunka filmas?");
let min1 = +prompt("Kiek minuciu trunka filmas?");
let pl = 10;
let pk = 3;
let pv = pl * pk;
let h2 = Math.trunc((h * 60 + min + h1 * 60 + min1 + pv) / 60);
let min2 = (min + min1 + pv) % 60;

console.log("Filmo pradzia: " + h + " h " + min + " min");
console.log("Filmo trukme: " + h1 + " h " + min1 + " min");
console.log("Pertraukos: " + pk + " po " + pl + " min. Is viso: " + pv + " min");
console.log("Filmo pabaiga: " + h2 + " h " + min2 + " min");

// 11 Elektroninis laikrodis rodo laiką: valandas, minutes ir sekundes (h, m, s). Kiek laiko rodys laikrodis po penkių sekundžių?

let h = +prompt("Kelinta dabar valanda?");
let min = +prompt("Kiek minuciu?");
let s = +prompt("Kiek sekundziu?");
let s1 = 5;
let totalSeconds = h * 3600 + min * 60 + s + s1;
let h2 = Math.trunc(totalSeconds / 3600);
let min2 = Math.trunc((totalSeconds - h * 3600) / 60);
let s2 = (totalSeconds - h * 3600) % 60;

console.log("Ivestas laikas: " + h + ":" + min + ":" + s);
console.log("Gautas laikas: " + h2 + ":" + min2 + ":" + s2);