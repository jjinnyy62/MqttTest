import './App.css';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './view/CharacterCounter';
import MainView from './view/MainView/MainView';
import { useEffect } from 'react';
import mqtt from 'mqtt';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import DataPage from './view/DataPage/DataPage';
import NavigationBar from './view/NavigationBar/NavigationBar';
import { MQTTProvider } from './controller/Mqtt/MqttProvider';

export default function App() {
  return (
    <MQTTProvider>
      <RecoilRoot>
        <MainView />
        {/* <Router><MainView /></Router> */}
        {/* <NavigationBar /> */}
        {/* <CharacterCounter /> */}
      </RecoilRoot>
    </MQTTProvider>
  );
}
