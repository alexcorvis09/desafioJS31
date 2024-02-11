import { getPosts } from './database.js'

// /* Los post no tienen fecha, hay que simular fechas con alguna funcion para añadirle
// de forma aleatoria una fecha */

//pasamos los post a local

 
/**  1. Creamos funcion fecha aleatoria */

// obtenemos la fechaRandom.. perooo menor a la actual 
// quitar export..
export const aleatoryDate = () => {

    // Fecha actual
    var today = new Date();
    
    // Obtenemos randomYear entre año actual y 1 año menos
    var currYear = today.getFullYear();
    var randomYear = Math.floor(Math.random() * (currYear - (currYear - 1) + 1)) + (currYear - 1); 
    
    // Establecemos valores random para mes y año 
    var randomMonth = Math.floor(Math.random() * 12); 
    var randomDayM = Math.floor(Math.random() * 30) + 1; 

    // Creamos fecha aleatoria
    const newDateR = new Date(randomYear, randomMonth, randomDayM);

    // Repite hasta que se genere una fecha válida
    if (newDateR >= today) {
        return aleatoryDate();
    }

    // Formateo de la salida Año/Mes/Dia
    const randomDate = newDateR.getFullYear() + '/' + ( newDateR.getMonth() + 1 ) + '/' + newDateR.getDate();
    
    
    return randomDate;
}


// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }

const postsOrigin = await getPosts()

export const postWDate = () => {

    const newPostDates = {
        ...postsOrigin
    }

    Object.keys(newPostDates).forEach(function(clave) {
        console.log("Clave:", clave, "Valor:", newPostDates[clave]);
    });

    return newPostDates;

}
