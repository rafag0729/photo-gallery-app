import React, { useContext } from 'react';
import { PhotoStockContext } from './context/PhotoStockContext';

import { PhotoStock } from './components/PhotoStock';
import { SideBar } from './components/SideBar';

import './style.css';

export const PhotoGalleryApp = () => {

    
    const { photoStock } = useContext(PhotoStockContext);
    
    return (
        <>
            <h1>Photo Gallery App</h1>

            <SideBar/>
            
            {
                (photoStock.length >= 1 ) && <PhotoStock imgs={ photoStock }/>
            }
        </>
    )
}
