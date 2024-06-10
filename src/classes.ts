export class Coder{
    constructor(public readonly name: string, private age: number, public lang: string, protected projects: string[]){
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.projects = projects;
    }
    public greet(){
        console.log(`Hello ${this.name} Your favorite language is ${this.lang}`);
    };
    public work(){
        console.log(`I am working on ${this.projects[0]} written in ${this.lang}`);
    };
};

export class dev extends Coder{
    constructor(name: string, age: number, lang: string, projects: string[]){
        super(name, age, lang, projects);
    }
    public work(){
        console.log(`I am working on ${this.projects[1]} written in ${this.lang}`);
    };
}

////////////////////////////////////////////////////

interface Musicians{
    name: string,
    instrument: string,
    play: (action: string) => String
};

export class guitarist implements Musicians{
    name: string;
    instrument: string;
    constructor(name: string, instrument: string){
        this.name = name;
        this.instrument = instrument;
    }
    play(action: string){
        return `${this.name} is ${action}ing`;
    }
};
