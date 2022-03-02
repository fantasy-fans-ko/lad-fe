import React from 'react';
import Routers from './routers/Routers';
import { BrowserRouter } from 'react-router-dom';
import ToastContainer from './components/ToastContainer';

function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routers />
     </BrowserRouter>
  );
}

export default App;
