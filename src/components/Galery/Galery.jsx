
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Galery() {
    const navigate = useNavigate();
    const handleDelete = (e) => {
        e.preventDefault();
        localStorage.removeItem('gif');
        localStorage.removeItem('url');
        localStorage.removeItem('author');
        localStorage.removeItem('title');
        navigate('/galery')
    }
    return (
        <>
            <div className='container-gifs' style={{ backgroundColor: 'black', height: '100vh', marginTop: '0%', padding: '2rem 0 0 0' }}>
                <div style={{ color: 'white' }}>
                    {localStorage.getItem('gif') ? <img src={localStorage.getItem('gif')} width='300' alt={localStorage.getItem('title')} /> : ''}
                    {localStorage.getItem('url') ? <img src={localStorage.getItem('url')} width='300' alt={localStorage.getItem('title')} /> : ''}
                    <h2>{localStorage.getItem('title')}</h2>
                    <h4>{localStorage.getItem('author')}</h4>
                    {localStorage.getItem('gif', 'title', 'url', 'author') ? <Button onClick={handleDelete}><DeleteIcon color="primary" /></Button> : ''}
                </div>
            </div>
        </>
    )
}
