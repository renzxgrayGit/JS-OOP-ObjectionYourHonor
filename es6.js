class Person {
    /* #name; #age; */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

   /*  get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    } */
}

class Prosecutor extends Person {
/*     constructor(name, age) {
        super(name, age);   
    } */

    prosecute(defendant, caseObj) {
        defendant.setCase(caseObj);
    }
}

class Defendant extends Person {
    #case = null;

    /* constructor(name, age) {
        super(name, age);
    } */

    setCase(caseObj) {
        this.#case = caseObj;
    }

    getCase() {
        return this.#case;
    }
}

class Case {
    #title; #imprisonmentTerm; #ageLimit;
    constructor(title, years, months, days, minAge, maxAge) {
        this.#title = title;
        this.#imprisonmentTerm = { years, months, days };
        this.#ageLimit = { minAge, maxAge };
    }

    checkGuilty(defendant) {
        const age = defendant.age;
        return age >= this.#ageLimit.minAge && age <= this.#ageLimit.maxAge;
    }

    computeReleaseDate(baseDate = null) {
        const today = baseDate || new Date('2020-12-17'); // Default to December 17, 2020 if no baseDate provided
        /* const today = new Date(); */
        const releaseDate = new Date(today);
        releaseDate.setFullYear(releaseDate.getFullYear() + this.#imprisonmentTerm.years);
        releaseDate.setMonth(releaseDate.getMonth() + this.#imprisonmentTerm.months);
        releaseDate.setDate(releaseDate.getDate() + this.#imprisonmentTerm.days);
        return releaseDate;
    }

    getTitle() {
        return this.#title;
    }
}

class TrialCourt {
    static initiateTrial(defendant, prosecutor) {
        const caseObj = defendant.getCase();
        const isGuilty = caseObj.checkGuilty(defendant);
        console.log(`Name: ${defendant.name}`);
        console.log(`Age: ${defendant.age} years old`);
        console.log("Case Title:", caseObj.getTitle());
        console.log("Filed by:", prosecutor.name);

        if (isGuilty) {
            const releaseDate = caseObj.computeReleaseDate();
            console.log("Verdict: GUILTY");
            console.log("Release Date:", releaseDate.toDateString());
        } else {
            console.log("Verdict: NOT GUILTY");
        }
    }
}

// Test the code
// let’s say the imprisonment term for this case is 3 years, 3 months, 3 days
// and the age of someone who can be convicted is between 18 to 75 years old.
let case1 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
let prosecutor = new Prosecutor("John", 30);
let defendant1 = new Defendant("Girlie", 5);

prosecutor.prosecute(defendant1, case1);
TrialCourt.initiateTrial(defendant1, prosecutor);
/*
    Name: Girlie
    Age: 5 years old
    Case Title: Malicious Mischief
    Filed by: John
    Verdict: NOT GUILTY
*/ 
console.log('');

// let’s say imprisonment term for this case is 3 years, 3 months, 3 days
// and the age of someone who can be convicted is between 18 to 75 years old.
let case2 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
let prosecutor2 = new Prosecutor ("John", 30);
let defendant2 = new Defendant ("Onel", 25);

prosecutor.prosecute(defendant2, case2);
// let’s say today is December 17, 2020
TrialCourt.initiateTrial(defendant2, prosecutor2); 
//    Name: Onel
//    Age: 25 years old
//    Case Title: Malicious Mischief
//    Filed by: John
//    Verdict: GUILTY
//    Release date:  21 March 2024  
