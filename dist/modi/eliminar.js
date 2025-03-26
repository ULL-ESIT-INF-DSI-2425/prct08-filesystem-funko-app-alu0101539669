// Importamos los módulos necesarios
import fs from 'fs';
import path from 'path';
export function eliminarArchivo(archivo, papelera, callback) {
    let destino = path.join(papelera, path.basename(archivo));
    fs.copyFile(archivo, destino, (err) => {
        if (err) {
            return callback(err);
        }
        fs.rm(archivo, (err) => {
            if (err) {
                return callback(err);
            }
            callback(null);
        });
    });
}
