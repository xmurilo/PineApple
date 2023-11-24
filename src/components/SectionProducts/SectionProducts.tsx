import { data } from '../../assets/Products';
import CardProduct from './CardProduct';

const SectionProducts = () => {
  return (
    <section className='bg-colorBackground w-[90%] m-auto mt-20 rounded-[40px] p-4 flex flex-col items-center '>
      <CardProduct data={data} />
    </section>
  );
};

export default SectionProducts;
