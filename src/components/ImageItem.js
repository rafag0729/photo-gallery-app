import React from 'react'

export const ImageItem = ({img}) => {

    const { secure_url, tags, original_filename} = img;

    return (
        <div>
            <img 
                src={secure_url}
                alt={ original_filename }
                />
            <h3>{ original_filename }</h3>
            <p>TAGS: <span>{tags}</span></p>
        </div>
    )
}
