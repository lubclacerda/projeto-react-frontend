import React from 'react';

const CameraTempoReal = ({ cameras }) => {
  return (
    <div className="section-card">
      <div className="section-title">
        <span>📹</span>
        <h3>Acompanhamento em tempo real</h3>
      </div>
      <div className="cameras-grid">
        {cameras.map((cam) => (
          <div key={cam.id} className="camera-item">
            <div className="image-wrapper">
              <span className="cam-badge">📹</span>
              <img src={cam.image} alt={cam.name} />
            </div>
            <p className="camera-label">{cam.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CameraTempoReal;