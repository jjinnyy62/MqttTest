import { useState } from 'react';
import styles from './LiveHeatmapChart.module.css';

export default function LiveHeatmapChart({ rawData }) {
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, value: 0 });

  const showTooltip = (e, value) => {
    const tooltipX = e.clientX;
    const tooltipY = e.clientY;
    setTooltip({ show: true, x: tooltipX, y: tooltipY, value });
  };

  const hideTooltip = () => {
    setTooltip({ ...tooltip, show: false });
  };
  const generateBackgroundColor = (value) => {
    return `hsl(196deg 36% ${value ? 100 - value * 1.3 : 100}%)`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.heatmap}>
        {rawData.map((rowData, xIndex) => (
          <div key={`col-${xIndex}`} className={styles.col}>
            {rowData.map((value, yIndex) => (
              <div
                key={`cell-${xIndex}-${yIndex}`}
                className={styles.cell}
                style={{ backgroundColor: generateBackgroundColor(value) }}
                onMouseEnter={(e) => showTooltip(e, value)}
                onMouseLeave={hideTooltip}
              ></div>
            ))}
          </div>
        ))}
      </div>
      {tooltip.show && (
        <div
          className={styles.tooltip}
          style={{
            display: 'block',
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: 'translate(-220%, -110%)',
          }}
        >
          {tooltip.value.toFixed(3)}
        </div>
      )}
    </div>
  );
}
