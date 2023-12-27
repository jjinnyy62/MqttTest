import StatusBox from '../StatusBox/StatusBox';
import styles from './Detector.module.css';

export default function TopInfo() {
  return (
    <div className={styles.childMain}>
      <div className={styles.alignRow}>
        <StatusBox
          text='Body_Top W Shape'
          width={'100%'}
          backgroundColor='#4f4f4f'
        />
      </div>
      <div className={styles.alignRow}>
        <StatusBox text='Cell ID' width={'50%'} backgroundColor='#4f4f4f' />
        <StatusBox text='Recv Time' width={'50%'} backgroundColor='#4f4f4f' />
      </div>
    </div>
  );
}
