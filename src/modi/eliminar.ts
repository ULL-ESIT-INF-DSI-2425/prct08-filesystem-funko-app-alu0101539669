// Importamos los módulos necesarios
import fs from 'fs';
import { devNull } from 'os';
import path from 'path';

export function eliminarArchivo(archivo: string, papelera: string, callback: (err: NodeJS.ErrnoException | null) => void): void {
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