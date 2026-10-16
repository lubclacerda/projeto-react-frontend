import React, { useState } from 'react';

const listaAlunosIniciais = [
  { id: 1, nome: "Marina Silva", ano: "8º Ano", turmas: "8A", frequencia: "72%", faltas: 14, status: "Em Risco", responsavel: "Carlos Silva" },
  { id: 2, nome: "Joanna Pires", ano: "9º Ano", turmas: "9B", frequencia: "68%", faltas: 16, status: "Em Risco", responsavel: "Ana Pires" },
  { id: 3, nome: "Pedro Machado", ano: "9º Ano", turmas: "9A", frequencia: "75%", faltas: 12, status: "Em Risco", responsavel: "Roberto Machado" },
  { id: 4, nome: "João Pedro", ano: "5º Ano", turmas: "5C", frequencia: "80%", faltas: 10, status: "Atenção", responsavel: "Patricia Pedro" },
  { id: 5, nome: "Mara Luiza", ano: "7º Ano", turmas: "7A", frequencia: "78%", faltas: 11, status: "Atenção", responsavel: "Fernando Luiza" },
  { id: 6, nome: "Lucas Mendes", ano: "6º Ano", turmas: "6B", frequencia: "95%", faltas: 2, status: "Regular", responsavel: "Sônia Mendes" },
  { id: 7, nome: "Beatriz Costa", ano: "8º Ano", turmas: "8B", frequencia: "98%", faltas: 1, status: "Regular", responsavel: "Márcio Costa" },
  { id: 8, nome: "Gabriel Oliveira", ano: "7º Ano", turmas: "7B", frequencia: "91%", faltas: 4, status: "Regular", responsavel: "Juliana Oliveira" },
  { id: 9, nome: "Camila Rocha", ano: "6º Ano", turmas: "6A", frequencia: "88%", faltas: 6, status: "Regular", responsavel: "Eduardo Rocha" },
  { id: 10, nome: "Rafael Souza", ano: "8º Ano", turmas: "8A", frequencia: "65%", faltas: 18, status: "Em Risco", responsavel: "Cláudia Souza" },
  { id: 11, nome: "Sofia Ferreira", ano: "5º Ano", turmas: "5A", frequencia: "96%", faltas: 2, status: "Regular", responsavel: "Renato Ferreira" },
  { id: 12, nome: "Enzo Gabriel", ano: "7º Ano", turmas: "7C", frequencia: "82%", faltas: 9, status: "Atenção", responsavel: "Vanessa Gabriel" },
  { id: 13, nome: "Alice Alves", ano: "9º Ano", turmas: "9B", frequencia: "99%", faltas: 0, status: "Regular", responsavel: "Paulo Alves" },
  { id: 14, nome: "Guilherme Santos", ano: "6º Ano", turmas: "6C", frequencia: "93%", faltas: 3, status: "Regular", responsavel: "Luciana Santos" },
  { id: 15, nome: "Laura Lima", ano: "8º Ano", turmas: "8B", frequencia: "70%", faltas: 15, status: "Em Risco", responsavel: "Rodrigo Lima" },
  { id: 16, nome: "Matheus Ribeiro", ano: "7º Ano", turmas: "7A", frequencia: "94%", faltas: 3, status: "Regular", responsavel: "Tânia Ribeiro" },
  { id: 17, nome: "Isabela Martins", ano: "5º Ano", turmas: "5B", frequencia: "97%", faltas: 1, status: "Regular", responsavel: "Marcos Martins" },
  { id: 18, nome: "Thiago Barbosa", ano: "9º Ano", turmas: "9A", frequencia: "74%", faltas: 13, status: "Em Risco", responsavel: "Sílvia Barbosa" },
  { id: 19, nome: "Giovanna Ramos", ano: "6º Ano", turmas: "6B", frequencia: "89%", faltas: 5, status: "Regular", responsavel: "Aline Ramos" },
  { id: 20, nome: "Felipe Araujo", ano: "8º Ano", turmas: "8C", frequencia: "85%", faltas: 7, status: "Regular", responsavel: "Gustavo Araujo" },
  { id: 21, nome: "Manuela Cardoso", ano: "7º Ano", turmas: "7B", frequencia: "92%", faltas: 4, status: "Regular", responsavel: "Diego Cardoso" },
  { id: 22, nome: "Samuel Teixeira", ano: "5º Ano", turmas: "5C", frequencia: "69%", faltas: 15, status: "Em Risco", responsavel: "Carla Teixeira" },
  { id: 23, nome: "Helena Carvalho", ano: "9º Ano", turmas: "9C", frequencia: "96%", faltas: 2, status: "Regular", responsavel: "Letícia Carvalho" },
  { id: 24, nome: "Vitor Hugo", ano: "6º Ano", turmas: "6A", frequencia: "81%", faltas: 9, status: "Atenção", responsavel: "Marcelo Hugo" },
  { id: 25, nome: "Lorena Dias", ano: "8º Ano", turmas: "8A", frequencia: "90%", faltas: 5, status: "Regular", responsavel: "Patrícia Dias" }
];

