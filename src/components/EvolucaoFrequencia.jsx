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
          src="https://img.magnific.com/vetores-premium/elemento-infografico-de-grafico-de-linha-08-design-infografico-vetorial-editavel_683813-394.jpg?semt=ais_hybrid&w=740&q=80" 
          alt="Gráfico de Evolução da Frequência" 
        />
      </div>
    </div>
  );
};

export default EvolucaoFrequencia;