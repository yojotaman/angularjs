var _this = this;
console.log("Hola mundo");
//primitivas
var full_name = "Jonathan Salazar";
var age = 33;
var developer = true;
//arrays
var skills = ['Javascript', 'Typescript', 'Angular'];
var numberArray = [524, 684, 287];
//enumerales - especie de objto que enumera los datos que tengo dentro
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
    this.full_name = name; // hace referencia al entorno global
}
function getHello(pretext) {
    return pretext + " " + this.full_name;
}
//parametro any
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
