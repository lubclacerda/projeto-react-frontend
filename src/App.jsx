import React, { useState } from 'react';
import Cabecalho from './components/Cabecalho';
import MenuLateral from './components/MenuLateral';
import CameraTempoReal from './components/CameraTempoReal';
import EvolucaoFrequencia from './components/EvolucaoFrequencia';
import EstudantesRisco from './components/EstudantesRisco';
import PaginaAlunos from './components/PaginaAlunos';
import PaginaGenerica from './components/PaginaGenerica';
import './App.css';

function App() {
  const [activeMenu, setActiveMenu] = useState('Início');

  const statsData = [
    { title: 'Total de alunos', value: 482, color: 'blue', icon: '👤' },
    { title: 'Presenças', value: 452, color: 'green', icon: '✔️' },
    { title: 'Ausências', value: 30, color: 'red', icon: '❌' },
    { title: 'Alunos em risco', value: 10, color: 'yellow', icon: '⚠️' }
  ];

  const cameras = [
    { id: '100', name: 'Sala 100', image: 'https://www.vitoria.es.gov.br/recursos/imagens/banco/2021/05/31/92355/ampliada@2x.jpg' },
    { id: '101', name: 'Sala 101', image: 'https://imagens.ebc.com.br/40ElXFqWeWBSY7IEAGp3wvsr0Jg=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2020-03-13t145129z_1265676104_rc22jf9wi6m7_rtrmadp_3_health-coronavirus-brazil.jpg?itok=EMef90XB' },
    { id: '102', name: 'Sala 102', image: 'https://www.unisinos.br/noticias/wp-content/uploads/2017/08/primeiro-dia-poa-69-scaled.jpg' }
  ];

  const riskStudents = [
    { id: 1, name: 'Marina Silva', grade: '8º ano', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Joanna Pires', grade: '9º ano', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Pedro Machado', grade: '9º ano', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 4, name: 'João Pedro', grade: '5º ano', avatar: 'https://i.pravatar.cc/150?img=13' },
    { id: 5, name: 'Mara Luiza', grade: '7º ano', avatar: 'https://i.pravatar.cc/150?img=20' }
  ];

  const renderConteudo = () => {
    switch (activeMenu) {
      case 'Alunos':
        return <PaginaAlunos />;
      case 'Monitoramento':
        return <PaginaGenerica titulo="Monitoramento em Tempo Real" descricao="Acompanhamento ao vivo das salas e alertas de presença." icone="📹" />;
      case 'Relatórios':
        return <PaginaGenerica titulo="Relatórios Gerais" descricao="Geração e análise de dados sobre evasão e listas de presença." icone="📋" />;
      case 'Configurações':
        return <PaginaGenerica titulo="Configurações do Sistema" descricao="Ajustes de parâmetros, contatos de emergência e regras." icone="⚙️" />;
      case 'Início':
      default:
        return (
          <div className="dashboard-content">
            <div className="left-content">
              <section className="dashboard-header">
                <h2>Monitoramento de evasão escolar</h2>
                <p>Acompanhe a frequência dos alunos em tempo real e receba alertas para prevenir a evasão escolar.</p>
              </section>

              {/* Cards de Estatísticas integrados diretamente */}
              <div className="stats-grid">
                {statsData.map((stat, index) => (
                  <div key={index} className={`stat-card ${stat.color}`}>
                    <div className="stat-header">
                      <span className="stat-icon">{stat.icon}</span>
                      <span className="stat-title">{stat.title}</span>
                    </div>
                    <h3 className="stat-value">{stat.value}</h3>
                  </div>
                ))}
              </div>

              <CameraTempoReal cameras={cameras} />
              <EvolucaoFrequencia />
            </div>

            <aside className="right-content">
              <EstudantesRisco students={riskStudents} />
            </aside>
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      <Cabecalho />
      <div className="main-layout">
        <MenuLateral activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <main className="main-content-area">
          {renderConteudo()}
        </main>
      </div>
    </div>
  );
}

export default App;