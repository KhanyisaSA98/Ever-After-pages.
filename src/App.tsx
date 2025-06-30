import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import WhiteWeddingPage from './pages/WhiteWeddingPage';
import UmembesoPage from './pages/UmembesoPage';
import UmaboPage from './pages/UmaboPage';
import IdloziPage from './pages/IdloziPage';
import DonationPage from './pages/DonationPage';
import MemoryGalleryPage from './pages/MemoryGalleryPage';
import GuestbookPage from './pages/GuestbookPage';
import RSVPPage from './pages/RSVPPage';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/white-wedding" element={<WhiteWeddingPage />} />
          <Route path="/umembeso" element={<UmembesoPage />} />
          <Route path="/umabo" element={<UmaboPage />} />
          <Route path="/idlozi" element={<IdloziPage />} />
          <Route path="/donations" element={<DonationPage />} />
          <Route path="/memory-gallery" element={<MemoryGalleryPage />} />
          <Route path="/guestbook" element={<GuestbookPage />} />
          <Route path="/rsvp" element={<RSVPPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;