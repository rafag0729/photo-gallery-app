import React from 'react'

export const ImageItem = ({img}) => {

    const { secure_url, tags, original_filename} = img;

    return (
        <div className="image_item">
            <img
                src={secure_url}
                alt={ original_filename }
                />
            <h3>{ original_filename }</h3>
            <p>TAGS <i className="fas fa-tags"></i> <span>{tags} </span></p>
        </div>
    )
}
