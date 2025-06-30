import React, { useState } from 'react';
import { Calendar, Users, Mail, Phone, Check, MapPin } from 'lucide-react';

const RSVPPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: '',
    guests: '1',
    dietaryRestrictions: '',
    ceremony: [],
    message: ''
  });

  const ceremonies = [
    { id: 'umembeso', name: 'Umembeso', date: 'December 14, 2024', time: '10:00 AM' },
    { id: 'umabo', name: 'Umabo', date: 'December 15, 2024', time: '9:00 AM' },
    { id: 'white-wedding', name: 'White Wedding', date: 'December 16, 2024', time: '2:00 PM' },
    { id: 'reception', name: 'Reception', date: 'December 16, 2024', time: '6:00 PM' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCeremonyChange = (ceremonyId: string) => {
    setFormData(prev => ({
      ...prev,
      ceremony: prev.ceremony.includes(ceremonyId)
        ? prev.ceremony.filter(id => id !== ceremonyId)
        : [...prev.ceremony, ceremonyId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen pt-16 bg-cream-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-burgundy-800 mb-6">
            RSVP
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please let us know if you'll be joining us for our celebration. Your presence 
            would make our special day even more meaningful.
          </p>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-display font-bold text-burgundy-800 mb-8 text-center">
              Confirm Your Attendance
            </h2>

            {/* Personal Information */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                      placeholder="+27 12 345 6789"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Attendance */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Will you be attending? *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attending: 'yes' }))}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 text-center ${
                    formData.attending === 'yes'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 hover:border-green-400'
                  }`}
                >
                  <Check className="w-6 h-6 mx-auto mb-2" />
                  <span className="font-medium">Yes, I'll be there!</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attending: 'no' }))}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 text-center ${
                    formData.attending === 'no'
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 hover:border-red-400'
                  }`}
                >
                  <span className="font-medium">Sorry, can't make it</span>
                </button>
              </div>
            </div>

            {formData.attending === 'yes' && (
              <>
                {/* Number of Guests */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent appearance-none bg-white"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Ceremony Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Which ceremonies will you attend? *
                  </label>
                  <div className="space-y-3">
                    {ceremonies.map((ceremony) => (
                      <label key={ceremony.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.ceremony.includes(ceremony.id)}
                          onChange={() => handleCeremonyChange(ceremony.id)}
                          className="w-5 h-5 text-burgundy-600 rounded focus:ring-burgundy-500"
                        />
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-800">{ceremony.name}</span>
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="w-4 h-4 mr-1" />
                              {ceremony.date} at {ceremony.time}
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Dietary Restrictions */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dietary Restrictions or Special Requirements
                  </label>
                  <textarea
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent resize-none"
                    placeholder="Please let us know about any dietary restrictions, allergies, or special accommodations needed..."
                  />
                </div>
              </>
            )}

            {/* Message */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent resize-none"
                placeholder="Share your wishes or any special message with us..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!formData.name || !formData.email || !formData.attending}
                className={`btn-primary px-12 py-4 text-lg ${
                  (!formData.name || !formData.email || !formData.attending)
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:scale-105'
                }`}
              >
                Submit RSVP
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-burgundy-800 text-center mb-12">
            Event Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ceremonies.map((ceremony) => (
              <div key={ceremony.id} className="card p-6">
                <h3 className="text-xl font-semibold text-burgundy-800 mb-3">{ceremony.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-gold-600" />
                    {ceremony.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-gold-600" />
                    Johannesburg, South Africa
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSVPPage;