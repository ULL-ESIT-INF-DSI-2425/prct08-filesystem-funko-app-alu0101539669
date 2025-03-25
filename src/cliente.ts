// Importamos los módulos necesarios
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { addFunko, eliminarFunko, listaFunkos, mostrarFunko, modificarFunko } from './funciones.js';
import { Genero, Tipo } from './type.js';

// Definimos los comandos de yargs
yargs(hideBin(process.argv)).command('add', 'Adds a funko', {
  user: { type: 'string', demandOption: true },
  id: { type: 'number', demandOption: true },
  nombre: { type: 'string', demandOption: true },
  descripcion: { type: 'string', demandOption: true },
  tipo: { type: 'string', demandOption: true },
  genero: { type: 'string', demandOption: true },
  franquicia: { type: 'string', demandOption: true },
  numero: { type: 'number', demandOption: true },
  exclusivo: { type: 'boolean', demandOption: true },
  caracteristicasEspeciales: { type: 'string', demandOption: true },
  valorMercado: { type: 'number', demandOption: true }
}, (args) => {
  addFunko(args.id, args.user, args.nombre, args.descripcion, args.tipo as Tipo, args.genero as Genero, args.franquicia, args.numero, args.exclusivo, args.caracteristicasEspeciales, args.valorMercado);
}
).help().argv;

yargs(hideBin(process.argv)).command('remove', 'Removes a funko', {
  user: { type: 'string', demandOption: true },
  id: { type: 'number', demandOption: true }
}, (args) => {
  eliminarFunko(args.user, args.id);
}
).help().argv;

yargs(hideBin(process.argv)).command('modify', 'Modifies a funko', {
  user: { type: 'string', demandOption: true },
  id: { type: 'number', demandOption: true },
  nombre: { type: 'string', demandOption: true },
  descripcion: { type: 'string', demandOption: true },
  tipo: { type: 'string', demandOption: true },
  genero: { type: 'string', demandOption: true },
  franquicia: { type: 'string', demandOption: true },
  numero: { type: 'number', demandOption: true },
  exclusivo: { type: 'boolean', demandOption: true },
  caracteristicasEspeciales: { type: 'string', demandOption: true },
  valorMercado: { type: 'number', demandOption: true }
}, (args) => {
  modificarFunko(args.id, args.user, args.nombre, args.descripcion, args.tipo as Tipo, args.genero as Genero, args.franquicia, args.numero, args.exclusivo, args.caracteristicasEspeciales, args.valorMercado);
}
).help().argv;

yargs(hideBin(process.argv)).command('list', 'Lists a funko', {
  user: { type: 'string', demandOption: true }
}, (args) => {
  listaFunkos(args.user);
}
).help().argv;

yargs(hideBin(process.argv)).command('read', 'Reads a funko', {
  user: { type: 'string', demandOption: true },
  id: { type: 'number', demandOption: true }
}, (args) => {
  mostrarFunko(args.user, args.id);
}
).help().argv;


// // Definimos los comandos de yargs
// yargs(hideBin(process.argv)).command('add', 'Adds a funko', {
//   user: {
//     description: 'User name',
//     type: 'string',
//     demandOption: true 
//   },
//   id: {
//     description: 'Funko ID',
//     type: 'number',
//     demandOption: true
//   },
//   nombre: { 
//     description: 'Funko name',
//     type: 'string',
//     demandOption: true
//   },
//   descripcion: {
//     description: 'Funko description',
//     type: 'string',
//     demandOption: true
//   },
//   tipo: {
//     description: 'Funko type',
//     type: 'string',
//     demandOption: true
//   },
//   genero: {
//     description: 'Funko genre',
//     type: 'string',
//     demandOption: true
//   },
//   franquicia: {
//     description: 'Funko franchise',
//     type: 'string',
//     demandOption: true
//   },
//   numero: {
//     description: 'Funko number',
//     type: 'number',
//     demandOption: true
//   },
//   exclusivo: {
//     description: 'Funko exclusive',
//     type: 'boolean',
//     demandOption: true
//   },
//   caracteristicasEspeciales: {
//     description: 'Funko special features',
//     type: 'string',
//     demandOption: true
//   },
//   valorMercado: {
//     description: 'Funko market value',
//     type: 'number',
//     demandOption: true
//   }
// }, (argv) => {
//   addFunko(argv.id, argv.user, argv.nombre, argv.descripcion, argv.tipo as Tipo, argv.genero as Genero, argv.franquicia, argv.numero, argv.exclusivo, argv.caracteristicasEspeciales, argv.valorMercado);
// }).help().argv;
 
// yargs(hideBin(process.argv)).command('remove', 'Removeses a funko', {
//   user: {
//     description: 'User name',
//     type: 'string',
//     demandOption: true
//   },
//   id: {
//     description: 'Funko ID',
//     type: 'number',
//     demandOption: true
//   }
// }, (argv) => {
//   eliminarFunko(argv.user, argv.id);

// }).help().argv;
 
// yargs(hideBin(process.argv)).command('modify', 'Modifies a funko', {
//   user: {
//     description: 'User name',
//     type: 'string',
//     demandOption: true
//   },
//   id: {
//     description: 'Funko ID',
//     type: 'number',
//     demandOption: true
//   },
//   nombre: {
//     description: 'Funko name',
//     type: 'string',
//     demandOption: true
//   },
//   descripcion: {
//     description: 'Funko description',
//     type: 'string',
//     demandOption: true
//   },
//   tipo: {
//     description: 'Funko type',
//     type: 'string',
//     demandOption: true
//   },
//   genero: {
//     description: 'Funko genre',
//     type: 'string',
//     demandOption: true
//   },
//   franquicia: {
//     description: 'Funko franchise',
//     type: 'string',
//     demandOption: true
//   },
//   numero: {
//     description: 'Funko number',
//     type: 'number',
//     demandOption: true
//   },
//   exclusivo: {
//     description: 'Funko exclusive',
//     type: 'boolean',
//     demandOption: true
//   },
//   caracteristicasEspeciales: {
//     description: 'Funko special features',
//     type: 'string',
//     demandOption: true
//   },
//   valorMercado: {
//     description: 'Funko market value',
//     type: 'number',
//     demandOption: true
//   }
// }, (argv) => {
//   modificarFunko(argv.id, argv.user, argv.nombre, argv.descripcion, argv.tipo as Tipo, argv.genero as Genero, argv.franquicia, argv.numero, argv.exclusivo, argv.caracteristicasEspeciales, argv.valorMercado);
// }).help().argv;

 
// yargs(hideBin(process.argv)).command('list', 'Lists a funko', {
//   user: {
//     description: 'User name',
//     type: 'string',
//     demandOption: true
//   }
// }, (argv) => {
//   listaFunkos(argv.user);
// }).help().argv;

 
// yargs(hideBin(process.argv)).command('read', 'Reads a funko', {
//   user: {
//     description: 'User name',
//     type: 'string',
//     demandOption: true
//   },
//   id: {
//     description: 'Funko ID',
//     type: 'number',
//     demandOption: true
//   }
// }, (argv) => {
//   mostrarFunko(argv.user, argv.id);
// }).help().argv;