import React from 'react';

const EvolucaoFrequencia = () => {
  return (
    <div className="section-card chart-section">
      <div className="chart-info">
        <div className="section-title">
          <span>📊</span>
          <h3>Evolução da frequência escolar</h3>
        </div>
        <p className="section-subtitle">
          Representação gráfica da presença escolar dos últimos meses
        </p>
      </div>
      <div className="chart-preview">
        <img 
          src="https://img.cdndsgni.com/preview/12656664-m.jpg" 
          alt="Gráfico de Evolução da Frequência" 
        />
      </div>
    </div>
  );
};

export default EvolucaoFrequencia;