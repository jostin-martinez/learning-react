export const getImagen = async() => {
    try {
        //const apiKey = 'OchQvdWT1TUY5upq3PjLNKG13lQqechx///sdsd';
        const apiKey = 'OchQvdWT1TUY5upq3PjLNKG13lQqechx';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'No existe';
    }
}

//async -> que retorna una promesa
//para probar el error cambiamos la api key