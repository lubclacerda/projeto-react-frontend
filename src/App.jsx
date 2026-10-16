import React, { useState } from 'react';
import Cabecalho from './components/Cabecalho';
import CameraTempoReal from './components/CameraTempoReal';
import CartaoInicial from './components/CartaoInicial';
import EstudantesRisco from './components/EstudantesRisco';
import EvolucaoFrequencia from './components/EvolucaoFrequencia';
import MenuLateral from './components/MenuLateral';
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
    { id: '100', name: 'Sala 100', image: 'https://picsum.photos/300/180?random=1' },
    { id: '101', name: 'Sala 101', image: 'https://picsum.photos/300/180?random=2' },
    { id: '102', name: 'Sala 102', image: 'https://picsum.photos/300/180?random=3' }
  ];

  const riskStudents = [
    { id: 1, name: 'Marina Silva', grade: '8º ano', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Joanna Pires', grade: '9º ano', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Pedro Machado', grade: '9º ano', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 4, name: 'João Pedro', grade: '5º ano', avatar: 'https://i.pravatar.cc/150?img=13' },
    { id: 5, name: 'Mara Luiza', grade: '7º ano', avatar: 'https://i.pravatar.cc/150?img=20' }
  ];

  return (
    <div className="app-container">
      <Cabecalho />
      <div className="main-layout">
        <MenuLateral activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        
        <main className="dashboard-content">
          <div className="left-content">
            <section className="dashboard-header">
              <h2>Monitoramento de evasão escolar</h2>
              <p>Acompanhe a frequência dos alunos em tempo real e receba alertas para prevenir a evasão escolar.</p>
            </section>

            <div className="stats-grid">
              {statsData.map((stat, index) => (
                <CartaoInicial 
                  key={index} 
                  title={stat.title} 
                  value={stat.value} 
                  color={stat.color} 
                  icon={stat.icon} 
                />
              ))}
            </div>
            
            <CameraTempoReal cameras={cameras} />

            <EvolucaoFrequencia />
          </div>
          
          <aside className="right-content">
            <EstudantesRisco students={riskStudents} />
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;