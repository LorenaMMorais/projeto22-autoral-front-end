import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';

//import 'react-toastify/dist/ReactToastify.css';

import './assets/styles/reset.css';
import './assets/styles/style.css';

createRoot(document.querySelector('.root')).render(<App />);
