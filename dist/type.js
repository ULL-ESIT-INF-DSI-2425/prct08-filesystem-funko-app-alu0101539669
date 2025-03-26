/**
 * Enum para los tipos de funkos.
 */
export var Tipo;
(function (Tipo) {
    Tipo["Pop"] = "Pop!";
    Tipo["PopRides"] = "Pop! Rides";
    Tipo["VynilSoda"] = "Vynil Soda";
    Tipo["VynilGold"] = "Vynil Gold";
    Tipo["VynilPlatinum"] = "Vynil Platinum";
})(Tipo || (Tipo = {}));
/**
 * Enum para los géneros de funkos.
 */
export var Genero;
(function (Genero) {
    Genero["Animacion"] = "Animacion";
    Genero["PeliculasYTV"] = "Peliculas y TV";
    Genero["Videojuegos"] = "Videojuegos";
    Genero["Deportes"] = "Deportes";
    Genero["Musica"] = "M\u00FAsica";
    Genero["Anime"] = "Anime";
})(Genero || (Genero = {}));
//   // Buscar archivos por extensión en un directorio y subdirectorios
//   export function buscarPorExtension(directorio: string, extension: string, callback: (err: NodeJS.ErrnoException | null, files?: string[]) => void): void {
//       fs.readdir(directorio, (err, archivos) => {
//           if (err) return callback(err);
//           let resultados: string[] = [];
//           let pendientes = archivos.length;
//           if (!pendientes) return callback(null, resultados);
//           archivos.forEach(archivo => {
//               let ruta = path.join(directorio, archivo);
//               fs.stat(ruta, (err, stats) => {
//                   if (err) return callback(err);
//                   if (stats.isDirectory()) {
//                       buscarPorExtension(ruta, extension, (err, res) => {
//                           if (!err && res) resultados.push(...res);
//                           if (!--pendientes) callback(null, resultados);
//                       });
//                   } else {
//                       if (path.extname(archivo) === extension) {
//                           resultados.push(ruta);
//                       }
//                       if (!--pendientes) callback(null, resultados);
//                   }
//               });
//           });
//       });
//   }
