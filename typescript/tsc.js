var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hey, ' + this.greeting;
    };
    return Greeter;
}());
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
function enumerable(value) {
    return function (target, properatyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var gree = new Greeter("Soy el mensaje");
console.log(gree.greet());
var _this = this;
console.log("Hola mundo");
var full_name = "Jonathan Salazar";
var age = 33;
var developer = true;
var skills = ['Javascript', 'Typescript', 'Angular'];
var numberArray = [524, 684, 287];
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Developer"] = 3] = "Developer";
})(Role || (Role = {}));
;
var role = Role.Employee;
console.log("roles", role);
function setName(Name) {
    this.full_name = name;
}
function getHello(pretext) {
    return pretext + " " + this.full_name;
}
function inConsole(nameFunction) {
    console.log(nameFunction);
}
inConsole(getHello("Texto dentro del getHello"));
inConsole(full_name);
inConsole("Hola, soy un simple string");
var data = ['AngularJS', 'Angular', 'Redux', 'VUE'];
data.forEach(function (frameworksLibs) {
    _this.inConsole(frameworksLibs);
});
var personaUno = {
    first_name: 'Jonathan',
    last_name: 'Salazar',
    twitter_account: '@yojotaman'
};
var personaDos = {
    first_name: 'Wachu',
    last_name: 'Martinez'
};
console.log(personaUno);
console.log(personaDos);
var MyPerson = (function () {
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
var personaTres = new MyPerson('Jonathan', 'Salazar');
console.log(personaTres.getSaludo());
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
//# sourceMappingURL=tsc.js.map