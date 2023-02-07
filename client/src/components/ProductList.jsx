import React from 'react';
import ProductCard from './ProductCard';


const ProductList = ({filteredProducts}) => {

  return (
    <ul className='my-4 grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3'>
      <ProductCard filteredProducts={filteredProducts} />
    </ul>
  )
}

export default ProductList;