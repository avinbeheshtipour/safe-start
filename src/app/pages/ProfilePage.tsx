import { useState } from 'react';
import { User, MapPin, Globe, FileText, Bookmark, MessageCircle, Settings, Bell, Shield, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');

  const savedArticles = [
    { id: 1, title: 'How do I get a health card?', category: 'Healthcare', link: '/article/get-health-card' },
    { id: 2, title: 'What are my rights as a tenant?', category: 'Housing', link: '/article/tenant-rights' },
    { id: 3, title: 'How to open a bank account', category: 'Finance', link: '/article/open-bank-account' }
  ];

  const savedResources = [
    { id: 1, name: 'Toronto Settlement Services', type: 'Settlement Agency', address: '123 Main St, Toronto' },
    { id: 2, name: 'Community Health Clinic', type: 'Walk-in Clinic', address: '456 Queen St, Toronto' },
    { id: 3, name: 'Legal Aid Ontario', type: 'Legal Services', address: '789 Bay St, Toronto' }
  ];

  const checklistItems = [
    { id: 1, title: 'Get health card', completed: true },
    { id: 2, title: 'Open bank account', completed: true },
    { id: 3, title: 'Apply for SIN number', completed: true },
    { id: 4, title: 'Find a family doctor', completed: false },
    { id: 5, title: 'Register for language classes', completed: false },
    { id: 6, title: 'Join community group', completed: false }
  ];

  return (
    <div className="w-full bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-slate-100 rounded-lg flex items-center justify-center">
              <User className="w-12 h-12 text-slate-700" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-slate-900 mb-2">Welcome back!</h1>
              <p className="text-slate-600">Member since May 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-2 mb-10 overflow-x-auto">
          {[
            { id: 'profile', label: 'Profile Info', icon: User },
            { id: 'saved', label: 'Saved Items', icon: Bookmark },
            { id: 'checklist', label: 'My Checklist', icon: CheckCircle },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md transition whitespace-nowrap font-medium ${activeTab === tab.id ? 'bg-teal-700 text-white' : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'}`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (123) 456-7890"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Location & Preferences</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">
                    <MapPin className="inline w-4 h-4 mr-1" />
                    City / Province
                  </label>
                  <select className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Toronto, ON</option>
                    <option>Vancouver, BC</option>
                    <option>Montreal, QC</option>
                    <option>Calgary, AB</option>
                    <option>Ottawa, ON</option>
                    <option>Edmonton, AB</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">
                    <Globe className="inline w-4 h-4 mr-1" />
                    Preferred Language
                  </label>
                  <select className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>English</option>
                    <option>Français</option>
                    <option>فارسی (Persian)</option>
                    <option>العربية (Arabic)</option>
                    <option>Español</option>
                    <option>中文 (Chinese)</option>
                    <option>हिन्दी (Hindi)</option>
                    <option>اردو (Urdu)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">Immigration Status (Optional)</label>
                  <select className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Prefer not to say</option>
                    <option>Permanent Resident</option>
                    <option>International Student</option>
                    <option>Work Permit Holder</option>
                    <option>Refugee</option>
                    <option>Temporary Resident</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Emergency Contacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">Contact Name</label>
                  <input
                    type="text"
                    placeholder="Emergency contact name"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">Contact Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (123) 456-7890"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button className="mt-5 px-6 py-2.5 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition font-medium">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  <FileText className="inline w-5 h-5 mr-2" />
                  Saved Articles
                </h2>
                <span className="text-sm text-slate-500">{savedArticles.length} items</span>
              </div>
              <div className="space-y-3">
                {savedArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={article.link}
                    className="block p-4 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-md transition"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-slate-800 mb-1">{article.title}</h3>
                        <span className="text-xs text-teal-700">{article.category}</span>
                      </div>
                      <Bookmark className="w-5 h-5 text-teal-700 fill-current" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  <MapPin className="inline w-5 h-5 mr-2" />
                  Saved Resources
                </h2>
                <span className="text-sm text-slate-500">{savedResources.length} items</span>
              </div>
              <div className="space-y-3">
                {savedResources.map((resource) => (
                  <div
                    key={resource.id}
                    className="p-4 bg-emerald-50 border border-emerald-200 rounded-md"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-slate-800">{resource.name}</h3>
                      <Bookmark className="w-5 h-5 text-emerald-700 fill-current" />
                    </div>
                    <p className="text-xs text-emerald-700 mb-1">{resource.type}</p>
                    <p className="text-xs text-slate-600">{resource.address}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 bg-slate-100 border border-slate-200 rounded-lg p-8 text-center">
              <h3 className="font-semibold text-slate-900 mb-2">Keep exploring!</h3>
              <p className="text-slate-600 mb-4">Save articles and resources to access them quickly later</p>
              <Link to="/" className="px-6 py-2.5 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition inline-block font-medium">
                Browse Resources
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'checklist' && (
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Settlement Checklist</h2>
            <p className="text-slate-600 mb-8">Track your progress settling in Canada</p>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-600 font-medium">Progress</span>
                <span className="text-sm font-semibold text-teal-700">
                  {checklistItems.filter(i => i.completed).length} of {checklistItems.length} completed
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className="bg-teal-700 h-3 rounded-full transition-all"
                  style={{ width: `${(checklistItems.filter(i => i.completed).length / checklistItems.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-3">
              {checklistItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center space-x-4 p-4 rounded-md border-2 transition ${item.completed ? 'bg-emerald-50 border-emerald-500' : 'bg-slate-50 border-slate-200'}`}
                >
                  <input
                    type="checkbox"
                    checked={item.completed}
                    readOnly
                    className="w-5 h-5 text-emerald-700 rounded focus:ring-emerald-500"
                  />
                  <span className={`flex-1 ${item.completed ? 'line-through text-slate-500' : 'text-slate-800 font-medium'}`}>
                    {item.title}
                  </span>
                  {item.completed && <CheckCircle className="w-5 h-5 text-emerald-700" />}
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-teal-50 border border-teal-200 rounded-md">
              <h3 className="font-semibold text-teal-900 mb-2">Need help with any of these?</h3>
              <p className="text-sm text-teal-800 mb-3">Our assistant can guide you through each step</p>
              <Link to="/assistant" className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition inline-block text-sm font-medium">
                Get Help
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">
                <Bell className="inline w-5 h-5 mr-2" />
                Notifications
              </h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div>
                    <div className="font-medium text-slate-800 group-hover:text-slate-900">Email Notifications</div>
                    <div className="text-sm text-slate-600">Receive updates via email</div>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-teal-700 rounded focus:ring-teal-500" defaultChecked />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <div className="font-medium text-gray-800">New Articles</div>
                    <div className="text-sm text-gray-600">Notify when new guides are published</div>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" defaultChecked />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <div className="font-medium text-gray-800">Chat Messages</div>
                    <div className="text-sm text-gray-600">Notify about new chat replies</div>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <div className="font-medium text-gray-800">Community Updates</div>
                    <div className="text-sm text-gray-600">News from your community groups</div>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                </label>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">
                <Shield className="inline w-5 h-5 mr-2" />
                Privacy & Security
              </h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div>
                    <div className="font-medium text-slate-800 group-hover:text-slate-900">Profile Visibility</div>
                    <div className="text-sm text-slate-600">Show profile in community</div>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-teal-700 rounded focus:ring-teal-500" defaultChecked />
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <div>
                    <div className="font-medium text-slate-800 group-hover:text-slate-900">Activity Status</div>
                    <div className="text-sm text-slate-600">Show when you're online</div>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-teal-700 rounded focus:ring-teal-500" />
                </label>
                <div className="pt-4 border-t border-slate-200">
                  <button className="w-full px-4 py-2.5 bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 transition font-medium">
                    Change Password
                  </button>
                </div>
                <button className="w-full px-4 py-2.5 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition font-medium">
                  Delete Account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h3 className="font-semibold text-teal-900 mb-2">
                <Phone className="inline w-5 h-5 mr-1" />
                Need Help?
              </h3>
              <p className="text-teal-800 mb-4">Contact our support team if you have questions or issues</p>
              <div className="flex space-x-3">
                <Link to="/chat" className="px-4 py-2.5 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition font-medium">
                  Live Chat
                </Link>
                <a href="mailto:support@safestart.ca" className="px-4 py-2.5 bg-white text-teal-700 border-2 border-teal-700 rounded-md hover:bg-slate-50 transition font-medium">
                  Email Support
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