export default function PaginaAlunos() {
  const [busca, setBusca] = useState('');
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  const alunosFiltrados = listaAlunosIniciais.filter(aluno =>
    aluno.nome.toLowerCase().includes(busca.toLowerCase()) ||
    aluno.ano.toLowerCase().includes(busca.toLowerCase())
  );

  const handleVerRelatorio = (aluno) => {
    if (alunoSelecionado?.id === aluno.id) {
      setAlunoSelecionado(null); // Fecha se clicar no mesmo
    } else {
      setAlunoSelecionado(aluno); // Abre o relatório do aluno clicado
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#0b2545', marginBottom: '6px' }}>
          Listagem Geral de Alunos ({listaAlunosIniciais.length})
        </h2>
        <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
          Gerenciamento de frequência e relatório individual de alunos cadastrados.
        </p>
      </div>

      {/* Barra de Busca */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="🔍 Pesquisar aluno por nome ou ano..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '420px',
            padding: '10px 16px',
            borderRadius: '6px',
            border: '1px solid #d1d5db',
            fontSize: '0.95rem',
            outline: 'none'
          }}
        />
      </div>

      {/* Tabela de Alunos */}
      <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
              <th style={{ padding: '12px 16px' }}>ID</th>
              <th style={{ padding: '12px 16px' }}>Nome Completo</th>
              <th style={{ padding: '12px 16px' }}>Série / Turma</th>
              <th style={{ padding: '12px 16px' }}>Frequência</th>
              <th style={{ padding: '12px 16px' }}>Faltas</th>
              <th style={{ padding: '12px 16px' }}>Status</th>
              <th style={{ padding: '12px 16px' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {alunosFiltrados.map((aluno) => (
              <tr key={aluno.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '12px 16px', color: '#6b7280' }}>#{aluno.id}</td>
                <td style={{ padding: '12px 16px', fontWeight: 'bold' }}>{aluno.nome}</td>
                <td style={{ padding: '12px 16px', color: '#4b5563' }}>{aluno.ano} ({aluno.turmas})</td>
                <td style={{ padding: '12px 16px' }}>{aluno.frequencia}</td>
                <td style={{ padding: '12px 16px' }}>{aluno.faltas} dias</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    backgroundColor: aluno.status === 'Em Risco' ? '#fee2e2' : aluno.status === 'Atenção' ? '#fef9c3' : '#dcfce7',
                    color: aluno.status === 'Em Risco' ? '#991b1b' : aluno.status === 'Atenção' ? '#854d0e' : '#166534'
                  }}>
                    {aluno.status}
                  </span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <button
                    onClick={() => handleVerRelatorio(aluno)}
                    style={{
                      backgroundColor: alunoSelecionado?.id === aluno.id ? '#4b5563' : '#0066ff',
                      color: 'white',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.8rem'
                    }}
                  >
                    {alunoSelecionado?.id === aluno.id ? '✖️ Fechar' : '📄 Ver Relatório'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card de Relatório do Aluno Selecionado */}
      {alunoSelecionado && (
        <div style={{
          marginTop: '24px',
          background: '#ffffff',
          border: '2px solid #0066ff',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 style={{ margin: 0, color: '#0b2545' }}>
              📊 Relatório Individual: {alunoSelecionado.nome}
            </h3>
            <button
              onClick={() => setAlunoSelecionado(null)}
              style={{
                background: '#ef4444',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Fechar ✖
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', fontSize: '0.9rem', color: '#374151' }}>
            <p><strong>Série/Turma:</strong> {alunoSelecionado.ano} - {alunoSelecionado.turmas}</p>
            <p><strong>Responsável:</strong> {alunoSelecionado.responsavel}</p>
            <p><strong>Frequência:</strong> {alunoSelecionado.frequencia}</p>
            <p><strong>Total de Faltas:</strong> {alunoSelecionado.faltas} faltas acumuladas</p>
          </div>

          <div style={{
            marginTop: '14px',
            padding: '12px',
            borderRadius: '6px',
            backgroundColor: '#f9fafb',
            borderLeft: '4px solid #0066ff',
            fontSize: '0.9rem',
            color: '#4b5563'
          }}>
            <strong>Observação Pedagógica:</strong> {
              alunoSelecionado.status === "Em Risco"
                ? "⚠️ Notificação enviada aos responsáveis devido ao alto número de ausências não justificadas."
                : alunoSelecionado.status === "Atenção"
                ? "⚡ Frequência sob observação semanal."
                : "✅ Aluno com bom rendimento e presença regular nas aulas."
            }
          </div>
        </div>
      )}
    </div>
  );
}