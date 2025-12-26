import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalTicker from './GlobalTicker';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
            <GlobalTicker />
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
