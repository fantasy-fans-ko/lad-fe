import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import DraftRoom from './components/DraftRoom';
import ToastContainer from './components/ToastContainer';
import Routers from './routers/Routers';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routers />
    </BrowserRouter>
    // <DraftRoom />
  );
}

export default App;
