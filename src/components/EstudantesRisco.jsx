import React from 'react';

const EstudantesRisco = ({ students }) => {
  return (
    <div className="risk-students-panel">
      <div className="risk-header">
        <span>⚠️</span>
        <h3>Alunos em risco</h3>
      </div>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id} className="student-item">
            <img src={student.avatar} alt={student.name} className="avatar" />
            <div className="student-info">
              <p className="student-name">{student.name}</p>
              <span className="student-grade">{student.grade}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EstudantesRisco;