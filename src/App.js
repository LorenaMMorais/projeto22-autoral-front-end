import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Delivery from './components/Delivery';
import Interno from './components/Interno';
/*import { ToastContainer } from 'react-toastify';

import useToken from './hooks/useToken';
import { UserProvider } from './contexts/UserContext';
*/

export default function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/delivery' element={<Delivery />}/>
        <Route path='/interno' element={<Interno />}/>
      </Routes>
    </BrowserRouter>
  );
}
