import { useState } from 'react';
import { Send, Users, CheckCircle, Shield, Heart, Home, Briefcase, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

interface ChatMessage {
  id: number;
  user: string;
  role: 'volunteer' | 'professional' | 'user' | 'moderator';
  message: string;
  timestamp: string;
}

const mockChats: ChatMessage[] = [
  {
    id: 1,
    user: 'Sarah',
    role: 'volunteer',
    message: 'Welcome to the live chat! I\'m a verified volunteer here to help.',
    timestamp: '10:23 AM'
  },
  {
    id: 2,
    user: 'Ahmed',
    role: 'user',
    message: 'Hi! I just arrived in Toronto and need help finding a family doctor.',
    timestamp: '10:25 AM'
  },
  {
    id: 3,
    user: 'Dr. Emily',
    role: 'professional',
    message: 'Hi Ahmed! I\'m a healthcare advisor. In Toronto, you can register with Health Care Connect. They\'ll help match you with a doctor accepting new patients.',
    timestamp: '10:26 AM'
  },
  {
    id: 4,
    user: 'Maria',
    role: 'user',
    message: 'That\'s helpful! I\'m in the same situation. How long does it usually take?',
    timestamp: '10:28 AM'
  },
  {
    id: 5,
    user: 'Dr. Emily',
    role: 'professional',
    message: 'It can take anywhere from a few weeks to several months depending on your area. In the meantime, walk-in clinics are great for non-emergency care!',
    timestamp: '10:29 AM'
  }
];

export function LiveChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(mockChats);
  const [input, setInput] = useState('');
  const [activeChat, setActiveChat] = useState('main');

  const chatRooms = [
    { id: 'main', name: 'Main Chat', icon: MessageCircle, count: 24, color: 'bg-blue-100', iconColor: 'text-blue-700' },
    { id: 'toronto', name: 'New in Toronto', icon: Users, count: 18, color: 'bg-slate-100', iconColor: 'text-slate-700' },
    { id: 'housing', name: 'Housing Help', icon: Home, count: 12, color: 'bg-teal-100', iconColor: 'text-teal-700' },
    { id: 'healthcare', name: 'Healthcare Questions', icon: Heart, count: 15, color: 'bg-red-100', iconColor: 'text-red-700' },
    { id: 'students', name: 'International Students', icon: Briefcase, count: 22, color: 'bg-emerald-100', iconColor: 'text-emerald-700' },
    { id: 'jobs', name: 'Work & Jobs', icon: Briefcase, count: 19, color: 'bg-amber-100', iconColor: 'text-amber-700' },
    { id: 'professionals', name: 'Ask a Professional', icon: Shield, count: 8, color: 'bg-indigo-100', iconColor: 'text-indigo-700' }
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: ChatMessage = {
      id: messages.length + 1,
      user: 'You',
      role: 'user',
      message: input,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInput('');

    setTimeout(() => {
      const response: ChatMessage = {
        id: messages.length + 2,
        user: 'Sarah',
        role: 'volunteer',
        message: 'Thanks for your question! Let me help you with that.',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'professional':
        return (
          <span className="inline-flex items-center space-x-1 bg-teal-100 text-teal-800 px-2 py-0.5 rounded text-xs font-medium">
            <CheckCircle className="w-3 h-3" />
            <span>Professional</span>
          </span>
        );
      case 'volunteer':
        return (
          <span className="inline-flex items-center space-x-1 bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-xs font-medium">
            <CheckCircle className="w-3 h-3" />
            <span>Volunteer</span>
          </span>
        );
      case 'moderator':
        return (
          <span className="inline-flex items-center space-x-1 bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-xs font-medium">
            <Shield className="w-3 h-3" />
            <span>Moderator</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <MessageCircle className="w-7 h-7 text-blue-700" />
            </div>
            <h1 className="text-4xl font-semibold text-slate-900">Live Chat & Community</h1>
          </div>
          <p className="text-lg text-slate-600">Connect with other newcomers, volunteers, and verified professionals</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold text-slate-900 mb-4">Chat Rooms</h3>
              <div className="space-y-2">
                {chatRooms.map((room) => {
                  const Icon = room.icon;
                  return (
                    <button
                      key={room.id}
                      onClick={() => setActiveChat(room.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-md transition ${activeChat === room.id ? 'bg-teal-50 border-2 border-teal-500' : 'hover:bg-slate-50 border-2 border-transparent'}`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`${room.color} p-2 rounded-md`}>
                          <Icon className={`w-4 h-4 ${room.iconColor}`} />
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-sm text-slate-800">{room.name}</div>
                          <div className="text-xs text-slate-500">{room.count} online</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-emerald-50 rounded-md border border-emerald-200">
                <h4 className="font-semibold text-emerald-900 mb-2 text-sm">Community Guidelines</h4>
                <ul className="text-xs text-emerald-800 space-y-1.5">
                  <li>• Be respectful and kind</li>
                  <li>• No personal information</li>
                  <li>• Verified helpers have badges</li>
                  <li>• Report inappropriate behavior</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col" style={{ height: '600px' }}>
              <div className="border-b border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-lg text-slate-900">
                      {chatRooms.find(r => r.id === activeChat)?.name}
                    </h2>
                    <p className="text-sm text-slate-500">
                      {chatRooms.find(r => r.id === activeChat)?.count} members online
                    </p>
                  </div>
                  <Link
                    to="/community"
                    className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition text-sm font-medium"
                  >
                    View Groups
                  </Link>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.user === 'You' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] ${msg.user === 'You' ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-900'} rounded-lg p-4`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-sm">{msg.user}</span>
                        {getRoleBadge(msg.role)}
                      </div>
                      <p className="text-sm leading-relaxed">{msg.message}</p>
                      <p className="text-xs opacity-70 mt-2">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="px-6 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Press Enter to send • Be respectful and kind
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
            <div className="bg-teal-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Verified Helpers</h3>
            <p className="text-sm text-slate-600 leading-relaxed">All professionals and volunteers are verified by SafeStart</p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center">
            <div className="bg-emerald-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Safe Space</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Moderated 24/7 to ensure a respectful environment</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Real People</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Connect with others who understand your journey</p>
          </div>
        </div>
      </div>
    </div>
  );
}
