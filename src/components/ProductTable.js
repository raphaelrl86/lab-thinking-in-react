export default function ProductTable(){

import jsonData from './../data.json';
import { useState } from 'react';

function ProductTable (props) {
   const { products } = props
    
    return(
       <table>
            <thead>
                <tr>
                    <td></td>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
                <tr>
                    <td>{products.category}</td>
                    <td>{products.name}</td>
                    <td>{products.price}</td>
                </tr>   
            </thead>
        </table>    
        </div>
    )
}

}
