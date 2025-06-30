import React, { useState } from 'react';
import { MessageCircle, Heart, Mic, Send, Volume2, Play } from 'lucide-react';

const GuestbookPage = () => {
  const [newMessage, setNewMessage] = useState({
    name: '',
    message: '',
    isVoice: false
  });
  const [isRecording, setIsRecording] = useState(false);

  const messages = [
    {
      id: 1,
      name: 'Sarah Johnson',
      message: 'Wishing you both a lifetime of love and happiness! Your ceremony was absolutely beautiful.',
      type: 'text',
      timestamp: '2 hours ago',
      likes: 8
    },
    {
      id: 2,
      name: 'Michael Ndaba',
      message: '',
      type: 'voice',
      duration: '0:45',
      timestamp: '4 hours ago',
      likes: 12
    },
    {
      id: 3,
      name: 'Grace Mthembu',
      message: 'Such a beautiful celebration of love and culture! May your marriage be blessed with joy and prosperity.',
      type: 'text',
      timestamp: '6 hours ago',
      likes: 15
    },
    {
      id: 4,
      name: 'David Zulu',
      message: 'Congratulations to the happy couple! Your love story is truly inspiring.',
      type: 'text',
      timestamp: '1 day ago',
      likes: 6
    },
    {
      id: 5,
      name: 'Nomvula Dlamini',
      message: '',
      type: 'voice',
      duration: '1:23',
      timestamp: '1 day ago',
      likes: 20
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New message:', newMessage);
    // Handle message submission
    setNewMessage({ name: '', message: '', isVoice: false });
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Implement voice recording logic
  };

  return (
    <div className="min-h-screen pt-16 bg-cream-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-burgundy-800 mb-6">
            Guestbook
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leave us a message to remember! Share your thoughts, wishes, or record a 
            voice message that we'll treasure forever.
          </p>
        </div>
      </section>

      {/* Message Form */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-display font-bold text-burgundy-800 mb-6 text-center">
              Leave a Message
            </h2>

            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                value={newMessage.name}
                onChange={(e) => setNewMessage(prev => ({ ...prev, name: e.target.value }))}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            {/* Message Type Toggle */}
            <div className="mb-6">
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setNewMessage(prev => ({ ...prev, isVoice: false }))}
                  className={`flex-1 py-3 px-4 flex items-center justify-center transition-colors ${
                    !newMessage.isVoice 
                      ? 'bg-burgundy-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Text Message
                </button>
                <button
                  type="button"
                  onClick={() => setNewMessage(prev => ({ ...prev, isVoice: true }))}
                  className={`flex-1 py-3 px-4 flex items-center justify-center transition-colors ${
                    newMessage.isVoice 
                      ? 'bg-burgundy-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Mic className="w-5 h-5 mr-2" />
                  Voice Message
                </button>
              </div>
            </div>

            {/* Text Message Input */}
            {!newMessage.isVoice && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  value={newMessage.message}
                  onChange={(e) => setNewMessage(prev => ({ ...prev, message: e.target.value }))}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent resize-none"
                  placeholder="Share your wishes, memories, or thoughts for the happy couple..."
                />
              </div>
            )}

            {/* Voice Message Recorder */}
            {newMessage.isVoice && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Voice Message *
                </label>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <button
                    type="button"
                    onClick={toggleRecording}
                    className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isRecording 
                        ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse' 
                        : 'bg-burgundy-600 hover:bg-burgundy-700 text-white'
                    }`}
                  >
                    <Mic className="w-8 h-8" />
                  </button>
                  <p className="mt-4 text-sm text-gray-600">
                    {isRecording ? 'Recording... Click to stop' : 'Click to start recording'}
                  </p>
                  {isRecording && (
                    <p className="text-xs text-red-600 mt-2">
                      0:15 / 2:00 max
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!newMessage.name || (!newMessage.message && !newMessage.isVoice)}
                className={`btn-primary px-8 py-3 ${
                  (!newMessage.name || (!newMessage.message && !newMessage.isVoice))
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:scale-105'
                }`}
              >
                <Send className="w-5 h-5 mr-2 inline" />
                Post Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Messages Display */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-burgundy-800 text-center mb-12">
            Messages from Our Loved Ones
          </h2>

          <div className="space-y-6">
            {messages.map((message) => (
              <div key={message.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-burgundy-600 font-semibold text-lg">
                        {message.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{message.name}</h3>
                      <p className="text-sm text-gray-500">{message.timestamp}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Heart className="w-4 h-4 mr-1 text-burgundy-400" />
                    {message.likes}
                  </div>
                </div>

                {message.type === 'text' ? (
                  <p className="text-gray-700 leading-relaxed mb-4">{message.message}</p>
                ) : (
                  <div className="bg-burgundy-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Volume2 className="w-5 h-5 text-burgundy-600 mr-3" />
                        <span className="text-sm text-gray-600">Voice message</span>
                      </div>
                      <span className="text-sm text-gray-600">{message.duration}</span>
                    </div>
                    <div className="flex items-center mt-3">
                      <button className="w-10 h-10 bg-burgundy-600 rounded-full flex items-center justify-center text-white hover:bg-burgundy-700 transition-colors mr-3">
                        <Play className="w-4 h-4 ml-0.5" />
                      </button>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-burgundy-600 h-2 rounded-full" style={{ width: '20%' }} />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="flex items-center text-sm text-gray-500 hover:text-burgundy-600 transition-colors">
                    <Heart className="w-4 h-4 mr-1" />
                    Like
                  </button>
                  <button className="text-sm text-gray-500 hover:text-burgundy-600 transition-colors">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Messages
            </button>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold text-burgundy-800 mb-4">Message Guidelines</h3>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            We love hearing from you! Please keep messages positive and appropriate. 
            Voice messages should be under 2 minutes. All messages are reviewed before appearing 
            in our guestbook.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GuestbookPage;