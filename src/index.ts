import { preguntar } from './lib/consola.ts';
import { cifrar, descifrar } from './lib/funcionesCriptográficas.ts';

let palabra: string = preguntar ('Palabra a cifrar:'); // Preguntar por la palabra a cifrar o descifrar
let claveTexto: string = preguntar ('Clave de cifrado:'); // Preguntar por la clave de cifrado (número)
let accion: string = preguntar ('¿Cifrar o descifrar?'); // Preguntar si se desea cifrar o descifrar (cifrar/descifrar)
let claveNumero: number = Number(claveTexto);
let resultado: string = ''; // COMPLETAR

if (accion === "cifrar") {
    resultado = cifrar(palabra,claveNumero);

} else if (accion === "descifrar") {
    resultado = descifrar(palabra, claveNumero);

}
console.log(resultado);
