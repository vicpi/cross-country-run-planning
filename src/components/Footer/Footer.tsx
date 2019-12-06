import React from 'react';
import Button from '../Button/Button';
import './Footer.scss';

const Footer: React.FC = () => {
    const downloadGPXFile = () => {

    }
    
    return (
        <div className="footer">
            <Button onClick={downloadGPXFile}>Download your Route</Button>
        </div>
    );
}

export default Footer;