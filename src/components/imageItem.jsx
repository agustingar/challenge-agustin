import React from 'react';

const ImageItem = ({ title, url }) => {
    return (
        <div>
            <img src={ url } alt={ title } width={300} height={400}/>
            <p>{ title }</p>
        </div>
    );
}

export default ImageItem;