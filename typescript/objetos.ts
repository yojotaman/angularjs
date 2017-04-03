// indica que vamos a empezar una clase(lista de variables y funciones con las que podemos trabajar)
class MyPerson {
    first_name:string;
    last_name:string;

    //constructor de la clase
    constructor(_first_name?:string, _last_name?:string){// el interogante indica que no es un parámetro obligatorio
        console.log(_first_name, _last_name)
    }
}

//instancia de unaa clase (objeto)
let personaUno = new MyPerson();
let personaDos = new MyPerson('Jonathan'); 
let personaTres = new MyPerson('Jonathan', 'Salazar');  