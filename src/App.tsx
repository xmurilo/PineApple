import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SectionMain from './components/SectionMain';
import SectionProducts from './components/SectionProducts/SectionProducts';
import { Product } from './assets/interfaceProducts';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0);

  const handleAddProduct = (product: Product) => {
    const products2 = [...products, product];
    setProducts(products2);
    setCount(count + 1);
    localStorage.setItem('products', JSON.stringify(products2));
  };

  const removeProduct = (index: number) => {
    const products2 = [...products];
    products2.splice(index, 1);
    setProducts(products2);
    setCount(count - 1);
    localStorage.setItem('products', JSON.stringify(products2));
  };

  useEffect(() => {
    const products = localStorage.getItem('products');
    if (products) {
      setProducts(JSON.parse(products));
      setCount(JSON.parse(products).length);
    }
  }, []);

  return (
    <>
      <Navbar count={count} products={products} removeProduct={removeProduct} />
      <SectionMain />
      <SectionProducts handleAddProduct={handleAddProduct} />
    </>
  );
}

export default App;
