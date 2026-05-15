import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { Heart, Home, Shield, Globe, Briefcase, Users, ArrowLeft, Bookmark, Share2, CheckCircle } from 'lucide-react';
import { ApiItem, getResourcesByCategory } from '../lib/api';

const categoryData: Record<string, {
  title: string;
  description: string;
  icon: any;
  color: string;
  articles: Array<{
    id: string;
    title: string;
    description: string;
    readTime: string;
    popular?: boolean;
  }>;
}> = {
  'medical-healthcare': {
    title: 'Medical & Healthcare',
    description: 'Find doctors, clinics, health cards, and mental health support',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    articles: [
      {
        id: 'get-health-card',
        title: 'How do I get a health card?',
        description: 'Step-by-step guide to applying for provincial health insurance',
        readTime: '5 min',
        popular: true
      },
      {
        id: 'find-doctor',
        title: 'How to find a family doctor',
        description: 'Tips for finding and registering with a family doctor in your area',
        readTime: '4 min',
        popular: true
      },
      {
        id: 'walk-in-clinics',
        title: 'Understanding walk-in clinics',
        description: 'When to use walk-in clinics vs emergency rooms',
        readTime: '3 min'
      },
      {
        id: 'when-call-911',
        title: 'When to call 911 for medical help',
        description: 'Know when a medical situation is an emergency',
        readTime: '3 min',
        popular: true
      },
      {
        id: 'mental-health',
        title: 'Mental health resources',
        description: 'Free and confidential mental health support services',
        readTime: '6 min'
      },
      {
        id: 'prescription-drugs',
        title: 'Getting prescription medications',
        description: 'How to fill prescriptions and find affordable medications',
        readTime: '4 min'
      }
    ]
  },
  'housing-renting': {
    title: 'Housing & Renting',
    description: 'Tenant rights, safe housing, avoiding scams, and rental guidance',
    icon: Home,
    color: 'from-blue-500 to-cyan-500',
    articles: [
      {
        id: 'tenant-rights',
        title: 'What are my rights as a tenant?',
        description: 'Know your legal protections as a renter in Canada',
        readTime: '7 min',
        popular: true
      },
      {
        id: 'illegal-deposits',
        title: 'What should I do if my landlord asks for an illegal deposit?',
        description: 'Understanding legal vs illegal rental deposits',
        readTime: '5 min',
        popular: true
      },
      {
        id: 'finding-housing',
        title: 'How to find safe housing',
        description: 'Trusted resources and red flags to watch for',
        readTime: '6 min'
      },
      {
        id: 'rental-scams',
        title: 'Avoiding rental scams',
        description: 'Common scams and how to protect yourself',
        readTime: '5 min',
        popular: true
      },
      {
        id: 'before-renting',
        title: 'Questions to ask before renting',
        description: 'Important questions for landlords and property tours',
        readTime: '4 min'
      },
      {
        id: 'breaking-lease',
        title: 'Breaking a lease early',
        description: 'Your options and responsibilities when leaving early',
        readTime: '6 min'
      }
    ]
  },
  'police-law': {
    title: 'Police, Law & Authorities',
    description: 'Your rights, legal aid, immigration support, and safety',
    icon: Shield,
    color: 'from-indigo-500 to-purple-500',
    articles: [
      {
        id: 'police-rights',
        title: 'How do I talk to police in Canada?',
        description: 'Your rights when interacting with law enforcement',
        readTime: '6 min',
        popular: true
      },
      {
        id: 'stopped-by-police',
        title: 'What to do if stopped by police',
        description: 'Step-by-step guide for traffic stops and police encounters',
        readTime: '5 min',
        popular: true
      },
      {
        id: 'legal-rights',
        title: 'Your legal rights in Canada',
        description: 'Fundamental rights under the Canadian Charter',
        readTime: '8 min'
      },
      {
        id: 'reporting-abuse',
        title: 'Reporting abuse or threats',
        description: 'How and where to report domestic violence or threats',
        readTime: '5 min'
      },
      {
        id: 'legal-aid',
        title: 'Getting free legal aid',
        description: 'Access to legal assistance and representation',
        readTime: '5 min'
      },
      {
        id: 'immigration-legal',
        title: 'Immigration legal support',
        description: 'Legal help with immigration matters and status',
        readTime: '7 min'
      }
    ]
  },
  'culture-daily-life': {
    title: 'Culture & Daily Life',
    description: 'Canadian norms, workplace etiquette, and winter preparation',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
    articles: [
      {
        id: 'social-norms',
        title: 'Canadian social norms',
        description: 'Common customs and etiquette in Canadian culture',
        readTime: '6 min',
        popular: true
      },
      {
        id: 'workplace-culture',
        title: 'Workplace etiquette in Canada',
        description: 'Professional norms and expectations at work',
        readTime: '5 min',
        popular: true
      },
      {
        id: 'winter-prep',
        title: 'Preparing for Canadian winter',
        description: 'Essential tips for surviving your first winter',
        readTime: '7 min',
        popular: true
      },
      {
        id: 'public-transit',
        title: 'Using public transportation',
        description: 'How to navigate buses, trains, and transit systems',
        readTime: '4 min'
      },
      {
        id: 'school-university',
        title: 'School and university culture',
        description: 'Academic expectations and campus life',
        readTime: '6 min'
      },
      {
        id: 'tipping-culture',
        title: 'Tipping and service expectations',
        description: 'When and how much to tip in Canada',
        readTime: '3 min'
      }
    ]
  },
  'jobs-banking-documents': {
    title: 'Jobs, Banking & Documents',
    description: 'SIN number, bank accounts, resumes, work permits, and taxes',
    icon: Briefcase,
    color: 'from-amber-500 to-orange-500',
    articles: [
      {
        id: 'sin-number',
        title: 'How to get a SIN number',
        description: 'Apply for your Social Insurance Number',
        readTime: '5 min',
        popular: true
      },
      {
        id: 'open-bank-account',
        title: 'Opening a bank account in Canada',
        description: 'Required documents and choosing the right bank',
        readTime: '6 min',
        popular: true
      },
      {
        id: 'canadian-resume',
        title: 'Writing a Canadian resume',
        description: 'Format and content expectations for job applications',
        readTime: '7 min',
        popular: true
      },
      {
        id: 'work-permits',
        title: 'Understanding work permits',
        description: 'Types of work permits and restrictions',
        readTime: '8 min'
      },
      {
        id: 'filing-taxes',
        title: 'Filing taxes as a newcomer',
        description: 'Tax obligations and how to file your first return',
        readTime: '9 min'
      },
      {
        id: 'credit-score',
        title: 'Building credit in Canada',
        description: 'How credit scores work and how to build credit',
        readTime: '6 min'
      }
    ]
  },
  'mental-health': {
    title: 'Mental Health',
    description: 'Emotional support, counseling, crisis support, and mental wellness resources',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
    articles: [
      {
        id: 'mental-health-support',
        title: 'Free mental health support for newcomers',
        description: 'Access free counseling and mental health services in multiple languages',
        readTime: '5 min',
        popular: true
      },
      {
        id: 'crisis-support',
        title: 'What to do during a mental health crisis',
        description: 'Immediate help and crisis support resources available 24/7',
        readTime: '4 min',
        popular: true
      },
      {
        id: 'adjustment-stress',
        title: 'Dealing with adjustment stress',
        description: 'Common challenges newcomers face and how to cope',
        readTime: '6 min',
        popular: true
      },
      {
        id: 'anxiety-depression',
        title: 'Recognizing anxiety and depression',
        description: 'Signs, symptoms, and when to seek professional help',
        readTime: '5 min'
      },
      {
        id: 'family-counseling',
        title: 'Family counseling services',
        description: 'Support for families adjusting to life in Canada',
        readTime: '4 min'
      },
      {
        id: 'peer-support',
        title: 'Newcomer peer support groups',
        description: 'Connect with others who understand your experience',
        readTime: '3 min'
      }
    ]
  },
  'settlement-worker': {
    title: 'Settlement Worker',
    description: 'Newcomer guidance, forms help, local support workers, and settlement services',
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
    articles: [
      {
        id: 'find-settlement-worker',
        title: 'How to find a settlement worker',
        description: 'Connect with local settlement services in your area',
        readTime: '4 min',
        popular: true
      },
      {
        id: 'settlement-services',
        title: 'What settlement workers can help with',
        description: 'Complete guide to settlement services and support available',
        readTime: '6 min',
        popular: true
      },
      {
        id: 'newcomer-orientation',
        title: 'Free newcomer orientation sessions',
        description: 'Learn about Canadian systems, rights, and resources',
        readTime: '5 min',
        popular: true
      },
      {
        id: 'document-help',
        title: 'Help with immigration documents',
        description: 'Get assistance filling out forms and understanding requirements',
        readTime: '5 min'
      },
      {
        id: 'referral-services',
        title: 'Settlement worker referral services',
        description: 'How settlement workers can connect you to other resources',
        readTime: '4 min'
      },
      {
        id: 'employment-help',
        title: 'Employment support from settlement workers',
        description: 'Job search help, resume writing, and interview preparation',
        readTime: '6 min'
      }
    ]
  },
  'community-support': {
    title: 'Community Support',
    description: 'Newcomer centers, food banks, language classes, and local services',
    icon: Users,
    color: 'from-violet-500 to-fuchsia-500',
    articles: [
      {
        id: 'settlement-services',
        title: 'Finding settlement services',
        description: 'Free programs to help you settle in Canada',
        readTime: '5 min',
        popular: true
      },
      {
        id: 'language-classes',
        title: 'Free language classes',
        description: 'LINC and other free English/French programs',
        readTime: '4 min',
        popular: true
      },
      {
        id: 'food-banks',
        title: 'Accessing food banks',
        description: 'How to find and use food bank services',
        readTime: '3 min'
      },
      {
        id: 'community-groups',
        title: 'Joining community groups',
        description: 'Cultural and religious community organizations',
        readTime: '4 min'
      },
      {
        id: 'volunteer-opportunities',
        title: 'Volunteering in Canada',
        description: 'Build experience and connections through volunteering',
        readTime: '5 min'
      },
      {
        id: 'library-services',
        title: 'Public library services',
        description: 'Free resources, programs, and services at libraries',
        readTime: '4 min'
      }
    ]
  }
};

