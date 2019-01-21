import React from 'react';
import AppBar from './components/AppBar';
import AppTabs from './components/AppTabs';
import ChatButton from './components/ChatButton';
const Home = () => (
    <div className="App">
    <AppBar />
    <AppTabs />
    <ChatButton />
    </div>
);
export default Home;