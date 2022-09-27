import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScanPage from "./components/ScanPage";
import ProfilePage from "./components/ProfilePage";
import AllCameras from "./components/AllCameras";
import {Provider} from "react-redux";
import {store} from "./store";
import ScanPage2 from "./components/ScanPage2";
// import {BrowserRouter} from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path={''} element={<App/>}/>
                <Route path={'scan'} element={<ScanPage/>}/>
                <Route path={'profile'} element={<ProfilePage/>}/>
            </Routes>
        </Provider>
    </BrowserRouter>
);

