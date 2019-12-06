import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import MapContainer from './components/MapContainer/MapContainer';

const App: React.FC = () => {
    return (
        <div className="app">
            <Sidebar />
            <MapContainer />
        </div>
    );
}

export default App;
