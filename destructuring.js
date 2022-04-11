const poemData = {
    yearFromInternet: 1962,
    authorFromInternet: "Weores Sandor",
    titleFromInternet: "Enhasadas",
    textFromInternet: `utca sarkon varok ram feloraja is van Tan, 
    am ertelmem felragyog,
    nem jovok mert itt vagyok`
}
/* console.log(poemData.authorFromInternet); */

const pdafi = poemData.authorFromInternet
const pdyfi = poemData.yearFromInternet

/* console.log(pdyfi); */

//ugyanezt egyszerubben

/* const {yearFromInternet,authorFromInternet} = poemData
console.log(yearFromInternet,authorFromInternet); */

//ugyanez fv-ben

function funWithPoemData({yearFromInternet,authorFromInternet}) {
    console.log(yearFromInternet,authorFromInternet)

}

/* funWithPoemData(poemData) */

//TOMBOK ESETEBEN 

const arr = ['hi', 'hello', 'wassup', function() {
    console.log("Csajó");
}, 'bye'];

const firstItem = arr[0];
const secondItem = arr[1];

// tök mindegy mi a változó neve, az a lényeg, h hanyadik elem
const [firstItemX, secondItemX, ...elseX] = arr;
// kiírja a maradékot (wassup, bye)
console.log(elseX);

console.log(arr[arr.length-1]);

const [,,,ourFun] = arr;

ourFun();