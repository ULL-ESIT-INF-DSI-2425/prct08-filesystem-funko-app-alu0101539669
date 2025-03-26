// Importamos los módulos necesarios
import fs from 'fs';

export function moverArchivo(origen: string, destino: string, callback: (err: NodeJS.ErrnoException | null) => void): void {
    fs.rename(origen, destino, callback);
}
