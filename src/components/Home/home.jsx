import ImageItem from '../imageItem';
import useApi from '../../hooks/useApi';
import NewCategory from '../newCategory';
import DisplayGifs from '../Gifs';
import { useState } from 'react';


function Home() {
    const [category, setCategory] = useState("");
    const URL = `https://api.giphy.com/v1/gifs/trending?api_key=TMBLr1oiqdrkpb21wGxbjAzhHDnnvlgq&limit=50&rating=g`
    const { loader, data } = useApi(URL);

    return (
        <div>
            <div className="home">
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