import React from 'react';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';

function Home() {
    return (
        <div className="container max-w-6xl mx-auto flex gap-10">
            <Sidebar />
            <Hero />
        </div>
    );
}

export default Home;