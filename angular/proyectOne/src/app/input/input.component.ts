import { Component, Input} from '@angular/core'; //decora

@Component({
    selector:'input-component', //npmbre del tag que tengamos
    templateUrl:'input.component.html',
    styleUrls:['input.component.css']//recibe un array de datos
})

export class InputComponent{

    @Input() voto:string;

    constructor(){
        console.log('estoy entrando');
    }
}