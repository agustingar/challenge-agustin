import { useEffect, useState } from "react";

const useApi = (url) => {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(false);

    const fetchApi = () => {
        fetch(url)
            .then((response) => response.json())
            .then((responseJSON) => {
                setLoader(true);
                setData(responseJSON.data);
            })
            .catch((error) => {
                return console.log(error);
            });
    };

    useEffect(() => {
        fetchApi();
    }, [url]);

    return { loader, data };
};

export default useApi;
