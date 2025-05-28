//variables
let age: number = 25
let job: string = "Dev"
const IS_OK: boolean = true

//inférence de type
let test: any = 42;
test = "coucou"

class Job {
    private _firm: string

    constructor(
        private name: string,
        firm: string,
        private salary: number = 0) {
        this._firm = firm
    }

    public display(){
        console.log(this.name, this._firm, this.salary)
    }

    get firm(): string {
        return this._firm;
    }

    set firm(value: string) {
        this._firm = value;
    }

}

let dev = new Job("Dev", "IBM", 70000)
dev.firm = "Cap Gemini"
let dev2 = new Job("Dev", "IBM")
dev.display()
dev2.display()



interface Manageable{
    lvlHierarchy : number
    job : {
        name: string
    }
    getHierarchy() : number
}

let manager : Manageable = {
    lvlHierarchy : 12,
    job : {
        name : "Dev"
    },
    getHierarchy(): number {
        return 1
    }
}

console.log(manager.lvlHierarchy)
console.log(manager.getHierarchy())







