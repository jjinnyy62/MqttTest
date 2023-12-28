import React, { createContext, useContext, useEffect, useState } from 'react';
import mqtt from 'mqtt';

const MQTTContext = createContext({ client: null, isConnected: false });

export const useMQTT = () => useContext(MQTTContext);

export const MQTTProvider = ({ children }) => {
  const [client, setClient] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const mqttClient = mqtt.connect('ws://127.0.0.1:9001', {
      reconnectPeriod: 1000,
    });

    mqttClient.on('connect', () => {
      setIsConnected(true);
      mqttClient.subscribe('wa', (err) => {
        if (err) {
          console.log('Subscription error:', err);
        } else {
          console.log(`Subscribed to wa`);
        }
      });
    });

    mqttClient.on('offline', () => {
      console.log('MQTT 연결 끊김!!');
    });

    mqttClient.on('error', (error) => {
      console.error('MQTT Connection Error:', error);
    });

    setClient(mqttClient);
  }, []);

  return (
    <MQTTContext.Provider value={{ client, isConnected }}>
      {children}
    </MQTTContext.Provider>
  );
};
