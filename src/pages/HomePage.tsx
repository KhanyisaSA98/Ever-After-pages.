import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Heart, Users } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-hero-pattern">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-burgundy-800 to-gold-600 rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-gradient mb-4 text-shadow">
              Thabo & Nomsa
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-serif italic mb-8">
              "Two hearts, one soul, forever united in love"
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center text-lg text-gray-700">
              <Calendar className="w-6 h-6 mr-3 text-gold-600" />
              December 16, 2024
            </div>
            <div className="flex items-center text-lg text-gray-700">
              <MapPin className="w-6 h-6 mr-3 text-gold-600" />
              Johannesburg, South Africa
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rsvp" className="btn-primary">
              RSVP Now
            </Link>
            <Link to="/white-wedding" className="btn-secondary">
              View Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-burgundy-800 mb-8">
            Welcome to Our Celebration
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Join us as we celebrate not just our love, but the beautiful fusion of traditions that 
            make our union special. From the sacred Umembeso to the joyous White Wedding, every 
            moment is a testament to our heritage and our future together.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-burgundy-600" />
              </div>
              <h3 className="text-xl font-semibold text-burgundy-800 mb-2">Our Love Story</h3>
              <p className="text-gray-600 text-sm">Discover how our journey began</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-burgundy-800 mb-2">Cultural Heritage</h3>
              <p className="text-gray-600 text-sm">Honoring our ancestors</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-burgundy-600" />
              </div>
              <h3 className="text-xl font-semibold text-burgundy-800 mb-2">Sacred Ceremonies</h3>
              <p className="text-gray-600 text-sm">Traditional and modern celebrations</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-burgundy-800 mb-2">Join Our Journey</h3>
              <p className="text-gray-600 text-sm">Be part of our celebration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ceremony Timeline */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-burgundy-800 text-center mb-16">
            Our Celebration Journey
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/umembeso" className="card group">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/8422087/pexels-photo-8422087.jpeg?auto=compress&cs=tinysrgb&w=800")'
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-burgundy-800 mb-2 group-hover:text-gold-600 transition-colors">
                  Umembeso
                </h3>
                <p className="text-gray-600 text-sm">
                  The traditional gift exchange ceremony
                </p>
              </div>
            </Link>
            
            <Link to="/umabo" className="card group">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/8422162/pexels-photo-8422162.jpeg?auto=compress&cs=tinysrgb&w=800")'
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-burgundy-800 mb-2 group-hover:text-gold-600 transition-colors">
                  Umabo
                </h3>
                <p className="text-gray-600 text-sm">
                  The traditional Zulu wedding ceremony
                </p>
              </div>
            </Link>
            
            <Link to="/white-wedding" className="card group">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800")'
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-burgundy-800 mb-2 group-hover:text-gold-600 transition-colors">
                  White Wedding
                </h3>
                <p className="text-gray-600 text-sm">
                  The modern celebration of our union
                </p>
              </div>
            </Link>
            
            <Link to="/idlozi" className="card group">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/4255489/pexels-photo-4255489.jpeg?auto=compress&cs=tinysrgb&w=800")'
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-burgundy-800 mb-2 group-hover:text-gold-600 transition-colors">
                  Idlozi
                </h3>
                <p className="text-gray-600 text-sm">
                  Honoring our ancestors' blessings
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-burgundy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Join Our Celebration
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your presence would make our special day even more meaningful
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rsvp" className="bg-white text-burgundy-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              RSVP Now
            </Link>
            <Link to="/donations" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-burgundy-800 transition-colors">
              Send a Gift
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;