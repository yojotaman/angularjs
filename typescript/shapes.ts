//shapes: son parecidos a los que son los objetos
// la diferencia es que el shape permite setearle los parametros simpre y cuando no sean privados usando notacion de punto.

class Person{
    first_name:string;
    last_name:string;
    twitter_user:string;

    constructor(){ // el constructor lo que va a hacer es inicializar el shape
        this.first_name='Jona';
        this.last_name='Sal';
        this.twitter_user='@yojotaman';
    }
    setLastName(last_name:string){
        this.last_name = last_name;
    }
}
var myPerson = new Person();
myPerson.setLastName('Salazar');
myPerson.first_name= 'Jonathan';

console.log(myPerson);