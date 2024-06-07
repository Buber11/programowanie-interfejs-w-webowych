import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import HeroSection from '../components/HeroSection/HeroSection';
import BrowseSection from '../components/BrowseSection/BrowseSection';


import '../Main.css';

function Main() {
    return (
        <div>
            <Navigation />
            <HeroSection />
            <BrowseSection />
        </div>
    );
}

export default Main;

