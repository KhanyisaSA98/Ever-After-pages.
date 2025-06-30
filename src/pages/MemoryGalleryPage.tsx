import React, { useState } from 'react';
import { Upload, Filter, Search, Grid, List, Heart, Camera, Video } from 'lucide-react';

const MemoryGalleryPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const memories = [
    {
      id: 1,
      type: 'image',
      url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Beautiful ceremony moment',
      author: 'Sarah M.',
      category: 'white-wedding',
      timestamp: '2 hours ago',
      likes: 12
    },
    {
      id: 2,
      type: 'image',
      url: 'https://images.pexels.com/photos/8422162/pexels-photo-8422162.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Traditional attire',
      author: 'Michael K.',
      category: 'umabo',
      timestamp: '4 hours ago',
      likes: 8
    },
    {
      id: 3,
      type: 'video',
      url: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Dance celebration',
      author: 'Lisa P.',
      category: 'umembeso',
      timestamp: '6 hours ago',
      likes: 15
    },
    {
      id: 4,
      type: 'image',
      url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Family gathering',
      author: 'John D.',
      category: 'white-wedding',
      timestamp: '1 day ago',
      likes: 6
    },
    {
      id: 5,
      type: 'image',
      url: 'https://images.pexels.com/photos/8422087/pexels-photo-8422087.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cultural ceremony',
      author: 'Grace T.',
      category: 'umembeso',
      timestamp: '1 day ago',
      likes: 20
    },
    {
      id: 6,
      type: 'image',
      url: 'https://images.pexels.com/photos/4255489/pexels-photo-4255489.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Blessing ritual',
      author: 'David M.',
      category: 'idlozi',
      timestamp: '2 days ago',
      likes: 10
    }
  ];

  const categories = [
    { value: 'all', label: 'All Memories' },
    { value: 'white-wedding', label: 'White Wedding' },
    { value: 'umembeso', label: 'Umembeso' },
    { value: 'umabo', label: 'Umabo' },
    { value: 'idlozi', label: 'Idlozi' }
  ];

  const filteredMemories = memories.filter(memory => {
    const matchesFilter = filter === 'all' || memory.category === filter;
    const matchesSearch = memory.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         memory.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-16 bg-cream-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-burgundy-800 mb-6">
            Memory Gallery
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your beautiful moments and view memories captured by our loved ones 
            during our celebration
          </p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12 bg-burgundy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Share Your Memories
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Upload your photos and videos from our celebration to share with everyone
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="border-2 border-dashed border-white border-opacity-30 rounded-xl p-8 hover:border-opacity-50 transition-all duration-300 cursor-pointer group">
              <Upload className="w-12 h-12 mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              <p className="text-lg font-medium mb-2">Drag and drop files here</p>
              <p className="text-sm opacity-70 mb-4">or click to browse</p>
              <button className="bg-white text-burgundy-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Choose Files
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search memories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-burgundy-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-burgundy-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredMemories.length} of {memories.length} memories
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMemories.map((memory) => (
                <div key={memory.id} className="card group">
                  <div className="relative">
                    <div 
                      className="h-64 bg-cover bg-center"
                      style={{ backgroundImage: `url(${memory.url})` }}
                    />
                    {memory.type === 'video' && (
                      <div className="absolute top-4 right-4">
                        <Video className="w-6 h-6 text-white drop-shadow-lg" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{memory.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>by {memory.author}</span>
                      <span>{memory.timestamp}</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs bg-burgundy-100 text-burgundy-800 px-2 py-1 rounded-full">
                        {categories.find(c => c.value === memory.category)?.label}
                      </span>
                      <button className="flex items-center text-sm text-gray-500 hover:text-burgundy-600 transition-colors">
                        <Heart className="w-4 h-4 mr-1" />
                        {memory.likes}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredMemories.map((memory) => (
                <div key={memory.id} className="card">
                  <div className="flex p-4 gap-4">
                    <div className="relative">
                      <div 
                        className="w-24 h-24 bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url(${memory.url})` }}
                      />
                      {memory.type === 'video' && (
                        <div className="absolute top-2 right-2">
                          <Video className="w-4 h-4 text-white drop-shadow-lg" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">{memory.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <span>by {memory.author}</span>
                        <span>{memory.timestamp}</span>
                        <span className="text-xs bg-burgundy-100 text-burgundy-800 px-2 py-1 rounded-full">
                          {categories.find(c => c.value === memory.category)?.label}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button className="flex items-center text-sm text-gray-500 hover:text-burgundy-600 transition-colors">
                            <Heart className="w-4 h-4 mr-1" />
                            {memory.likes}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Moderation Notice */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            All uploads are reviewed before appearing in the gallery. Please allow up to 24 hours for your memories to be approved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MemoryGalleryPage;