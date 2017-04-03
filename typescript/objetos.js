// indica que vamos a empezar una clase(lista de variables y funciones con las que podemos trabajar)
var MyPerson = (function () {
    //constructor de la clase
    function MyPerson(_first_name, _last_name) {
        console.log(_first_name, _last_name);
    }
    return MyPerson;
}());
//instancia de unaa clase (objeto). Cuando no se especifican los parámetros, estos aparecen como undefined

var personaUno = new MyPerson();
var personaDos = new MyPerson('Jonathan');
var personaTres = new MyPerson('Jonathan', 'Salazar');
