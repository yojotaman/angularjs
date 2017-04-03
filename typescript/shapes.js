//shapes: son parecidos a los que son los objetos
// la diferencia es que el shape permite setearle los parametros simpre y cuando no sean privados usando notacion de punto.
var Person = (function () {
    function Person() {
        this.first_name = 'Jona';
        this.last_name = 'Sal';
        this.twitter_user = '@yojotaman';
    }
    Person.prototype.setLastName = function (last_name) {
        this.last_name = last_name;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.setLastName('Salazar');
myPerson.first_name = 'Jonathan';
console.log(myPerson);
