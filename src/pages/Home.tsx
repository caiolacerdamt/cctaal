
import Hero from '../components/Hero';
import MarketMonitor from '../components/MarketMonitor';
import BentoPillars from '../components/BentoPillars';
import InstitutionalSplit from '../components/InstitutionalSplit';
import WhatWeDo from '../components/WhatWeDo';
import NewsHub from '../components/NewsHub';
import ConnectWithUs from '../components/ConnectWithUs';

const Home = () => {
    return (
        <div className="bg-background">
            <Hero />

            <MarketMonitor />
            <InstitutionalSplit />
            <WhatWeDo />
            <BentoPillars />
            <NewsHub />
            <ConnectWithUs />
        </div>
    );
};

export default Home;
