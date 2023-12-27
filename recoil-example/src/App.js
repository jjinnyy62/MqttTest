import './App.css';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './view/CharacterCounter';
import MainView from './view/MainView/MainView';
import { useEffect } from 'react';
import mqtt from 'mqtt';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import DataPage from './view/DataPage/DataPage';
import NavigationBar from './view/NavigationBar/NavigationBar';

export default function App() {
  useEffect(() => {
    const client = mqtt.connect('ws://127.0.0.1:9001');
    client.on('connect', () => {
      client.subscribe('wa', (err) => {
        if (err) {
          console.log(`wa mqtt error : ${err}`);
        } else {
          console.log('wa mqtt connected');
        }
      });

      client.subscribe('wb', (err) => {
        if (err) {
          console.log(`wb mqtt error : ${err}`);
        } else {
          console.log('wb mqtt connected');
        }
      });
    });

    client.on('message', (topic, message) => {
      console.log(`topic / mqtt message : ${topic} / ${message}`);
    });
    return () => {
      client.end();
    };
  }, []);
  return (
    <RecoilRoot>
      <MainView />
      {/* <Router><MainView /></Router> */}
      {/* <NavigationBar /> */}
      {/* <CharacterCounter /> */}
    </RecoilRoot>
  );
}
