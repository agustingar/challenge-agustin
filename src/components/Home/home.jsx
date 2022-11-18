import ImageItem from '../imageItem';
import useApi from '../../hooks/useApi';
import NewCategory from '../newCategory';
import DisplayGifs from '../Gifs';
import { useState } from 'react';
import { useAppContext } from '../../hooks/createContext';



function Home(item) {
    const [category, setCategory] = useState("");
    const updates = useAppContext();
    const URL = `https://api.giphy.com/v1/gifs/trending?api_key=TMBLr1oiqdrkpb21wGxbjAzhHDnnvlgq&limit=50&rating=g`
    const { loader, data } = useApi(URL);

    return (
        <div>
            <div className="home">
                <h2>Gifs Expert App</h2>
                <NewCategory setCategory={setCategory} />
                <DisplayGifs category={category} />
               <div> {updates.items
                .map((item) => (
              <ImageItem item={item} key={item.id} />

            ))}
            </div>
            <div style={{color:'white'}}>{item?.cover ? <img src={item?.cover} width='300'  alt={item.title} /> : ''}</div>
                <div style={{color:'white'}}>{item?.url ? <img src={item?.url} width='300' height='200'  alt={item.title} /> : ''}</div>
                <div style={{color:'white'}}>{item.title}</div>
                <div className='container-gifs'>
                    {
                        loader ?
                            data.map(img => (
                                <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
                            ))
                            : ''
                    }
                </div>
            </div>
        </div>
    )
}
export default Home