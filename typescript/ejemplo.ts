console.log("Hola mundo");

//primitivas
var full_name:string = "Jonathan Salazar";
var age:number = 33;
var developer:boolean = true;

//arrays
var skills:Array<string>=['Javascript','Typescript','Angular'];
var numberArray:number[]=[524,684,287];

//enumerales - especie de objto que enumera los datos que tengo dentro

enum Role{Employee, Manager, Admin, Developer};
var role:Role = Role.Employee;

console.log("roles", role);

function setName(Name:string):void{
    this.full_name = name; // hace referencia al entorno global
}

function getHello(pretext:string):string{
    return pretext +" "+this.full_name;
}

//parametro any

function inConsole(nameFunction:any):void{
    console.log(nameFunction);
}

inConsole(getHello("Texto dentro del getHello"));
inConsole(full_name);
inConsole("Hola, soy un simple string");

var data:string[] = ['AngularJS','Angular', 'Redux', 'VUE'];

data.forEach(
    (frameworksLibs)=>{
        this.inConsole(frameworksLibs);
    }
)