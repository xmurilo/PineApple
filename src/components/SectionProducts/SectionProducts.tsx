import React from 'react';
import { data } from '../../assets/Products';
import CardProduct from './CardProduct';
import { Product } from '../../assets/interfaceProducts';

interface SectionMProps {
  handleAddProduct: (product: Product) => void;
  products?: Product[];
}

const SectionProducts: React.FC<SectionMProps> = ({handleAddProduct}) => {
  return (
    <section className='bg-colorBackground w-[90%] m-auto mt-20 rounded-[40px] p-4 flex flex-col items-center '>
      <CardProduct handleAddProduct={handleAddProduct} data={data} />
    </section>
  );
};

export default SectionProducts;
