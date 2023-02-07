import React, { useState } from 'react';
import Layout from '../layout/Layout';
import ProductList from '../components/ProductList';
import { useSelector } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Products = () => {
    const products = useSelector(state => state.products.products);
    
    const [filterProduct, setFilterProduct] = useState("all");

    const handleFilterChange = (event) => {
        setFilterProduct(event.target.value);
    }


    const filteredProducts = products.filter(product => {
        if(filterProduct === "all") {
            return true;
        }

        if(filterProduct === "new" && product.isNew) {
            return true;
        }

        if(filterProduct === 'bikini' && product.category === 'bikini') {
            return true;
        }

        if(filterProduct === 'accessories' && product.category === 'accessories') {
            return true;
        }

        if(filterProduct === 'trending' && product.trending) return true;

        return false;
    });

  return (
    <section>
        <Layout>
            <section className='flex flex-col items-center  md:items-start md:flex-row gap-6 py-16'>
            <div className='w-full md:w-[200px] flex justify-between flex-row md:flex-col gap-6 md:sticky h-full md:top-[50px]'>
                <small>Summer Bikinis 2023</small>
            <div>
            <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                <InputLabel>
                Category
                </InputLabel>
                <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={filterProduct}
                label="Age"
                onChange={handleFilterChange}
            >
                <MenuItem value="all">
                All
                </MenuItem>
                <MenuItem value='bikini'>Bikini</MenuItem>
                <MenuItem value='accessories'>Accessories</MenuItem>
                <MenuItem value='new'>New</MenuItem>
                <MenuItem value='trending'>Trending</MenuItem>
            </Select>
            </FormControl>
                {/* <select
                className='border-2 border-black'
                value={filterProduct} 
                onChange={handleFilterChange}
                name="category" 
                id="category" >
                    <option value="all">All</option>
                    <option value="bikini">Bikinis</option>
                    <option value="accessories">Accessories</option>
                    <option value="new">New</option>
                    <option value="trending">Trending</option>
                </select> */}
            </div>
            </div>
            {/*Right for product display */}
            <div>
                <ProductList filteredProducts={filteredProducts} />
            </div>
            </section>
        </Layout>
    </section>
  )
}

export default Products;