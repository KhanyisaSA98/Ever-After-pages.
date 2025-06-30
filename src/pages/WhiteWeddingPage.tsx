import React, { useState } from 'react';
import { Play, Heart, Camera } from 'lucide-react';

const WhiteWeddingPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const photos = [
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1024984/pexels-photo-1024984.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow">
            White Wedding
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-serif italic opacity-90">
            The Modern Celebration
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-8">
            The Story of Us
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              The White Wedding is a modern celebration that signifies our union in today's contemporary world. 
              It is a beautiful complement to our traditional ceremonies, representing our love and commitment 
              in a way that bridges our heritage with our future.
            </p>
            <p className="mb-6">
              This ceremony represents the joining of two hearts, two families, and two futures into one 
              beautiful journey. It's where we exchange vows that speak to our souls and promises that 
              will guide us through a lifetime of love and partnership.
            </p>
            <p>
              Our White Wedding is not just a celebration for us, but a joyous occasion for all our 
              loved ones to witness and bless our union as we step into this new chapter of our lives together.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-4">
              Photo Gallery
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div key={index} className="card group overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${photo})` }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-4">
              Our Wedding Video
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
            <p className="text-lg text-gray-600">
              Relive the magical moments of our special day
            </p>
          </div>
          
          <div className="relative">
            {selectedVideo ? (
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Wedding Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div 
                className="aspect-video bg-cover bg-center rounded-xl relative cursor-pointer group"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1200")'
                }}
                onClick={() => setSelectedVideo('wedding-ceremony')}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                  <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-burgundy-800 ml-1" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Vows Section */}
      <section className="py-20 bg-burgundy-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Our Wedding Vows
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-6">Thabo's Vows</h3>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <p className="font-serif italic leading-relaxed">
                  "Nomsa, you are my heart, my soul, my everything. Today I promise to love you 
                  unconditionally, to support your dreams, and to be your partner in all of life's 
                  adventures. With you, I am home."
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-6">Nomsa's Vows</h3>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <p className="font-serif italic leading-relaxed">
                  "Thabo, you complete me in ways I never thought possible. I promise to love you 
                  fiercely, to grow with you, and to create a beautiful life together. You are my 
                  forever love."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhiteWeddingPage;