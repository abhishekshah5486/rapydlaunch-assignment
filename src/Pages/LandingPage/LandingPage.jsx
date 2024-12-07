import React from 'react';
import './LandingPage.scss';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection';
import ProgramsSection from '../../components/ProgramsSection/ProgramsSection';

function LandingPage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <ProgramsSection />
        </div>
    )
}

export default LandingPage;
