import React from 'react';
import { Gift, Music, Users, Heart } from 'lucide-react';

const UmembesoPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/8422087/pexels-photo-8422087.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow">
            Umembeso
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-serif italic opacity-90">
            The Traditional Gift Exchange Ceremony
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-8">
            A Sacred Exchange
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              The Umembeso is a beautiful Zulu tradition where families come together to exchange 
              gifts as a symbol of acceptance and unity. This ceremony represents the formal 
              introduction of the bride to the groom's family and vice versa.
            </p>
            <p className="mb-6">
              During this sacred ceremony, traditional gifts are exchanged between families, 
              including blankets, jewelry, and other meaningful items that symbolize respect, 
              love, and the welcoming of new family members.
            </p>
            <p>
              The Umembeso is not just about the gifts themselves, but about the love, respect, 
              and blessings that flow between families as they unite in celebration of our union.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-4">
              Ceremony Gallery
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
            <p className="text-lg text-gray-600">
              Beautiful moments from our traditional gift exchange
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/8422087/pexels-photo-8422087.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/8422153/pexels-photo-8422153.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/8422156/pexels-photo-8422156.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/8422160/pexels-photo-8422160.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/8422161/pexels-photo-8422161.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/8422162/pexels-photo-8422162.jpeg?auto=compress&cs=tinysrgb&w=800',
            ].map((photo, index) => (
              <div key={index} className="card group overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${photo})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Explanation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-4">
              Listen to Our Story
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
            <p className="text-lg text-gray-600">
              Hear the beautiful story of our Umembeso ceremony
            </p>
          </div>
          
          <div className="bg-burgundy-50 rounded-xl p-8 text-center">
            <div className="w-20 h-20 bg-burgundy-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Music className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-burgundy-800 mb-4">
              Traditional Ceremony Narration
            </h3>
            <p className="text-gray-600 mb-6">
              Listen to the elder's blessing and explanation of the Umembeso traditions
            </p>
            
            {/* Audio Player Placeholder */}
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">Umembeso Ceremony</span>
                <span className="text-sm text-gray-600">5:23</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-burgundy-600 h-2 rounded-full" style={{ width: '30%' }} />
              </div>
              <button className="w-12 h-12 bg-burgundy-600 rounded-full flex items-center justify-center text-white hover:bg-burgundy-700 transition-colors mx-auto">
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tradition Explanation */}
      <section className="py-20 bg-burgundy-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              The Meaning Behind the Gifts
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Traditional Blankets</h3>
              <p className="text-sm opacity-90">
                Symbolizing warmth, protection, and comfort for the new family union
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Jewelry & Beadwork</h3>
              <p className="text-sm opacity-90">
                Representing beauty, heritage, and the precious nature of our bond
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Family Unity</h3>
              <p className="text-sm opacity-90">
                Bringing together two families in love, respect, and mutual acceptance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ancestral Blessings</h3>
              <p className="text-sm opacity-90">
                Honoring our ancestors and seeking their guidance for our future
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UmembesoPage;