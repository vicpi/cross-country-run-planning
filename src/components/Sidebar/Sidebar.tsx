import React from 'react';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';
import './Sidebar.scss';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar-container">
            <Header />
            <List />
            <Footer />
        </div>
    );
}
    
export default Sidebar;
