//ua class-ba

class Poem {
    constructor(yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet) {
        this.year = yearFromInternet;
        this.author = authorFromInternet;
        this.title = titleFromInternet;
        this.text = textFromInternet;
    }

    makePage(){
        console.log(`
            title: ${this.title}

            ${this.text}

            author: ${this.author}

            ${this.year}
            
        `);
    }
   

}

const weoresPoem = new Poem ("Weores Sandor", "Enhasadas", 1962, "utcasarkon varok ram")

console.log(weoresPoem);
weoresPoem.makePage()

//extends, poem alapjan uj fatja class akarok letrehozni uj nevvel es uj kulccsal 

class ForeignPoem extends Poem {
    constructor(yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet, translator){
        super(yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet)
        this.translator = translator

    }
    makePage(){
        console.log(`
            title: ${this.title}

            ${this.text}

            author: ${this.author}

            translator: ${this.translator}

            ${this.year}
            
        `);
    }

}

const weoresPoem2 = new ForeignPoem("Weores Sandor", "Enhasadas", 1962, "utcasarkon varok ram", "Alan Dickson")
console.log(weoresPoem2);