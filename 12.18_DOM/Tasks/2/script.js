// 1 Paimti žvaigždę (DOM atranka)
// Puslapyje surask ir atrink elementą, kuris reprezentuoja eglutės žvaigždę.
// Patikrink, kad atranka grąžina būtent vieną žvaigždės elementą.

let star = document.querySelector(`.star`)

// 2 Paimti eglutę (3 trikampiai)
// Atrink visus trijų sluoksnių eglės trikampius.
// Patikrink, kad rinkinys turi 3 elementus ir gali su jais dirbti kolekcijos pavidalu.

let tree = document.querySelectorAll(`.layer`)

// 3 Paimti eglutės vidurinę dalį (2-asis trikampis)
// Iš atrinktų trikampių išsirink antrą (vidurinį) elementą.
// Patikrink, kad būtent šis elementas bus naudojamas tolimesniems veiksmams.

let treeMiddle = document.querySelectorAll(`.layer`)[1]

// 4 Pakeisti vieną pasirinktą burbuliuką
// Atrink konkretų burbuliuką (pvz., pirmąjį su klase .b1).
// Iškart, kai skriptas užsikrauna (be jokio vartotojo veiksmo), pakeisk jo foninę spalvą į pasirinktą (pvz., mėlyną).
// Įsitikink, kad nauja spalva perrašytų pradinius CSS stilius.

let zaisliukas = document.querySelector(`.b1`)

zaisliukas.style.backgroundColor = `blue`

// 5 Surinkti visus burbuliukus
// Atrink visus elementus, kurie atitinka burbuliukų selektorių (pvz., .baubles li).
// Įsitikink, kad atrinkti tik burbuliukai, o ne kiti eglutės elementai.

let zaisliukai = document.querySelectorAll(`li`)

// 6 Pakeisti visų burbuliukų spalvą į pasirinktą
// Atrink ir pritaikyk vienodą spalvą visiems burbuliukams (pvz., mėlyną arba kitą tavo pasirinktą).
// Užtikrink, kad spalvą perrašytų pradiniai nth-child stiliai (jei jie yra).

zaisliukai.forEach(zaisliukas => zaisliukas.style.backgroundColor = `red`)

// 7 Paslėpti visus burbuliukus
// Atrink visus burbuliukus ir paslėpk juos (pvz., pakeitus rodymo savybę).
// Įsitikink, kad visi elementai išnyksta vizualiai, bet lieka DOM’e (nešalinami).

let baubles = document.querySelector(`.baubles`)

// baubles.addEventListener(`click`, function () { baubles.style.display = `none` });

// 8 Pakeisti spalvą ant vieno pasirinkto burbuliuko, kai paspaustas mygtukas
// Išsirink burbuliuką.
// Uždek paspaudimo įvykį būtent ant pasirinkto burbuliuko (pvz., pirmojo).
// Paspaudus – pakeisk to burbuliuko spalvą į konkrečią tavo pasirinktą.

let zaisliukas2 = document.querySelector(`.b2`)

zaisliukas2.addEventListener(`click`, () => zaisliukas2.style.backgroundColor = `green`)

// 9 Pakeisti spalvą, kai spaudi ant bet kurio burbuliuko, į vieną pasirinktą spalvą
// Įgyvendink event delegaciją ant burbuliukų konteinerio, kad veiktų bet kurio burbuliuko paspaudimas.
// Paspaudus ant bet kurio burbuliuko – pritaikyk vieną bendrą spalvą visiems paspaustiems.

zaisliukai.forEach(item => item.addEventListener(`click`, () => zaisliukai.forEach(item2 => item2.style.backgroundColor = `green`)))

// 10

// 11 Įterpti po egle sveikinimą
// Po eglutės dinamiškai įterpk sveikinimo tekstą (pvz., „Linksmų švenčių!“).
// Priskirk aiškų klasės pavadinimą sveikinimui (pvz., .greeting arba .holiday-greeting) ir užtikrink, kad tekstas būtų matomas bei stilistiškai tvarkingas.

let sveikinimas = document.querySelector(`.holiday-greeting`)

sveikinimas.textContent = `Sveikinu visus su artėjančiomis šventėmis\nLinkiu sveikatos, laimės, meiės`;

sveikinimas.style.textAlign = `center`

sveikinimas.classList.add(`greeting`)