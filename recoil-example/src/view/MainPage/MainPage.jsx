import Detector from '../Detector/Detector';
import styles from './MainPage.module.css';

export default function MainPage() {
  return (
    <div className={styles.half}>
      <div className={styles.container}>
        <Detector />
      </div>
      <div className={styles.container}>
        <Detector />
      </div>
    </div>
  );
}
