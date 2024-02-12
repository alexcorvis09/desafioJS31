import { allPost } from './database.js'

/**  1. Creamos funcion fecha aleatoria para los post */
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

const postsOrigin = await allPost()

/* Metemos la fecha random a los posts que llegan de la api */
export const postWDate = () => {

    const newPostDates = {
        ...postsOrigin,
    }

    const lenPost =( Object.keys(postsOrigin).length ) - 1
    let cont = 1
    Object.entries(newPostDates).forEach((([key, value]) => {
        if(cont <= lenPost){
        newPostDates[key]["date"] = aleatoryDate();
       console.log("Clave:", cont," de: ",lenPost, "Valor:", value );
        cont++
        }
    }))
    // console.log("///////////////postOrigin///////////////////////");
    // console.log(postsOrigin);

    // guardar obj en localSt
    const myPost = JSON.stringify(newPostDates)
    // console.log(typeof myPost);
    localStorage.setItem("postApiDateLocal", myPost )

    return newPostDates;
}

//falta meter la fecha - LISTO
//falta guardar obj - LISTO
//falta guardar obj en local - LISTO

// -----cargar la pagina y revisar el push - no funciona
// -----hacer pull
// -----hacer push
// -----guardar en local 
// -----trsbajr btns  