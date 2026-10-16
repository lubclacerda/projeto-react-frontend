import React from 'react';

const MenuLateral = ({ activeMenu, setActiveMenu }) => {
  const menuItems = ['Início', 'Monitoramento', 'Relatórios', 'Alunos', 'Configurações'];

  return (
    <nav className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            className={activeMenu === item ? 'active' : ''}
            onClick={() => setActiveMenu(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuLateral;