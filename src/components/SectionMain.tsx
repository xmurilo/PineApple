import imgMain from '../../public/imgMain.svg';


const SectionMain: React.FC = () => {
  return (
    <>
      <h1 className='font-SourceSansPro font-semibold text-6xl text-center mt-12'>PinBook Pro</h1>
      <p className='font-SourceSansPro text-center'>Arrepia. Até na belelza </p>

      <div className='flex justify-center mt-2 mb-10'>
        <a href='' className='mr-14 font-SplineSans   text-SecondColor'>
          Saiba mais &gt;
        </a>
        <a href='' className=' font-SplineSans text-SecondColor'>
          Comprar &gt;
        </a>
      </div>
      <div className='flex justify-center'>
        <img src={imgMain} alt='' />
      </div>
    </>
  );
};

export default SectionMain;
