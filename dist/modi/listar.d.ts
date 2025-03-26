export declare function listarArchivos(directorio: string, callback: (err: NodeJS.ErrnoException | null, files?: {
    nombre: string;
    tamaño: number;
    modificado: Date;
}[]) => void): void;
