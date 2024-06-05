import { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (input) => {

    const [gif , setGif] = useState('');
    const [loading , setLoading] = useState(false);


    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(input ? `${url}&tag=${input}` : url);
        const imgSrc = response.data.data.images.downsized_large.url;
        setLoading(false);
        setGif(imgSrc);
      } catch (error) {
        alert("You have reached the maximum limit of generating memes please try again later");
      }
    }

    useEffect(() => {
      fetchData();
    },[])


    return {gif,loading,fetchData};
}

export default useGif
