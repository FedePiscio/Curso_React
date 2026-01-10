
/*Vamos a crear un componente: ComponenteMultiple que tendra 2 opciones: una que sera la opcion (hotel/coche) y la otra seran los dias*/
const ComponenteMultiple=({opcion, dias})=>{

    //################ FUNCION 1:

    /* aqui dentro definiremos 2 funciones: que nos permitiran realizar el calco del coste.
    Vamos a comenzar con la funcion que nos permitira calcular la estancia en el hotel*/
    const calculoCosteHotel=()=>{

        /*Definimos el coste diario que sera de 50 */
        let coste=dias*50;

        /*Tambien vamos a determinar algunos beneficios: descuentos por la cantida de dias que contrate */
        if (dias>5) coste-=35; /*Si es mayor a 5 dias se descontara 35 euros */
        else if (dias>3) coste-=25;  /*Si es mayor a 3 dias se descontara 25 euros */

        /*Luego aremos que la funcion nos devuelva el costo: que es lo que veremos en el renderizado final,
        le vamos decir que nos devuelva dentro de un parrafo el costo de la estancia en hotel, con lo cual si
        esta funcion es llamada realizara el calculo del coste del hotel y mostrara en pantalla*/
        return <p>Coste estancia Hotel: {coste}</p>
    }

    //################ FUNCION 2:
    /*Es similara a la funcion anterior con algunas modificaciones:*/
    const calculoAlquilerCoche=()=>{

        let coste=dias*45;

        if (dias>7) coste-=30; 
        else if (dias>3) coste-=15;  

        return <p>Coste alquiler Coche: {coste}</p>
    }

    /*Lo mas importante de este componente es el RENDERIZADO CONDICIONAL:*/
    /*El === hace una doble comprobacion logica de "numero y de tipo de dato: numerico" 
      En la condicion logica le indicamos que si es opcion 1 calcule costo hote, si es la opcion 2 calcule
      alquiler del coche y si no es ninguna de las 2 opciones indique "" */
    return <div>{opcion===1?calculoCosteHotel():opcion===2?calculoAlquilerCoche():""}</div>

}

export default ComponenteMultiple;

