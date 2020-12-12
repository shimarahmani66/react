import React from 'react';
import Toplearn from './Toplearn';
import {ToastContainer} from 'react-toastify';
import {BrowserRouter} from 'react-router-dom';
const App = () => {
    return <BrowserRouter>
    <Toplearn/>
    <ToastContainer />
    </BrowserRouter>
}
export default App;