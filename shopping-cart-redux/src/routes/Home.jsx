import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner.jsx'
import Card from '../components/Card.jsx'

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading , setLoading] = useState(false);
    const [products , setProducts] = useState([]);

    const fetchProductData = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        setProducts(data);
      } catch (error) {
        setProducts([]);
      }
      setLoading(false);
    }

    useEffect(() => {
      fetchProductData();
    } , [])
    
  return (
    <div className='flex justify-center'>
      <div className='w-3/4 flex flex-wrap  gap-y-2'>
        {
          loading ? <Spinner/> :
          products.length != 0 ? 
          products.map( (product) => (
            <Card key = {product.id} product = {product} />
          )) :
          <div>
            No Products Found
          </div>
        }
      </div>
    </div>
  )
}

export default Home
