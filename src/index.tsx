import './assets/style.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './reactComponents/App';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<App />);
