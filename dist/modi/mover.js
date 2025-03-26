// Importamos los módulos necesarios
import fs from 'fs';
export function moverArchivo(origen, destino, callback) {
    fs.rename(origen, destino, callback);
}
