import LiveHeatmapChart from '../Heatmap/Heatmap';
import StatusBox from '../StatusBox/StatusBox';
import Table from '../Table/Table';
import BtmInfo from './BtmInfo';
import styles from './Detector.module.css';
import TopInfo from './TopInfo';

export default function Detector() {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <TopInfo />
        <div className={styles.divider}></div>
        <BtmInfo />
      </div>
      <div className={styles.container} style={{ color: 'white' }}>
        {/* <LiveHeatmapChart/> */}
        히트맵 넣기
      </div>
    </div>
  );
}
