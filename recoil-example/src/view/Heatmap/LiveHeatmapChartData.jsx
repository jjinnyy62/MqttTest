import React, { useState, useEffect, useCallback } from 'react';
import LiveHeatmapChart from './LiveHeatmapChart';
import { useMQTT } from '../../controller/Mqtt/MqttProvider';
import styles from './LiveHeatmapChart.module.css';

export default function LiveHeatmapChartData() {
  const [data, setData] = useState({ tempArray: [], setsArray: [] });
  const maxRowLen = 50;
  const maxColLen = 60;
  const { client, isConnected } = useMQTT();
  useEffect(() => {
    if (client && isConnected) {
      const handleMessages = (topic, message) => {
        setData((currentData) => {
          // 메시지 파싱 및 데이터 추출
          const parsedMessage = JSON.parse(message.toString());
          const newData = parsedMessage.data[0][0];

          let tempArray = [...currentData.tempArray, newData];
          let setsArray = [...currentData.setsArray];

          if (tempArray.length === maxRowLen) {
            setsArray = [tempArray, ...setsArray];
            tempArray = [];

            if (setsArray.length > maxColLen) {
              setsArray = setsArray.slice(0, maxColLen);
            }
          }

          return { tempArray, setsArray };
        });
      };

      client.on('message', handleMessages);
    }
  }, [client, isConnected]);

  return (
    <div className={styles.main}>
      <LiveHeatmapChart rawData={data.setsArray} />
    </div>
  );
}
