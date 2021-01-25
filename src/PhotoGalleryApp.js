import React, { useState } from 'react';
import { fileValidation } from './helpers/fileValidation';
import { uploadFile } from './helpers/uploadFile';
import Swal from 'sweetalert2';

import './style.css';

//Cual va a ser el estado de mi aplicacion
//Cuando tengo imagenes y cuando no las tengo, errores
export const PhotoGalleryApp = () => {

    const [file, setFile] = useState({fileReady: null, error: false});
    
    const triggerUpload = () => {
        document.querySelector("#imgSelector").click();
    }

    const handleFileChange = ({target}) => {
        
        const { fileReady, error } = fileValidation(target.files[0]);

        if(error){
            setFile({
                ...file,
                error
            })
            
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error
            })
        }

        fileReady && Swal.fire({
            title: 'Tu imagen es válida, confirma para subirla',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
          }).then((result) => {
            if (result.isConfirmed) {
                
                console.log(uploadFile(fileReady));
            }
          })
    }
    
    return (
        <>
            <h1>Photo Gallery App</h1>
            
            <div
                className="file_button">
                <button
                    onClick={ triggerUpload }
                    > Sube tu foto 
                </button>

                <input 
                    id="imgSelector"
                    onChange={ handleFileChange }
                    type="file" 
                    name="file"/>
            </div>

            <p>Ahora que </p>

            <div className="photo_stock">

            </div>
        </>
    )
}
