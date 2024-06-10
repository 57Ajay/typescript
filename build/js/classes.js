"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guitarist = exports.dev = exports.Coder = void 0;
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
exports.Coder = Coder;
;
class dev extends Coder {
    constructor(name, age, lang, projects) {
        super(name, age, lang, projects);
    }
    work() {
        console.log(`I am working on ${this.projects[1]} written in ${this.lang}`);
    }
    ;
}
exports.dev = dev;
;
class guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is ${action}ing`;
    }
}
exports.guitarist = guitarist;
;
