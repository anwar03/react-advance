import React from 'react';
import Product from './product';

import { useFetch } from './useFetch';

const url = 'https://course-api.netlify.app/api/react-prop-types-example';

const Index = () => {
    const { products } = useFetch(url);
    console.log(products);
    return (
        <div>
            <h2>Product</h2>
            <section className='products'>
                {products.map((product) => {
                    return <Product key={product.id} {...product} />;
                })}
            </section>
        </div>
    );
};

export default Index;