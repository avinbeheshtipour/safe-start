import { Link, useLocation } from 'react-router';
import { Menu, Globe, User, MessageCircle, Map, Sparkles, Home } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  const languages = [
    'English', 'Français', 'فارسی', 'العربية', 'Español',
    '中文', 'हिन्दी', 'اردو', 'Українська'
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-md flex items-center justify-center">
              <span className="text-white font-semibold text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-slate-800">SafeStart Canada</span>
              <span className="text-xs text-slate-500">Support for newcomers</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-md transition text-sm ${isActive('/') ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/assistant"
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-md transition text-sm ${isActive('/assistant') ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask Assistant</span>
            </Link>
            <Link
              to="/chat"
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-md transition text-sm ${isActive('/chat') ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Live Chat</span>
            </Link>
            <Link
              to="/resources"
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-md transition text-sm ${isActive('/resources') ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <Map className="w-4 h-4" />
              <span>Find Resources</span>
            </Link>

            <div className="relative group pl-2">
              <button className="flex items-center space-x-1.5 px-4 py-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition text-sm">
                <Globe className="w-4 h-4" />
                <span>{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 first:rounded-t-md last:rounded-b-md"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <Link
              to="/profile"
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-md transition text-sm ${isActive('/profile') ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-50 rounded-md">Home</Link>
            <Link to="/assistant" className="block px-4 py-2 hover:bg-gray-50 rounded-md">Ask Assistant</Link>
            <Link to="/chat" className="block px-4 py-2 hover:bg-gray-50 rounded-md">Live Chat</Link>
            <Link to="/resources" className="block px-4 py-2 hover:bg-gray-50 rounded-md">Find Resources</Link>
            <Link to="/profile" className="block px-4 py-2 hover:bg-gray-50 rounded-md">Profile</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
