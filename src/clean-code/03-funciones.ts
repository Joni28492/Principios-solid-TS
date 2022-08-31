(() => {

    
    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    interface IMovie {
        cast: string[]
        description: string,
        rating: number,
        title: string,
    }

    function createMovie({title, description, rating, cast}:IMovie ) {
        console.log({ title, description, rating, cast });
    }



    // Crea un nuevo actor
    function checkFullName(fullName:string) {
        console.log({fullName})
        return true;
    }
    
    
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }


    //continuacion - funcion compleja
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
        


        //version  correcta
        if ( isDead )  return  1500;  

        if ( isSeparated )  return 2500;  
        
        return ( isRetired ) ? 3000 : 4000; 
            



        // let result:number;


        // if ( isDead ) {
        //     result = 1500;
        // } else {
        //     if ( isSeparated ) {
        //         result = 2500;
        //     } else {
        //         if ( isRetired ) {
        //             result = 3000;
        //         } else {
        //             result = 4000; 
        //         }
        //     }
        // }
        
        // return result;
    }


    


})();





