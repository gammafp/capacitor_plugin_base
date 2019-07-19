import '../prueba/dist/esm';
import { PruebaPluginPlugin } from '../prueba/dist/esm';
import { Plugins } from '@capacitor/core';

const Prueba = Plugins.Prueba as PruebaPluginPlugin;

function main() {
    alert('TEST 1');
    Prueba.echo({value: 'HOLA K ASEs'}).then((valor) => {
        console.log('RESPUESTA DESDE LA CONSOLA: ', valor);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    main();
});