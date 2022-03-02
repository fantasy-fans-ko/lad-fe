import React from 'react';
import Routers from './routers/Routers';
import { BrowserRouter } from 'react-router-dom';
import ToastContainer from './components/ToastContainer';
import DraftRoom from './components/DraftRoom';

function App() {

  return (
    // <BrowserRouter>
    //   <ToastContainer />
    //   <Routers />
    //  </BrowserRouter>
    <>
      <DraftRoom />
    </>
  );
}

export default App;
