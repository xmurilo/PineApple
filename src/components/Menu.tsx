import React from 'react';

const Menu: React.FC = () => {
  return (
    <nav className='nav'>
      <input type='checkbox' id='menu_dropdown' />
      <label htmlFor='menu_dropdown'>
        <menu className='menu'>
          <i className='dropdown'></i>
        </menu>
      </label>
      <ul className='list_menu'>
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
        <button className='button_logout'>Sair</button>
      </ul>
    </nav>
  );
};

export default Menu;
