import {Pipe, PipeTransform} from '@angular/core';

 @Pipe({name: 'conversorPipe'}) // En el annotation vamos a declarar el nombre de nuestro pipe
 export class ConversorPipe implements PipeTransform {  // vamos a implementar un PipeTransform    
     transform(value: number, exponent: string): number {      
         let exp = parseFloat(exponent);       // podemos recibir un numero y un string, el string lo vamos a convertir en numero flotante y de inmediato hacer la multiplicación 
         return value * (isNaN(exp) ? 1 : exp);                 // sin embargo vamos a validar que sea un numero o dar un valor de 1 en otro caso.     
        }  
    }
