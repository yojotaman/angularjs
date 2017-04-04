import { Component, Input, Output, EventEmitter} from '@angular/core'; // Importamos la funcionalidad de compontente del core de Angular  

@Component({ // Este annotation nos ayuda a la configuración del componente, entre ellos:
    selector:'input-component', // En que selector se va a renderizar
    templateUrl:'input.component.html',  // En que ruta esta su template
    styleUrls:['input.component.css']// // En que ruta se encuentra su hoja de estilos. Recibe un array de datos
})

export class InputComponent{ // La clase que vamos a exportar le dará vida a nuestros componente

    @Input() voto:string;

    @Output() addVoto = new EventEmitter<string>();

    constructor(){
        console.log('estoy entrando');
    }

    votar():void{
        this.addVoto.emit(this.voto);
    }
}