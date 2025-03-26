// Importamos los módulos necesarios

import { eliminarArchivo } from "./eliminar.js";
import { listarArchivos } from "./listar.js";

//Probar el codigo 

// Eliminamos un archivo
eliminarArchivo('./archivo.txt', './papelera', (err) => {
    if (err) {
        console.error('Error al eliminar el archivo:', err);
        return;
    }
    console.log('Archivo eliminado con éxito');
});

//listar 

// Listamos los archivos
listarArchivos('./src', (err, archivos) => {
    if (err) {
        console.error('Error al listar archivos:', err.message);
        return;
    }

    if (archivos && archivos.length > 0) {
        console.log('Listado de archivos:');
        archivos.forEach(archivo => {
            console.log(`- Nombre: ${archivo.nombre}`);
            console.log(`  Tamaño: ${archivo.tamaño} bytes`);
            console.log(`  Modificado: ${archivo.modificado}`);
            console.log('----------------------');
        });
    } else {
        console.log('El directorio está vacío o no contiene archivos visibles.');
    }
});

