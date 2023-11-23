import { data } from '../../assets/Products.js';

const CardProduct2 = () => {
  return (
    <>
      <div key={item.id} className='h-20 bg-orange-200 border-black border-opacity-70'>
        {data.map(item =>
          item.colors.map((color, index) => (
            <div key={index} className='inline-block mr-2'>
              <div className='w-12 h-12 rounded-full' style={{ backgroundColor: color }} ></div>
            </div>
          )),
        )}
      </div>

      <div key={item.id} className='h-20 bg-orange-200 border-black border-opacity-70'>
        {data.map(item =>
          item.colors.map((color, index) => (
            <div key={index} className='inline-block mr-2'>
              <div className='w-12 h-12 rounded-full' style={{ backgroundColor: color }}></div>
            </div>
          )),
        )}
      </div>
    </>
  );
};

export default CardProduct2;