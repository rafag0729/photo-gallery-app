import React, { useContext, useState } from 'react'
import { PhotoStockContext } from '../context/PhotoStockContext';
import { fileValidation } from '../helpers/fileValidation';
import { uploadFile } from '../helpers/uploadFile';

import Swal from 'sweetalert2';

export const SideBar = () => {

    
    const [file, setFile] = useState({fileReady: null, error: false});
    const { photoStock, setPhotoStock } = useContext(PhotoStockContext);

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
                
                const uploadResult = uploadFile(fileReady);
                uploadResult.then(result => {
                    console.log(result);
                    setPhotoStock([
                        ...photoStock,
                        result
                    ])
                })
            }
          })
    }

    return (
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
    )
}
