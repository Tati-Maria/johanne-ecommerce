import React from 'react';
import ProductCard from './ProductCard';


const ProductList = ({filteredProducts}) => {

  return (
    <ul className='my-4 grid grid-cols-2 place-items-center gap-4 sm:grid-cols-3 lg:grid-cols-4 gap-y-10'>
      <ProductCard filteredProducts={filteredProducts} />
    </ul>
  )
}

export default ProductList;