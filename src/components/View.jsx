import React from 'react'


export default function View({title ,url}) {

    return (
        <>
                <div style={{color:'white'}}>{url ? <img src={url} width='300' height='200'  alt={title} /> : ''}</div>
                <div style={{color:'white'}}>{title}</div>
        </>
    )
}
