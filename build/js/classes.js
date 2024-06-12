"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bands = exports.Peeps = exports.Guitarist1 = exports.Dev = exports.Coder = void 0;
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
class Dev extends Coder {
    constructor(name, age, lang, projects) {
        super(name, age, lang, projects);
    }
    work() {
        console.log(`I am working on ${this.projects[1]} written in ${this.lang}`);
    }
    ;
}
exports.Dev = Dev;
;
class Guitarist1 {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is ${action}ing`;
    }
}
exports.Guitarist1 = Guitarist1;
;
//////////////////////////////////////////////////////////////////
class Peeps {
    // static applies to the class directly
    // exp:  Peeps.getCount()
    // not if we do it on an instance
    // like const peeps = new Peeps();
    // peeps.getCount(), this is wrong.
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
exports.Peeps = Peeps;
Peeps.count = 0;
////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    ;
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
        ;
    }
    ;
}
exports.Bands = Bands;
;
//////////////////////////////////////
