interface MyPersona{
    first_name:string;
    last_name:string;
    twitter_account?:string;// opcional
}

let personaUno:MyPersona={
    first_name:'Jonathan',
    last_name:'Salazar',
    twitter_account:'@yojotaman'
}

let personaDos:MyPersona={
    first_name:'Wachu',
    last_name:'Martinez'   
}

console.log(personaUno);
console.log(personaDos);