
import React from 'react'

export default function Galery() {

    return (
        <>
            <div className='container-gifs' style={{backgroundColor:'black', height:'94vh', marginTop:'0%',padding:'2rem 0 0 0'}}>
                <div style={{ color: 'white' }}>
                    {localStorage.getItem('gif') ? <img src={localStorage.getItem('gif')} width='300' alt={localStorage.getItem('title')} /> : ''}
                    {localStorage.getItem('url') ? <img src={localStorage.getItem('url')} width='300' alt={localStorage.getItem('title')} /> : ''}
                    <h2>{localStorage.getItem('title')}</h2>
                    <h4>{localStorage.getItem('author')}</h4>
                </div>
            </div>
        </>
    )
}
