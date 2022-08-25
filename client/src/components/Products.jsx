import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { popularProducts } from '../data'
import Product from './Product'
import axios from "axios";

const Container = styled.div`
    padding: 20x;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-betweem;
`

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
  
  console.log(products)
  return (
    <Container>
      {products.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  )
}

export default Products