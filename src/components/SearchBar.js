import { useState } from 'react';
import jsonData from './../data.json';

export default function SearchBar () {
    const { seachProduct } = props
    return(
        <>
        <h1>Search</h1>
           <input type="text" />
           <p><input type="checkbox"></input><span>Only show products in stock</span></p>
    )
}


