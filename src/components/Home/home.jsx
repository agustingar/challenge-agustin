import ImageItem from '../imageItem';
import useApi from '../../hooks/useApi';
import NewCategory from '../newCategory';
import DisplayGifs from '../Gifs';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


function Home() {

    const { loader, data } = useApi(URL);
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    const URL = `https://api.giphy.com/v1/gifs/trending?api_key=TMBLr1oiqdrkpb21wGxbjAzhHDnnvlgq&limit=25&rating=g`

   
    return (
        <div>
    
            <div className="App">
                <h2>Gifs Expert App</h2>
                <NewCategory setCategory={setCategory} />
                <DisplayGifs category={category} />
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