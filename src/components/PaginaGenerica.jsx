import React from 'react';

const PaginaGenerica = ({ titulo, descricao, icone }) => {
  return (
    <div className="pagina-container">
      <div className="pagina-header">
        <h2>{icone} {titulo}</h2>
        <p>{descricao}</p>
      </div>

      <div className="card-generico">
        <p>Esta é a página de <strong>{titulo}</strong> do sistema Escola Segura.</p>
        <div className="conteudo-simulado">
          <p>📊 Dados e relatórios consolidados do painel administrativo.</p>
          <ul>
            <li>Relatórios de presença exportáveis em PDF/Excel</li>
            <li>Histórico de alertas emitidos aos responsáveis</li>
            <li>Configurações de notificações e tolerância de faltas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaginaGenerica;