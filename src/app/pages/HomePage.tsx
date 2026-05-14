import { useState } from 'react';
import { Link } from 'react-router';
import {
  Phone,
  Home as HomeIcon,
  Shield,
  Heart,
  Users,
  Briefcase,
  Globe,
  Building2,
  GraduationCap,
  Search,
  AlertCircle,
  MapPin,
  FileText,
  Compass,
  UserPlus,
  Sparkles,
  CheckCircle,
  Star,
  TrendingUp,
  Bookmark
} from 'lucide-react';

export function HomePage() {
  const [activeSection, setActiveSection] = useState<'main' | 'explore' | 'following' | 'foryou'>('main');
  const supportCards = [
    {
      title: 'Healthcare',
      description: 'Find doctors, health cards, and mental health support',
      icon: Heart,
      iconColor: 'bg-teal-100 text-teal-700',
      link: '/category/medical-healthcare',
      action: 'Explore healthcare'
    },
    {
      title: 'Housing & Renting',
      description: 'Tenant rights, safe housing, and avoiding scams',
      icon: HomeIcon,
      iconColor: 'bg-blue-100 text-blue-700',
      link: '/category/housing-renting',
      action: 'Find housing help'
    },
    {
      title: 'Legal Rights',
      description: 'Your rights, legal aid, and immigration support',
      icon: Shield,
      iconColor: 'bg-indigo-100 text-indigo-700',
      link: '/category/police-law',
      action: 'Know your rights'
    },
    {
      title: 'Mental Health',
      description: 'Free counseling and mental health resources',
      icon: Heart,
      iconColor: 'bg-rose-100 text-rose-700',
      link: '/category/mental-health',
      action: 'Get support'
    },
    {
      title: 'Settlement Worker',
      description: 'Connect with local settlement services',
      icon: Users,
      iconColor: 'bg-emerald-100 text-emerald-700',
      link: '/category/settlement-worker',
      action: 'Find a worker'
    },
    {
      title: 'Community Support',
      description: 'Language classes, food banks, and local services',
      icon: Users,
      iconColor: 'bg-purple-100 text-purple-700',
      link: '/category/community-support',
      action: 'Explore community'
    }
  ];

  const categories = [
    {
      id: 'medical-healthcare',
      title: 'Medical & Healthcare',
      description: 'Find doctors, clinics, health cards, and mental health support',
      icon: Heart,
      color: 'bg-teal-50',
      iconColor: 'text-teal-700',
      borderColor: 'hover:border-teal-300',
      topics: ['Find a doctor', 'Walk-in clinics', 'Health card', 'Mental health', 'When to call 911']
    },
    {
      id: 'housing-renting',
      title: 'Housing & Renting',
      description: 'Tenant rights, safe housing, avoiding scams, and rental guidance',
      icon: HomeIcon,
      color: 'bg-blue-50',
      iconColor: 'text-blue-700',
      borderColor: 'hover:border-blue-300',
      topics: ['Tenant rights', 'Rent deposits', 'Finding housing', 'Avoiding scams', 'What to ask']
    },
    {
      id: 'police-law',
      title: 'Police, Law & Authorities',
      description: 'Your rights, legal aid, immigration support, and safety',
      icon: Shield,
      color: 'bg-slate-50',
      iconColor: 'text-slate-700',
      borderColor: 'hover:border-slate-300',
      topics: ['Your rights', 'Talking to police', 'Reporting abuse', 'Legal aid', 'Immigration help']
    },
    {
      id: 'culture-daily-life',
      title: 'Culture & Daily Life',
      description: 'Canadian norms, workplace etiquette, and winter preparation',
      icon: Globe,
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-700',
      borderColor: 'hover:border-emerald-300',
      topics: ['Social norms', 'Workplace culture', 'School norms', 'Public transit', 'Winter prep']
    },
    {
      id: 'jobs-banking-documents',
      title: 'Jobs, Banking & Documents',
      description: 'SIN number, bank accounts, resumes, work permits, and taxes',
      icon: Briefcase,
      color: 'bg-amber-50',
      iconColor: 'text-amber-700',
      borderColor: 'hover:border-amber-300',
      topics: ['SIN number', 'Bank account', 'Resume tips', 'Work permits', 'Taxes']
    },
    {
      id: 'community-support',
      title: 'Community Support',
      description: 'Newcomer centers, food banks, language classes, and local services',
      icon: Users,
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-700',
      borderColor: 'hover:border-indigo-300',
      topics: ['Newcomer centers', 'Food banks', 'Language classes', 'Community groups', 'Free services']
    }
  ];

  const secondaryNavItems = [
    { id: 'main' as const, label: 'Main Support', icon: HomeIcon, description: 'Essential resources and help' },
    { id: 'explore' as const, label: 'Explore', icon: Compass, description: 'Posts from professionals' },
    { id: 'following' as const, label: 'Following', icon: UserPlus, description: 'Updates from helpers you follow' },
    { id: 'foryou' as const, label: 'For You', icon: Sparkles, description: 'Personalized recommendations' }
  ];

  const exploreContent = [
    {
      id: 1,
      author: 'Dr. Sarah Chen',
      role: 'Healthcare Advisor',
      verified: true,
      organization: 'Toronto Settlement Services',
      profileColor: 'bg-teal-500',
      initials: 'SC',
      content: 'Important reminder: Your health card application can take 2-4 weeks. During the waiting period, keep your temporary paper card safe. Many walk-in clinics accept it!',
      category: 'Healthcare',
      categoryColor: 'bg-teal-100 text-teal-800',
      thumbnail: true,
      thumbnailBg: 'bg-teal-50',
      likes: 247,
      helpful: 189
    },
    {
      id: 2,
      author: 'Legal Aid Ontario',
      role: 'Legal Services',
      verified: true,
      organization: 'Legal Aid Ontario',
      profileColor: 'bg-blue-600',
      initials: 'LA',
      content: 'Know your rights as a tenant: Your landlord cannot ask for more than one month\'s rent as a deposit. If they do, it\'s illegal. Contact us for free legal advice.',
      category: 'Housing',
      categoryColor: 'bg-blue-100 text-blue-800',
      thumbnail: true,
      thumbnailBg: 'bg-blue-50',
      likes: 432,
      helpful: 356
    },
    {
      id: 3,
      author: 'Ahmed Hassan',
      role: 'Settlement Worker',
      verified: true,
      organization: 'YMCA Newcomer Services',
      profileColor: 'bg-emerald-600',
      initials: 'AH',
      content: 'New to Canada? Join our free orientation workshop this Saturday! We\'ll cover: SIN number, health card, banking, and finding your first job. No registration needed.',
      category: 'Community',
      categoryColor: 'bg-emerald-100 text-emerald-800',
      thumbnail: true,
      thumbnailBg: 'bg-emerald-50',
      likes: 198,
      helpful: 142
    },
    {
      id: 4,
      author: 'Vancouver Tenants Union',
      role: 'Housing Advocacy',
      verified: true,
      organization: 'Vancouver Tenants Union',
      profileColor: 'bg-indigo-600',
      initials: 'VT',
      content: 'Reminder: Taking photos of your apartment BEFORE moving in protects you from unfair damage charges. Document everything - walls, floors, appliances, windows.',
      category: 'Housing',
      categoryColor: 'bg-indigo-100 text-indigo-800',
      thumbnail: true,
      thumbnailBg: 'bg-indigo-50',
      likes: 521,
      helpful: 478
    },
    {
      id: 5,
      author: 'Dr. Maria Rodriguez',
      role: 'Mental Health Counselor',
      verified: true,
      organization: 'Community Mental Health',
      profileColor: 'bg-purple-500',
      initials: 'MR',
      content: 'Adjusting to a new country is stressful. If you\'re feeling anxious or overwhelmed, remember: free counseling is available in multiple languages. Call 988 anytime.',
      category: 'Mental Health',
      categoryColor: 'bg-purple-100 text-purple-800',
      thumbnail: true,
      thumbnailBg: 'bg-purple-50',
      likes: 312,
      helpful: 289
    },
    {
      id: 6,
      author: 'Calgary Job Connect',
      role: 'Employment Services',
      verified: true,
      organization: 'Calgary Employment Hub',
      profileColor: 'bg-amber-600',
      initials: 'CJ',
      content: 'Resume tip for newcomers: Canadian employers prefer 1-2 page resumes. Include your Canadian experience first, even if it\'s volunteer work or internships.',
      category: 'Employment',
      categoryColor: 'bg-amber-100 text-amber-800',
      thumbnail: true,
      thumbnailBg: 'bg-amber-50',
      likes: 267,
      helpful: 234
    }
  ];

  const followingContent = [
    {
      id: 1,
      author: 'Dr. Emily Rodriguez',
      role: 'Mental Health Professional',
      verified: true,
      organization: 'Community Mental Health',
      profileColor: 'bg-purple-500',
      initials: 'ER',
      content: 'Feeling overwhelmed is normal when settling in a new country. Free counseling is available in multiple languages. You don\'t need a referral - just call 988 for mental health support.',
      category: 'Mental Health',
      categoryColor: 'bg-purple-100 text-purple-800',
      thumbnail: true,
      thumbnailBg: 'bg-purple-50',
      likes: 156,
      helpful: 134,
      following: true
    },
    {
      id: 2,
      author: 'Calgary Immigration Law',
      role: 'Immigration Lawyer',
      verified: true,
      organization: 'Calgary Legal Services',
      profileColor: 'bg-slate-700',
      initials: 'CI',
      content: 'Work permit holders: Your permit expiration date is NOT the same as when you must leave Canada. You may be eligible for implied status while your renewal is processing.',
      category: 'Legal',
      categoryColor: 'bg-slate-100 text-slate-800',
      thumbnail: true,
      thumbnailBg: 'bg-slate-50',
      likes: 289,
      helpful: 267,
      following: true
    }
  ];

  const forYouContent = [
    {
      id: 1,
      author: 'Toronto Persian Community',
      role: 'Community Group',
      verified: true,
      organization: 'Persian Newcomers Toronto',
      profileColor: 'bg-rose-600',
      initials: 'TP',
      content: 'فارسی: نوروز celebration next month! Free event for all Persian newcomers. Traditional food, music, and connect with other families. Kids activities included.',
      category: 'Community',
      categoryColor: 'bg-rose-100 text-rose-800',
      thumbnail: true,
      thumbnailBg: 'bg-rose-50',
      likes: 342,
      helpful: 298,
      recommended: true
    },
    {
      id: 2,
      author: 'Toronto Settlement Services',
      role: 'Settlement Agency',
      verified: true,
      organization: 'Toronto Settlement Hub',
      profileColor: 'bg-teal-600',
      initials: 'TS',
      content: 'Based on your profile: Free LINC classes starting next week in your area! English language training for newcomers. Morning and evening sessions available.',
      category: 'Education',
      categoryColor: 'bg-teal-100 text-teal-800',
      thumbnail: true,
      thumbnailBg: 'bg-teal-50',
      likes: 178,
      helpful: 156,
      recommended: true
    }
  ];

  const renderMainSupport = () => (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-50 border-b-2 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center space-x-3 text-red-900">
            <Phone className="w-5 h-5" />
            <span className="font-medium">Life-threatening emergency? Call 911 immediately</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-5 leading-tight">
                Welcome to Canada.<br />
                <span className="text-teal-700">We're here to help.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
                Trusted support for newcomers — healthcare, housing, legal rights, culture, safety, and community resources.
              </p>

              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="What do you need help with today?"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 text-slate-800 text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white shadow-sm"
                  />
                </div>
              </div>

              {/* Quick Action Chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button className="px-4 py-2 bg-white border border-teal-200 text-teal-700 rounded-full hover:bg-teal-50 transition text-sm font-medium">
                  Health Card
                </button>
                <button className="px-4 py-2 bg-white border border-teal-200 text-teal-700 rounded-full hover:bg-teal-50 transition text-sm font-medium">
                  Tenant Rights
                </button>
                <button className="px-4 py-2 bg-white border border-teal-200 text-teal-700 rounded-full hover:bg-teal-50 transition text-sm font-medium">
                  Find Doctor
                </button>
                <button className="px-4 py-2 bg-white border border-teal-200 text-teal-700 rounded-full hover:bg-teal-50 transition text-sm font-medium">
                  SIN Number
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-slate-700">Verified resources</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-slate-700">Multilingual support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-slate-700">Real settlement workers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-slate-700">Local Canadian services</span>
                </div>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl p-12 text-center border border-teal-200">
                <Users className="w-32 h-32 text-teal-600 mx-auto mb-4" />
                <p className="text-slate-700 font-medium">Friendly support workers ready to help you settle in Canada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Cards Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-3">How can we help you today?</h2>
            <p className="text-lg text-slate-600">Choose a category to find trusted information and support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  to={card.link}
                  className="bg-white rounded-2xl border-2 border-slate-200 hover:border-teal-300 p-6 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className={`${card.iconColor} w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{card.description}</p>
                  <span className="text-teal-700 font-medium text-sm group-hover:text-teal-800">
                    {card.action} →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Resources Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-3">More ways to get help</h2>
            <p className="text-lg text-slate-600">Personalized support when you need it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/assistant" className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-slate-900">Smart Assistant</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Get personalized guidance for your situation</p>
              <span className="text-teal-700 font-medium text-sm">Ask a question →</span>
            </Link>

            <Link to="/chat" className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-slate-900">Live Chat</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Talk to verified volunteers and professionals</p>
              <span className="text-blue-700 font-medium text-sm">Start chatting →</span>
            </Link>

            <Link to="/resources" className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-slate-900">Resource Finder</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Find nearby clinics, shelters, and services</p>
              <span className="text-emerald-700 font-medium text-sm">Find resources →</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  const renderExplore = () => (
    <div className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">Explore</h2>
        <p className="text-lg text-slate-600">Helpful posts from verified professionals and organizations</p>
      </div>

      <div className="space-y-5">
        {exploreContent.map((post) => (
          <div key={post.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className={`w-11 h-11 ${post.profileColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-semibold text-sm">{post.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-slate-900 truncate">{post.author}</h3>
                    {post.verified && (
                      <CheckCircle className="w-4 h-4 text-teal-600 fill-current flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-slate-600 truncate">{post.role} · {post.organization}</p>
                </div>
                <span className={`px-2.5 py-1 ${post.categoryColor} text-xs rounded font-medium whitespace-nowrap`}>
                  {post.category}
                </span>
              </div>

              <p className="text-slate-800 leading-relaxed mb-4">{post.content}</p>

              {post.thumbnail && (
                <div className="border border-slate-200 rounded-lg h-64 mb-4 overflow-hidden">
                  {post.category === 'Healthcare' && (
                    <img
                      src="https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Healthcare consultation"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {post.category === 'Housing' && (
                    <img
                      src="https://images.unsplash.com/photo-1580709789185-1eb892605ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="People in apartment discussing housing"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {post.category === 'Community' && (
                    <img
                      src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Community support group"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {post.category === 'Mental Health' && (
                    <img
                      src="https://images.unsplash.com/photo-1714976694867-bc0e012fab70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Mental health counseling session"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {post.category === 'Employment' && (
                    <img
                      src="https://images.unsplash.com/photo-1758691737158-18ffa31c0a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Professional workplace collaboration"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {post.category === 'Education' && (
                    <img
                      src="https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Students learning in classroom"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {post.category === 'Legal' && (
                    <img
                      src="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Immigration documents and passport"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <div className="flex items-center space-x-4 text-sm text-slate-600">
                  <button className="flex items-center space-x-1.5 hover:text-teal-700 transition">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1.5 hover:text-teal-700 transition">
                    <Star className="w-4 h-4" />
                    <span>{post.helpful}</span>
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="text-slate-600 hover:text-teal-700 transition">
                    <Bookmark className="w-4 h-4" />
                  </button>
                  <button className="text-teal-700 hover:text-teal-800 font-medium text-sm">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-2.5 bg-white border-2 border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition font-medium">
          Load more posts
        </button>
      </div>
    </div>
  );

  const renderFollowing = () => (
    <div className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">Following</h2>
        <p className="text-lg text-slate-600">Updates from professionals and organizations you follow</p>
      </div>

      {followingContent.length > 0 ? (
        <div className="space-y-5">
          {followingContent.map((post) => (
            <div key={post.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className={`w-11 h-11 ${post.profileColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-semibold text-sm">{post.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-slate-900 truncate">{post.author}</h3>
                      {post.verified && (
                        <CheckCircle className="w-4 h-4 text-teal-600 fill-current flex-shrink-0" />
                      )}
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded font-medium">
                        Following
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 truncate">{post.role} · {post.organization}</p>
                  </div>
                  <span className={`px-2.5 py-1 ${post.categoryColor} text-xs rounded font-medium whitespace-nowrap`}>
                    {post.category}
                  </span>
                </div>

                <p className="text-slate-800 leading-relaxed mb-4">{post.content}</p>

                {post.thumbnail && (
                  <div className="border border-slate-200 rounded-lg h-64 mb-4 overflow-hidden">
                    {post.category === 'Mental Health' && (
                      <img
                        src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                        alt="Person receiving mental health support"
                        className="w-full h-full object-cover"
                      />
                    )}
                    {post.category === 'Legal' && (
                      <img
                        src="https://images.unsplash.com/photo-1655722725332-9925c96dd627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                        alt="Immigration documents"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex items-center space-x-4 text-sm text-slate-600">
                    <button className="flex items-center space-x-1.5 hover:text-teal-700 transition">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1.5 hover:text-teal-700 transition">
                      <Star className="w-4 h-4" />
                      <span>{post.helpful}</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="text-slate-600 hover:text-teal-700 transition">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="text-teal-700 hover:text-teal-800 font-medium text-sm">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-100 border border-slate-200 rounded-lg p-12 text-center">
          <UserPlus className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">No updates yet</h3>
          <p className="text-slate-600 mb-6">Follow professionals and organizations to see their updates here</p>
          <button
            onClick={() => setActiveSection('explore')}
            className="px-6 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition font-medium"
          >
            Explore professionals
          </button>
        </div>
      )}
    </div>
  );

  const renderForYou = () => (
    <div className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">For You</h2>
        <p className="text-lg text-slate-600">Personalized recommendations based on your interests and needs</p>
      </div>

      <div className="space-y-5">
        {forYouContent.map((post) => (
          <div key={post.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className={`w-11 h-11 ${post.profileColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-semibold text-sm">{post.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-slate-900 truncate">{post.author}</h3>
                    {post.verified && (
                      <CheckCircle className="w-4 h-4 text-teal-600 fill-current flex-shrink-0" />
                    )}
                    {post.recommended && (
                      <span className="flex items-center space-x-1 px-2 py-0.5 bg-indigo-100 text-indigo-800 text-xs rounded font-medium">
                        <TrendingUp className="w-3 h-3" />
                        <span>Recommended</span>
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 truncate">{post.role} · {post.organization}</p>
                </div>
                <span className={`px-2.5 py-1 ${post.categoryColor} text-xs rounded font-medium whitespace-nowrap`}>
                  {post.category}
                </span>
              </div>

              <p className="text-slate-800 leading-relaxed mb-4">{post.content}</p>

              {post.thumbnail && (
                <div className="border border-slate-200 rounded-lg h-64 mb-4 overflow-hidden">
                  {post.category === 'Healthcare' && (
                    <img
                      src="https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Healthcare consultation"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {post.category === 'Housing' && (
                    <img
                      src="https://images.unsplash.com/photo-1580709789185-1eb892605ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="People in apartment discussing housing"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {post.category === 'Community' && (
                    <img
                      src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Community support group"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {post.category === 'Mental Health' && (
                    <img
                      src="https://images.unsplash.com/photo-1714976694867-bc0e012fab70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Mental health counseling session"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {post.category === 'Employment' && (
                    <img
                      src="https://images.unsplash.com/photo-1758691737158-18ffa31c0a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Professional workplace collaboration"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {post.category === 'Education' && (
                    <img
                      src="https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Students learning in classroom"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {post.category === 'Legal' && (
                    <img
                      src="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Immigration documents and passport"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <div className="flex items-center space-x-4 text-sm text-slate-600">
                  <button className="flex items-center space-x-1.5 hover:text-teal-700 transition">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1.5 hover:text-teal-700 transition">
                    <Star className="w-4 h-4" />
                    <span>{post.helpful}</span>
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="text-slate-600 hover:text-teal-700 transition">
                    <Bookmark className="w-4 h-4" />
                  </button>
                  <button className="text-teal-700 hover:text-teal-800 font-medium text-sm">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-teal-50 border border-teal-200 rounded-lg p-6">
        <h3 className="font-semibold text-teal-900 mb-2">Want more personalized content?</h3>
        <p className="text-sm text-teal-800 mb-4">Update your profile with your city, interests, and needs to get better recommendations</p>
        <Link to="/profile" className="inline-block px-6 py-2.5 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition font-medium text-sm">
          Update Profile
        </Link>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Mobile Secondary Navigation - Horizontal Tabs */}
      <div className="lg:hidden bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="flex overflow-x-auto">
          {secondaryNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-5 py-3 border-b-2 transition whitespace-nowrap ${
                  activeSection === item.id
                    ? 'border-teal-600 text-teal-700'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className={`text-sm ${activeSection === item.id ? 'font-medium' : 'font-normal'}`}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop Layout with Left Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:space-x-4 lg:py-8">
          {/* Desktop Secondary Navigation - Left Sidebar */}
          <div className="hidden lg:block lg:w-36 flex-shrink-0 -ml-2">
            <div className="sticky top-24">
              <h3 className="text-xs font-medium text-slate-400 mb-2 px-1 uppercase tracking-wide">Sections</h3>
              <nav className="space-y-0.5">
                {secondaryNavItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-md transition text-left ${
                        activeSection === item.id
                          ? 'bg-teal-50 text-teal-900 border-l-2 border-teal-600'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${activeSection === item.id ? 'text-teal-700' : 'text-slate-400'}`} />
                      <span className={`text-xs ${activeSection === item.id ? 'font-medium' : 'font-normal'}`}>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {activeSection === 'main' && renderMainSupport()}
            {activeSection === 'explore' && renderExplore()}
            {activeSection === 'following' && renderFollowing()}
            {activeSection === 'foryou' && renderForYou()}
          </div>
        </div>
      </div>
    </div>
  );
}
