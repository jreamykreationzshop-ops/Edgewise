import React from 'react';
import { createRoot } from 'react-dom/client';
import { GardenProvider } from './lib/garden-store';
import { App } from './App';
import './styles.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><GardenProvider><App /></GardenProvider></React.StrictMode>);
