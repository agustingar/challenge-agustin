import React from 'react';
import useApi from '../hooks/useApi';
import ImageItem from './imageItem';

const DisplayGifs = ({ category }) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TMBLr1oiqdrkpb21wGxbjAzhHDnnvlgq&q=${category}&limit=50`;
    const { loader, data } = useApi(url);
    console.log();
    return (
        <div className='container-gifs'>
            {
                loader ?
                    (data.map(img =>
                        <ImageItem key={img.id}title={img.title} id={img.id} url={img.images.downsized_medium.url} />
                    ))
                    : ''
            }

        </div>

    );
}

export default DisplayGifs;