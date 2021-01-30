import React from 'react'
import { ImageItem } from './ImageItem'

export const PhotoStock = ({ imgs }) => {
    return (
        <div className="photo_stock">

            {
                imgs.map( img => (
                    <ImageItem 
                        key={img.public_id}
                        img={img}
                        />
                ))
            }
            
        </div>
    )
}
