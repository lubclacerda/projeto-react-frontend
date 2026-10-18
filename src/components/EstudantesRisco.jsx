import React from 'react';

export default function EstudantesRisco({ students }) {
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      width: '100%'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '10px' }}>
        <span style={{ fontSize: '1.2rem' }}>⚠️</span>
        <h3 style={{ fontSize: '1.1rem', color: '#0b2545', margin: 0, fontWeight: 'bold' }}>
          Alunos em risco
        </h3>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {students.map((student) => (
          <li key={student.id} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 0',
            borderBottom: '1px solid #f3f4f6'
          }}>
            <img 
              src={student.avatar} 
              alt={student.name} 
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0
              }} 
            />

            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#111827', lineHeight: '1.2' }}>
                {student.name}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '2px' }}>
                {student.grade}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}