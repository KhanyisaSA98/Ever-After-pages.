import React, { useState } from 'react';
import { Settings, Users, Images, MessageSquare, Gift, BarChart3, Upload, Edit, Trash2 } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'content', label: 'Content', icon: Edit },
    { id: 'gallery', label: 'Gallery', icon: Images },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'rsvp', label: 'RSVP', icon: Users },
    { id: 'donations', label: 'Donations', icon: Gift },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total RSVPs', value: 127, change: '+12 this week' },
    { label: 'Gallery Photos', value: 89, change: '+23 new' },
    { label: 'Guestbook Messages', value: 45, change: '+8 today' },
    { label: 'Total Donations', value: 'R45,000', change: '+R2,500' },
  ];

  const recentActivity = [
    { type: 'rsvp', message: 'Sarah Johnson confirmed attendance', time: '2 hours ago' },
    { type: 'donation', message: 'Michael K. donated R1,000', time: '4 hours ago' },
    { type: 'message', message: 'New guestbook message from Grace', time: '6 hours ago' },
    { type: 'photo', message: '5 new photos uploaded to gallery', time: '1 day ago' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-burgundy-800 mb-2">
            Wedding Admin Panel
          </h1>
          <p className="text-gray-600">
            Manage your wedding website content and view guest interactions
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-burgundy-500 text-burgundy-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-8">
          {activeTab === 'overview' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">{stat.label}</h3>
                    <p className="text-3xl font-bold text-burgundy-800">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-burgundy-500 rounded-full mr-4" />
                        <div className="flex-1">
                          <p className="text-sm text-gray-800">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'content' && (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Content Management</h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-800">Page Content</h3>
                    <div className="space-y-2">
                      <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="font-medium">Home Page</div>
                        <div className="text-sm text-gray-500">Edit hero section and intro text</div>
                      </button>
                      <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="font-medium">White Wedding</div>
                        <div className="text-sm text-gray-500">Update ceremony details and vows</div>
                      </button>
                      <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="font-medium">Traditional Ceremonies</div>
                        <div className="text-sm text-gray-500">Manage Umembeso, Umabo, and Idlozi content</div>
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-800">Media Management</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload new photos or videos</p>
                      <button className="mt-2 btn-primary text-sm">Choose Files</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Gallery Management</h2>
                <button className="btn-primary text-sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Photos
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="relative group">
                      <div className="aspect-square bg-gray-200 rounded-lg" />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-2">
                          <button className="p-2 bg-white rounded-full text-gray-600 hover:text-burgundy-600">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-white rounded-full text-gray-600 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Guestbook Messages</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium text-gray-800">Guest Name {item}</h4>
                          <p className="text-sm text-gray-500">2 hours ago</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-green-600 hover:text-green-700">Approve</button>
                          <button className="text-red-600 hover:text-red-700">Delete</button>
                        </div>
                      </div>
                      <p className="text-gray-700">Sample guestbook message content...</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rsvp' && (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">RSVP Responses</h2>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attending</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guests</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ceremonies</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <tr key={item}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Guest {item}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">guest{item}@email.com</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Yes
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">White Wedding, Reception</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'donations' && (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Donation Tracking</h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-4">Recent Donations</h3>
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-800">Donor {item}</p>
                            <p className="text-sm text-gray-500">2 hours ago</p>
                          </div>
                          <span className="font-semibold text-burgundy-600">R{(item * 500).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-800 mb-4">Donation Summary</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-burgundy-50 rounded-lg">
                        <p className="text-sm text-burgundy-600">Total Raised</p>
                        <p className="text-2xl font-bold text-burgundy-800">R45,000</p>
                      </div>
                      <div className="p-4 bg-gold-50 rounded-lg">
                        <p className="text-sm text-gold-600">Goal Progress</p>
                        <p className="text-lg font-semibold text-gold-800">45% Complete</p>
                        <div className="w-full bg-gold-200 rounded-full h-2 mt-2">
                          <div className="bg-gold-600 h-2 rounded-full" style={{ width: '45%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Website Settings</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-4">Basic Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Couple Names</label>
                        <input type="text" defaultValue="Thabo & Nomsa" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Wedding Date</label>
                        <input type="date" defaultValue="2024-12-16" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-800 mb-4">Privacy Settings</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-burgundy-600 focus:ring-burgundy-500" />
                        <span className="ml-2 text-sm text-gray-700">Require password for gallery access</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-burgundy-600 focus:ring-burgundy-500" />
                        <span className="ml-2 text-sm text-gray-700">Moderate guestbook messages</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-burgundy-600 focus:ring-burgundy-500" />
                        <span className="ml-2 text-sm text-gray-700">Allow guest photo uploads</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="btn-primary">Save Settings</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;