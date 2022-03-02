import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //solo quiero que se ejecute ese codigo cuando el componente renderiza por primera vez
    useEffect(() => {
        getGifs( category )
            .then( imgs => setImages(imgs) );
    }, [ category ] );


    const [images, setImages] = useState([]);

    return (
        <div className='card-grid'>
            <h3>{category}</h3>

            {
                images.map(img => {
                    return (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                })
            }

        </div>
    )
}
