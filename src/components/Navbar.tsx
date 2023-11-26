import logo from '../../public/logo.svg';
import lupa from '../../public/lupa.svg';
import shop from '../../public/shop.svg';
import { useEffect, useState } from 'react';
import Menu from './Menu';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Product } from '../assets/interfaceProducts';
import add from '../../public/add.png';
import remove from '../../public/remove.png';

interface NavProps {
  count: number;
  products: Product[];
  removeProduct: (index: number) => void;
  handleAddProduct: (product: Product) => void;
}

const Navbar: React.FC<NavProps> = ({ count, products, removeProduct, handleAddProduct }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);

    window.addEventListener('resize', () => {
      window.innerWidth <= 1023 ? setIsMobile(true) : setIsMobile(false);
    });

    return () => {
      window.removeEventListener('resize', () => {
        window.innerWidth < 769 ? setIsMobile(true) : setIsMobile(false);
      });
    };
  }, []);

  return (
    <>
      <header className='flex items-center justify-center bg-navColor h-16 '>
        <ul className='flex md:flex-row items-center gap-10 '>
          {isMobile ? (
            <>
              <Menu />
              <li className='text-slate-200 items-center '>
                <a href=''>
                  <img src={logo} alt='' width={41} height={42} />
                </a>
              </li>

              <li className='text-slate-200'>
                <a href=''>
                  <img src={lupa} alt='' />
                </a>
              </li>

              <li className='shop text-slate-200'>
                <div className='w-4 h-4 bg-red-500 rounded-full background_count '>
                  <span className='count_car'>{count}</span>
                </div>
                <div onClick={() => setOpen(!open)}>
                  <img src={shop} alt='' />
                </div>
              </li>
            </>
          ) : (
            <>
              <li className='text-slate-200 items-center'>
                <a href=''>
                  <img src={logo} alt='' width={41} height={42} />
                </a>
              </li>
              <li className='text-slate-200'>
                <a href=''>Loja</a>
              </li>

              <li className='text-slate-200'>
                <a href=''>Mac</a>
              </li>

              <li className='text-slate-200'>
                <a href=''>iPin</a>
              </li>

              <li className='text-slate-200'>
                <a href=''>PinPhone</a>
              </li>

              <li className='text-slate-200'>
                <a href=''>Watch</a>
              </li>

              <li className='text-slate-200'>
                <a href=''>PinPods</a>
              </li>

              <li className='text-slate-200 hidden lg:flex '>
                <a href=''>Entretenimento</a>
              </li>

              <li className='text-slate-200 hidden lg:flex'>
                <a href=''>Suporte</a>
              </li>

              <li className='text-slate-200 '>
                <a href=''>
                  <img src={lupa} alt='' />
                </a>
              </li>

              <li className='text-slate-200 shop  '>
                <div className='w-4 h-4 bg-red-500 rounded-full background_count '>
                  <span className='count_car'>{count}</span>
                </div>
                <div className='cursor-pointer' onClick={() => setOpen(!open)}>
                  <img src={shop} alt='' />
                </div>
              </li>
            </>
          )}
        </ul>
      </header>
      
      {open && (
        <Modal open={open} onClose={() => setOpen(!open)} center>
          <div className='w-[400px] text-center '>
            <h1 className='text-center font-semibold'>Carrinho</h1>
          {products
            .reduce((uniqueProducts: Product[], product) => {
              const existingProduct = uniqueProducts.find(p => p.id === product.id);

              if (existingProduct) {
                existingProduct.quantity += 1; 
              } else {
                uniqueProducts.push({ ...product, quantity: 1 }); 
              }

              return uniqueProducts;
            }, [])
            .map((product, index) => (
              <section
                key={product.id}
                className='flex items-center justify-center gap-20 h-[150px] my-8 bg-[#F1F2FF] rounded-3xl'
              >
                
                <div className='img_cart rounded'>
                  
                  <img width={100} height={100} src={product.photo} alt='' />
                </div>
                <div className='text_cart'>
                  
                  <h2 className='text-[16px]'>{product.name}</h2>
                  <p className='text-[14px] text-center font-extrabold text-lg'>R$ {product.price}</p>
                  <p className='text-[14px] text-center'>Quantidade: <span className='font-bold'>{product.quantity}</span></p>
                  <div className='text-center'>
                    <button className='text-[14px] mr-2' onClick={() => handleAddProduct(product)}>
                      <img src={add} alt="" width={35} height={35}/>
                    </button>
                    <button className='text-[14px] ml-2' onClick={() => removeProduct(index)}>
                      <img src={remove} alt="" width={35} height={35}/>
                    </button>
                  </div>
                </div>
              </section>
              
            ))}
              <button className='bg-SecondColor text-white rounded-3xl py-2 px-4'>Comprar</button>
            </div>
        </Modal>
      )}
    </>
  );
};

export default Navbar;
