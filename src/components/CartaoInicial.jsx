import React from 'react';

const CartaoInicial = ({ title, value, color, icon }) => {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-header">
        <span className="stat-icon">{icon}</span>
        <span className="stat-title">{title}</span>
      </div>
      <h3 className="stat-value">{value}</h3>
    </div>
  );
};

export default CartaoInicial;