// indica que vamos a empezar una clase(lista de variables y funciones con las que podemos trabajar)
var MyPerson = (function () {
    //constructor de la clase
    function MyPerson(first_name, last_name) {
        console.log("first_name", first_name);
        console.log("last_name", last_name);
        this.first_name = first_name;
        this.last_name = last_name;
    }
    MyPerson.prototype.getSaludo = function () {
        var emojis = ':p';
        return "Saludos:\n        " + this.first_name + " " + this.last_name + ",\n        te enviamos un emoji de la consola" + emojis;
    };
    return MyPerson;
}());
//instancia de unaa clase (objeto)
//let personaUno = new MyPerson();
//let personaDos = new MyPerson('Jonathan'); 
//let personaTres = new MyPerson('Jonathan', 'Salazar');  
// interpolación: la forma de mezclar variables con strings
var personaTres = new MyPerson('Jonathan', 'Salazar');
console.log(personaTres.getSaludo());

