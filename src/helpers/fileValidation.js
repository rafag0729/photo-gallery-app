export const fileValidation = (file) => {

    if( !file ){
        return {
            fileReady: null,
            error: 'No hay archivo',
        }
    } 
    
    const { size, type } = file;
    const fileType = type.split('/');

    if( !fileType[1].includes('jpeg') && !fileType[1].includes('jpg') && !fileType[1].includes('gif') && !fileType[1].includes('png')){
        
        return {
            fileReady: null,
            error: 'El archivo no tiene un formato de imagen válido (jpeg, jpg, gif o png)'
        }; 
    }

    if(size >= 1048576){
        
        return {
            fileReady: null,
            error: 'La imagen debe pesar menos de 10MB'
        }
    }

    return {
        fileReady: file,
        error: false
    }

}
