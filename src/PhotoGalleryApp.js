import React, { useContext, useEffect } from 'react';
import { PhotoStockContext } from './context/PhotoStockContext';

import { PhotoStock } from './components/PhotoStock';
import { SideBar } from './components/SideBar';

import './style.css';
import { EmptyStock } from './components/EmptyStock';

export const PhotoGalleryApp = () => {

    const { photoStock, setPhotoStock } = useContext(PhotoStockContext);

    useEffect(() => {

        localStorage.getItem('photos') && setPhotoStock( JSON.parse(localStorage.getItem('photos')));
            
    }, [setPhotoStock])

    useEffect(() => {
        
        localStorage.setItem('photos', JSON.stringify(photoStock) )

    }, [photoStock])

    
    return (
        <>
            <h1>Photo Gallery App</h1>

            <div className="main_content">
                <SideBar/>
                
                {
                    (photoStock.length >= 1 )  
                        ? <PhotoStock imgs={ photoStock }/>
                        : <EmptyStock />
                }
            </div>
            
            
        </>
    )
}
