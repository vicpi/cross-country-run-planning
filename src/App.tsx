import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';

const App: React.FC = () => {
    return (
        <div className="app">
            <Sidebar />
            <Map />
        </div>
    );
}

export default App;
