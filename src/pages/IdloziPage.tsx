import React, { useState } from 'react';
import { Flame, Upload, Users, TreePine, Heart } from 'lucide-react';

const IdloziPage = () => {
  const [voiceMessage, setVoiceMessage] = useState<File | null>(null);

  const familyTree = [
    { name: 'Great-Grandfather Mthembu', years: '1920-1995', role: 'Clan Elder' },
    { name: 'Great-Grandmother Nomsa', years: '1925-2000', role: 'Family Matriarch' },
    { name: 'Grandfather Sipho', years: '1945-2018', role: 'Traditional Healer' },
    { name: 'Grandmother Grace', years: '1950-2020', role: 'Community Leader' },
  ];

  const handleVoiceUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVoiceMessage(file);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/4255489/pexels-photo-4255489.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow">
            Idlozi
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-serif italic opacity-90">
            Honoring Our Ancestors' Blessings
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-8">
            The Sacred Connection
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              The Idlozi ceremony is a sacred ritual that connects us with our ancestors, 
              seeking their blessings and guidance for our marriage. This deeply spiritual 
              ceremony acknowledges that our union is not just between two people, but 
              involves the entire spiritual family lineage.
            </p>
            <p className="mb-6">
              Through the lighting of candles and offering of prayers, we invite our 
              ancestors to witness and bless our union. This ritual ensures that our 
              marriage is protected and guided by those who came before us.
            </p>
            <p>
              The Idlozi ceremony reminds us that we are part of a continuous line of 
              love, wisdom, and strength that flows from our ancestors to future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Candle Lighting Ritual */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-4">
              The Candle Lighting Ritual
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
            <p className="text-lg text-gray-600">
              Each flame represents a connection to our ancestral spirits
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flame className="w-10 h-10 text-burgundy-600" />
              </div>
              <h3 className="text-xl font-semibold text-burgundy-800 mb-3">First Candle</h3>
              <p className="text-gray-600">
                Lit for the ancestors of the groom's family, seeking their protection and wisdom
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flame className="w-10 h-10 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-burgundy-800 mb-3">Second Candle</h3>
              <p className="text-gray-600">
                Lit for the ancestors of the bride's family, asking for their blessings and guidance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flame className="w-10 h-10 text-burgundy-600" />
              </div>
              <h3 className="text-xl font-semibold text-burgundy-800 mb-3">Unity Candle</h3>
              <p className="text-gray-600">
                Lit together to symbolize the joining of both family lineages in our union
              </p>
            </div>
          </div>

          {/* Ritual Image */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="h-96 bg-cover bg-center rounded-xl shadow-lg"
              style={{
                backgroundImage: 'url("https://images.pexels.com/photos/4255489/pexels-photo-4255489.jpeg?auto=compress&cs=tinysrgb&w=1200")'
              }}
            />
          </div>
        </div>
      </section>

      {/* Family Tree */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-4">
              Our Ancestral Tree
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
            <p className="text-lg text-gray-600">
              Honoring those who paved the way for our love story
            </p>
          </div>
          
          <div className="relative">
            {/* Tree Visualization */}
            <div className="text-center mb-12">
              <div className="w-32 h-32 bg-earth-200 rounded-full flex items-center justify-center mx-auto mb-8">
                <TreePine className="w-16 h-16 text-earth-600" />
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {familyTree.map((ancestor, index) => (
                  <div key={index} className="card p-6 text-center">
                    <div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-burgundy-600" />
                    </div>
                    <h3 className="font-semibold text-burgundy-800 mb-2">{ancestor.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{ancestor.years}</p>
                    <p className="text-xs text-gold-600 font-medium">{ancestor.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Message Upload */}
      <section className="py-20 bg-burgundy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">
            Share Your Ancestral Blessings
          </h2>
          <p className="text-xl opacity-90 mb-12">
            Record a voice message sharing memories of our ancestors or your blessings for our union
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
              <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-10 h-10 text-white" />
              </div>
              
              {voiceMessage ? (
                <div className="text-center">
                  <p className="text-lg font-medium mb-4">Voice message uploaded:</p>
                  <p className="text-gold-300 mb-6">{voiceMessage.name}</p>
                  <button 
                    onClick={() => setVoiceMessage(null)}
                    className="bg-burgundy-600 text-white px-6 py-2 rounded-lg hover:bg-burgundy-500 transition-colors"
                  >
                    Upload Different File
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-lg font-medium mb-6">Upload Voice Message</p>
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleVoiceUpload}
                    className="hidden"
                    id="voice-upload"
                  />
                  <label
                    htmlFor="voice-upload"
                    className="bg-gold-500 text-white px-8 py-3 rounded-lg cursor-pointer hover:bg-gold-600 transition-colors inline-block"
                  >
                    Choose Audio File
                  </label>
                  <p className="text-sm opacity-70 mt-4">
                    Supported formats: MP3, WAV, M4A (max 10MB)
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-4">
              The Spiritual Journey
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-burgundy-800 mb-4">Connection</h3>
              <p className="text-gray-600">
                Establishing a spiritual bond with our ancestors who guide and protect us
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-burgundy-800 mb-4">Blessing</h3>
              <p className="text-gray-600">
                Receiving the wisdom and blessings of generations who came before us
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-burgundy-800 mb-4">Continuity</h3>
              <p className="text-gray-600">
                Carrying forward the legacy of love and family values to future generations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IdloziPage;