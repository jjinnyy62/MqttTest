import React, { useState, useEffect, useCallback } from 'react';
import LiveHeatmapChart from './LiveHeatmapChart';

export default function LiveHeatmapChartData() {
  const [data, setData] = useState([]);
  const maxDataLength = 60;
  useEffect(() => {
  }, []);
  // const handleCallbackLiveRawDataWAVE = useCallback((event) => {
  //   try {
  //     const { nDataCnt, liveRawDataArray } = event.detail;
  //     setData((currentData) => {
  //       const newData = [];
  //       if (currentData.length < maxDataLength) {
  //         for (let index = 0; index < nDataCnt; index++) {
  //           newData.push(liveRawDataArray[0][index]);
  //         }
  //         return [newData, ...currentData];
  //       } else {
  //         for (let index = 0; index < nDataCnt; index++) {
  //           newData.push(liveRawDataArray[0][index]);
  //         }
  //         return [newData, ...currentData.slice(0, -1)];
  //       }
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  // useEffect(() => {
  //   // 이벤트 수신 함수
  //   window.addEventListener(
  //     'callbackLiveRawData',
  //     handleCallbackLiveRawDataWAVE
  //   );
  //   return () => {
  //     window.removeEventListener(
  //       'callbackLiveRawData',
  //       handleCallbackLiveRawDataWAVE
  //     );
  //   };
  // }, [handleCallbackLiveRawDataWAVE]);

  return (
    <>
      <LiveHeatmapChart rawData={data} />
    </>
  );
}
