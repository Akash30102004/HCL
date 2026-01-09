import { Student } from "./Student";
import { Faculty } from "./Faculty";
import { Staff } from "./Staff";
import { Person } from "./Person";

class Main{
    static main(): void{
        const newperson= new Person("Akash","Namakkal");
        newperson.displayAddress();

        console.log("------------------");

        const student1=new Student("Alice","123 Main St");
        student1.study();
        student1.displayAddress();

        console.log("---------------");

        const faculty1=new Faculty("Dr. Smith", "456 College Ave");
        faculty1.teach();
        faculty1.displayAddress();

        console.log("---------------");

        const staff1= new Staff("Mr. Johnson", "789 University BLvd");
        staff1.work();
        staff1.displayAddress();


        console.log("---------------");
    }
}

Main.main();