import React from 'react';

const ObjectRender = () => {
    const  products={
        pid:1001,
        pname:"iphone",
        price:300000
    }
    return (
        <div>
           {
            Object.keys(products).map((key,index)=>
            <li key={index}>{products[key]}</li>)
           } 
        </div>
    );
};

export default ObjectRender;