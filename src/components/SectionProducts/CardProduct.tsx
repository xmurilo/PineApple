import { useState } from 'react';
import { Product } from '../../assets/interfaceProducts';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

interface CardProductProps {
  data: Product[];
}

const CardProduct: React.FC<CardProductProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const onOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  }
  const onCloseModal = () => {
    setSelectedProduct(null);
    setOpen(false);
  }


  return (
     
    <section className='flex flex-col justify-center '>
      {data.map((item, index) => (
        <>
        <div
          key={item.id}
          className={`w-[300px] md:w-[678px] lg:w-[890px] xl:w-[1139px] 
          min-h-[460px] 
          p-6  border border-[#B0B0B0] rounded-[50px]
           flex flex-col md:flex-row items-center my-[65px]
            ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
          <div className='w-1/2  flex justify-center'>
            <div className='flex flex-col items-center justify-center'>
              <img src={item.photo} alt={item.description} />
              <div className='flex mt-5 gap-x-3'>
                {item.colors.map((color, index) => (
                  <div key={index}>
                    <div
                      className='w-9 h-9 rounded-full'
                      style={{ backgroundColor: color }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='md:w-1/2 flex flex-col justify-center mt-4'>
            <div className='text_product max-w-[424px] px-8'>
              <h2 className='font-SourceSansPro text-[24px] md:text-[40px] text-center font-semibold'>
                {item.name}
              </h2>

              <p className='font-SourceSansPro text-[20px] text-center font-light my-4'>
                {item.description}
              </p>

              <p className='font-SourceSansPro text-[17px] font-normal text-center '>
                A partir de R${item.price}
              </p>

              <ul className='flex items-center justify-center gap-x-12 mt-14'>
                <button className='default_button_background' onClick={() => onOpenModal(item)}>Saiba mais</button>
                <li>
                  <button className='text-[#006EDB]'>Comprar &gt;</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </>
      ))}
        <Modal open={open} onClose={onCloseModal} center>
          <div className='p-5 '>
            <img src={selectedProduct?.photo} alt={selectedProduct?.name} className='m-auto' />
            <div className='flex items-center justify-center my-5'>
              {selectedProduct?.colors.map((color, index) => (
                <div key={index}>
                  <div
                    className='w-11 h-11 rounded-full'
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              ))}
            </div>
            <h2 className='font-SourceSansPro text-[24px] md:text-[40px] text-center font-semibold'>
              {selectedProduct?.name}
            </h2>
            <p className='text-center '>{selectedProduct?.description}</p>
            <p className='text-center'>{selectedProduct?.details}</p>
            <h2 className='font-SourceSansPro text-[24px] md:text-[40px] text-center font-semibold'>{selectedProduct?.price}</h2>
          </div>
        </Modal>
    </section>
    
  );
};

export default CardProduct;
