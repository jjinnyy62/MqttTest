import DataPage from '../DataPage/DataPage';
import Detector from '../Detector/Detector';
import NavigationBar from '../NavigationBar/NavigationBar';
import StatusBox from '../StatusBox/StatusBox';
import styles from './MainView.module.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
export default function MainView() {
  return (
    <div className={styles.main}>
      <div className={styles.appbar}>로고 시계 ...</div>
      <div className={styles.half}>
        <div className={styles.container}>
          <Detector />
        </div>
        <div className={styles.container}>
          <Detector />
        </div>
      </div>
      <div className={styles.navigation}>네비게이션바</div>
    </div>
  );
}
