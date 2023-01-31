import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Nav from './components/nav/Nav';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Setting from './components/settings/Settings';

import { BrowserRouter, Route, Routes } from 'react-router-dom';




const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App