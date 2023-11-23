import CardProduct1 from './CardProduct1';
import CardProduct2 from './CardProduct2';

const SectionProducts = () => {
  return (
    <div className='bg-colorBackground w-[90%] m-auto mt-20 rounded-[40px] p-4'>
      <CardProduct1 />
      <CardProduct2 />
    </div>
  );
};

export default SectionProducts;
