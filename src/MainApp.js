import React, { useState } from 'react';
import { PhotoStockContext } from './context/PhotoStockContext';
import { PhotoGalleryApp } from './PhotoGalleryApp';

export const MainApp = () => {

    const [photoStock, setPhotoStock] = useState([]);


    return (
        <PhotoStockContext.Provider value={{
            photoStock,
            setPhotoStock
        }}>
            <PhotoGalleryApp/>
        </PhotoStockContext.Provider>
    )
}

