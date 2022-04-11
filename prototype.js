// OBJECT CONSTRUCTOR FV ALAPU

function Poem({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}) {
    this.year = yearFromInternet;
    this.author = authorFromInternet;
    this.title = titleFromInternet;
    this.text = textFromInternet;

    this.makePage = function(){
        console.log(`
            title: ${this.title}

            ${this.text}

            author: ${this.author}

            ${this.year}
            
        `);
    }

    //BAL OLDAL H MILYEN KULCS LEGYEN, JOBB OLDAL  A PARAMETER
}

const poemData = {
    yearFromInternet: 1962,
    authorFromInternet: "Weores Sandor",
    titleFromInternet: "Enhasadas",
    textFromInternet: `utca sarkon varok ram feloraja is van Tan, 
    am ertelmem felragyog,
    nem jovok mert itt vagyok`
}

const favouritePoemOfAndras = new Poem(poemData) 
Poem.prototype.lang = 'HUN'
favouritePoemOfAndras.favBy = "Andras Ranki"
/* 
console.log(favouritePoemOfAndras); */

/* console.log(favouritePoemOfAndras.author); */ //itt mar a this-re hivatkozunk

//uj tulajdonsag / kulcs hozzaadasa:


/* console.log(favouritePoemOfAndras.favBy); */

//  PROTOTYPE: UJ KULCS HOZZAADASA

/* Poem.prototype.lang = 'HUN' */

console.log(favouritePoemOfAndras.lang);
console.log(favouritePoemOfAndras.__proto__);
console.log(Poem.prototype); //miinden objektumnak van proto tulajdonsaga, minden constructornak van prototype tulajdonsaga, az egesz js prototipus lancokbol all ossze 


weoresPoem.makePage()






//vagy discturctiorral:

/* function Poem({year, author, title, text}) {
    this.year = year;
    this.author = author;
    this.title = title;
    this.text = text */

    //BAL OLDAL H MILYEN KULCS LEGYEN, JOBB OLDAL  A PARAMETER




