"use strict";
class Coder {
    constructor(name, age, lang, projects) {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.projects = projects;
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.projects = projects;
    }
    greet() {
        console.log(`Hello ${this.name} Your favorite language is ${this.lang}`);
    }
    ;
    work() {
        console.log(`I am working on ${this.projects[0]} written in ${this.lang}`);
    }
    ;
}
;
