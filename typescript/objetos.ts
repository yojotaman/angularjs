// indica que vamos a empezar una clase(lista de variables y funciones con las que podemos trabajar)
class MyPerson {
    first_name:string;
    last_name:string;

    //constructor de la clase
    constructor(first_name?:string, last_name?:string){// el interogante indica que no es un parámetro obligatorio
        console.log("first_name", first_name);
        console.log("last_name", last_name);
        this.first_name = first_name;
        this.last_name = last_name;        
    }
    getSaludo():string{
        let emojis=':p';
        return `Saludos:
        ${this.first_name} ${this.last_name},
        te enviamos un emoji de la consola` + emojis
    }
}

//instancia de unaa clase (objeto)
//let personaUno = new MyPerson();
//let personaDos = new MyPerson('Jonathan'); 
//let personaTres = new MyPerson('Jonathan', 'Salazar');  

// interpolación: la forma de mezclar variables con strings
var personaTres = new MyPerson('Jonathan', 'Salazar');

console.log(personaTres.getSaludo());