import StatusBox from '../StatusBox/StatusBox';
import Table from '../Table/Table';
import styles from './Detector.module.css';

export default function BtmInfo() {
  const data = [
    { id: 1, position: 11.1, size: 30 },
    { id: 2, position: 22.22, size: 50 },
    { id: 3, position: 33.3, size: 40 },
  ];
  const header = ['NO.', 'Position', 'Size'];
  return (
    <div className={styles.childMain}>
      <div className={styles.alignRow}>
        <StatusBox text='Connect' width={'50%'} />
        <StatusBox text='Contact' width={'50%'} />
      </div>
      <Table header={header} data={data} />
      <div className={styles.alignRow}>
        <StatusBox text='OK' width={'100%'} height={70} />
      </div>
    </div>
  );
}