const categoryAliases: Record<string, string> = {
  healthcare: 'medical-healthcare',
  housing: 'housing-renting',
  'legal-rights': 'police-law'
};

const apiCategoryByPageId: Record<string, string> = {
  'medical-healthcare': 'healthcare',
  'housing-renting': 'housing',
  'police-law': 'legal-rights',
  'mental-health': 'mental-health',
  'settlement-worker': 'settlement-worker',
  'community-support': 'community-support'
};

export function CategoryPage() {
  const { categoryId } = useParams();
  const resolvedCategoryId = categoryAliases[categoryId || ''] || categoryId || '';
  const category = categoryData[resolvedCategoryId];
  const [relatedResources, setRelatedResources] = useState<ApiItem[]>([]);
  const [resourcesLoading, setResourcesLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const apiCategory = apiCategoryByPageId[resolvedCategoryId];

    if (!apiCategory) {
      setRelatedResources([]);
      return;
    }

    async function loadRelatedResources() {
      setResourcesLoading(true);

      try {
        const resources = await getResourcesByCategory(apiCategory);

        if (!isMounted) return;

        setRelatedResources(resources);
      } catch {
        if (!isMounted) return;

        setRelatedResources([]);
      } finally {
        if (isMounted) {
          setResourcesLoading(false);
        }
      }
    }

    loadRelatedResources();

    return () => {
      isMounted = false;
    };
  }, [resolvedCategoryId]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Category not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Return to home</Link>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="w-full bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center space-x-2 text-slate-600 hover:text-slate-900 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>

          <div className="flex items-start space-x-6">
            <div className="bg-slate-100 p-6 rounded-lg">
              <Icon className="w-16 h-16 text-slate-700" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-slate-900">{category.title}</h1>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Popular Articles</h2>
          <p className="text-slate-600">Step-by-step guides to help you navigate this topic</p>
          {resourcesLoading && (
            <p className="text-sm text-slate-500 mt-2">Loading related resources...</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {category.articles.filter(a => a.popular).map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="bg-white rounded-lg border-2 border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-md transition-all p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-md text-xs font-semibold">
                  Popular
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-slate-50 rounded-md transition">
                    <Bookmark className="w-5 h-5 text-slate-400" />
                  </button>
                  <button className="p-2 hover:bg-slate-50 rounded-md transition">
                    <Share2 className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{article.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{article.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">{article.readTime} read</span>
                <span className="text-teal-700 font-medium text-sm">Read guide →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">All Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.articles.filter(a => !a.popular).map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="bg-white rounded-lg border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{article.title}</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">{article.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">{article.readTime} read</span>
                <span className="text-teal-700 font-medium text-sm">Read →</span>
              </div>
            </Link>
          ))}
        </div>

        {relatedResources.length > 0 && (
          <div className="mt-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">Related Resources</h2>
              <p className="text-slate-600">Live sample resources from the SafeStart backend</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  <div className="h-44 bg-slate-100">
                    <img
                      src={resource.imageUrl}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs rounded font-medium">
                        {resource.location}
                      </span>
                      {resource.urgent && (
                        <span className="px-2.5 py-1 bg-red-100 text-red-800 text-xs rounded font-medium">
                          Urgent
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{resource.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{resource.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 bg-slate-100 border border-slate-200 rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <div className="bg-teal-700 text-white p-3 rounded-lg">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Still have questions?</h3>
              <p className="text-slate-600 mb-4">Get personalized help from our smart assistant or talk to a real person</p>
              <div className="flex space-x-4">
                <Link to="/assistant" className="px-6 py-2.5 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition font-medium text-sm">
                  Ask Assistant
                </Link>
                <Link to="/chat" className="px-6 py-2.5 bg-white text-teal-700 rounded-md hover:bg-slate-50 transition font-medium border-2 border-teal-700 text-sm">
                  Live Chat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
