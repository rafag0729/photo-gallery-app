import React, { useContext, useEffect, useState } from 'react'
import { PhotoStockContext } from '../context/PhotoStockContext';
import { fileValidation } from '../helpers/fileValidation';
import { uploadFile } from '../helpers/uploadFile';

import Swal from 'sweetalert2';

export const SideBar = () => {

    const [previewImg, setPreviewImg] = useState({
        img: null,
        ready: false
    });
    const [file, setFile] = useState({fileReady: null, error: false});
    const { photoStock, setPhotoStock } = useContext(PhotoStockContext);

    useEffect(() => {

        if(previewImg.ready){
            let reader = new FileReader();
            reader.readAsDataURL(previewImg.img);
            
            const loadingImg = () => {
                
                setPreviewImg({
                    ...previewImg,
                    src: reader.result
                })
            }

            reader.addEventListener('load', loadingImg);

            return () => {
                reader.removeEventListener('load', loadingImg);
            }
        }
        
    }, [previewImg])

    const triggerUpload = () => {
        document.querySelector("#imgSelector").click();
    }

    const handleFileChange = ({target}) => {

        let img = target.files[0];
        setPreviewImg({
            ...previewImg,
            img,
            ready: true
        });
        const { fileReady, error } = fileValidation(img);
        
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
                    setPhotoStock([
                        ...photoStock,
                        result
                    ])
                })
            }
          })
          
    }

    return (
        <>
            <div
                className="sidebar">


                <button
                    onClick={ triggerUpload }
                    > Sube tu foto 
                </button>

                <input 
                    id="imgSelector"
                    onChange={ handleFileChange }
                    type="file" 
                    name="file"/>

                {
                    (previewImg.ready) && 
                        <div className="preview">
                            <img src={ previewImg.src } alt="Preview img"/>
                            <p>Filename:</p> <span>{previewImg.img.name}</span>
                            <p>Type: </p> <span>{previewImg.img.type} </span>
                            <p>Size: </p> <span>{previewImg.img.size} bites</span>
                        </div>
                }
                
            </div>
            
        </>
    )
}
