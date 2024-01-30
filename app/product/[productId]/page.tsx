import Container from '@/app/components/Container';
import React from 'react'
import ProductDetails from './ProductDetails';
import { product } from '@/utils/product';
interface IParams{
    productId?:string;
}

const Product = ({params}:{params:IParams}) => {
  return (
    <Container>
        {params.productId}
        <ProductDetails product={product}/>
    </Container>
  )
}

export default Product