import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [productsFiltered, setProductsFiltered] = useState(products)
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable products = { products[0] }
        />            
                        
                
        
      </div>    
  )
}

