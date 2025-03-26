
// Trate de ser defensivo programando. Hágase preguntas como ¿qué sucedería si un archivo que necesito leer no existe? o ¿qué ocurriría si el archivo que voy a intentar leer existe pero no tiene contenido? Por último, intente que su código se encuentre bien estructurado definiendo diferentes funciones.

import fs from 'fs';
import path from 'path';

// Listar archivos de un directorio
export function listarArchivos(directorio: string, callback: (err: NodeJS.ErrnoException | null, files?: { nombre: string, tamaño: number, modificado: Date }[]) => void): void {
    fs.readdir(directorio, (err, archivos) => {
        if (err) {
            return callback(err);
        }

        let resultados: { nombre: string, tamaño: number, modificado: Date }[] = [];
        let faltantes = archivos.length;

        if (!faltantes) {
          return callback(null, resultados);
        }
        
        archivos.forEach(archivo => {
            let ruta = path.join(directorio, archivo);
            fs.stat(ruta, (err, stats) => {
                if (!err) {
                    resultados.push({ nombre: archivo, tamaño: stats.size, modificado: stats.mtime });
                }
                let faltantes1 = --faltantes;
                if (!faltantes1) { 
                  callback(null, resultados);
                }
            });
        });
    });
}