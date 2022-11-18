import React from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../../hooks/createContext'

export default function Galery ({newGif}) {
const update = useAppContext();

const gifContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
}

const gifInfo = {
    display: 'flex',
    flexDirection: 'column',
   alignItems: 'center',
   textAlign: 'center',
   color: 'white',
   textDecoration: 'none',
};

  return (
    <>
     
        <div style={gifContainer}>

          {update.items
            .map((item) => (
              <Link to={`/view/${item.id}`} style={gifInfo}>
              <div style={{color:'white'}}>{item?.cover ? <img src={item?.cover} width='300'  alt={item.title} /> : ''}</div>
              <div style={{color:'white'}}>{item?.url ? <img src={item?.url} width='300' height='200'  alt={item.title} /> : ''}</div>
              <div style={{color:'white'}}>{item.title}</div>
          </Link>

            ))}
            </div>
            <div>
        {newGif}
        </div>
        
    </>
  )
}
