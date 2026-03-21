import React from 'react';

function Stages() {
  const stages = [
    'Circle of Love',
    'Black Orchid',
    'Sheraton Grand',
    'Great Madras Bake Sale'
  ];

  return (
    <section id="stages">
      <div className="section-label reveal">Stages</div>
      <div className="stages-list">
        {stages.map((stage, index) => (
          <div key={index} className={`stage-item reveal d${index + 1}`}>
            <span className="stage-name">{stage}</span>
            <span className="stage-dot"></span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stages;
