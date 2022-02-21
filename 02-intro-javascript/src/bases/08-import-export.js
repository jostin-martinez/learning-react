import heroes, { owners } from '../data/heroes';

//console.log(owners);

/* const getHeroeById = (id)=> {
    return heroes.find( (heroe) => heroe.id === id);
} */

//solo devuelve un objeto
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);
//console.log(getHeroeById(4));

//devuelve todos los que cumplan con la condicion del owner 'Marvel'
export const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);
//console.log(getHeroeByOwner('Marvel'));