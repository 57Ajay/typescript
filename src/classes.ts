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

export class Dev extends Coder{
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

export class Guitarist1 implements Musicians{
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

//////////////////////////////////////////////////////////////////

export class Peeps {
    static count: number = 0;
    // static applies to the class directly
    // exp:  Peeps.getCount()
    // not if we do it on an instance
    // like const peeps = new Peeps();
    // peeps.getCount(), this is wrong.


    static getCount(): number {
        return Peeps.count;
    }
    public id: number;
    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

////////////////////////////////////////////////////////////

export class Bands{
    private dataState: string[];
    constructor(){
        this.dataState = [];
    }
    public get data(): string[]{
        return this.dataState;
    };

    public set data(value: string[]){
        if(Array.isArray(value) && value.every((el: string) => typeof el === 'string')){
            this.dataState = value;
            return;
        }else{
            throw new Error('Param is not an array of strings');
        };
    };
};

