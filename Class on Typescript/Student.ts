import { Person } from "./Person";

export class Student extends Person{
    
    constructor(name: string, address: string){
        super(name,address);
    }
    study(): void{
        console.log(`${this.name} is studying.`);
    }

    displayAddress(): void {
        console.log(`Student Address of ${this.name} is ${this.address}`);
    }
}