import { BrowserRouter, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
/*import { ToastContainer } from 'react-toastify';

import useToken from './hooks/useToken';
import { UserProvider } from './contexts/UserContext';
*/

export default function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Home>
      </Home>
    </BrowserRouter>
  );
}
