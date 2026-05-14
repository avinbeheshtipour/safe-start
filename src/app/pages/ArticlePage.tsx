import { useParams, Link } from 'react-router';
import { ArrowLeft, Clock, Bookmark, Share2, CheckCircle, AlertCircle, FileText, Phone, MapPin, ExternalLink } from 'lucide-react';

const articleData: Record<string, {
  title: string;
  category: string;
  readTime: string;
  lastUpdated: string;
  content: {
    intro: string;
    steps?: Array<{ title: string; description: string; details?: string[] }>;
    checklist?: string[];
    documents?: string[];
    tips?: string[];
    warnings?: string[];
    resources?: Array<{ name: string; link: string; type: string }>;
  };
}> = {
  'mental-health-support': {
    title: 'Free mental health support for newcomers',
    category: 'Mental Health',
    readTime: '5 min',
    lastUpdated: 'May 10, 2026',
    content: {
      intro: "Moving to a new country can be stressful and overwhelming. It's completely normal to feel anxious, sad, or lonely during this transition. Free mental health support is available to all newcomers in Canada.",
      steps: [
        {
          title: 'Call 988 for immediate help',
          description: 'The 988 Suicide Crisis Helpline provides 24/7 free mental health support in multiple languages.',
          details: [
            'Available 24 hours a day, 7 days a week',
            'Confidential and free',
            'Trained counselors who understand newcomer challenges',
            'Support in multiple languages'
          ]
        },
        {
          title: 'Access free counseling services',
          description: 'Many settlement agencies offer free mental health counseling for newcomers.',
          details: [
            'No health card required for initial sessions',
            'Culturally sensitive counselors',
            'Individual and family counseling available',
            'Help with adjustment stress, anxiety, and depression'
          ]
        },
        {
          title: 'Join newcomer support groups',
          description: 'Connect with others who understand what you\'re going through.',
          details: [
            'Free peer support groups in most cities',
            'Language-specific groups available',
            'Share experiences in a safe, supportive environment',
            'Make friends and build community connections'
          ]
        }
      ],
      tips: [
        'Mental health challenges are common during settlement - you\'re not alone',
        'Many services are available even before you get your health card',
        'Taking care of your mental health is just as important as physical health',
        'Asking for help is a sign of strength, not weakness'
      ],
      resources: [
        { name: '988 Suicide Crisis Helpline', link: 'tel:988', type: 'phone' },
        { name: 'Find Mental Health Services', link: '/resources', type: 'internal' },
        { name: 'Crisis Text Line: Text HOME to 686868', link: 'sms:686868', type: 'phone' }
      ]
    }
  },
  'find-settlement-worker': {
    title: 'How to find a settlement worker',
    category: 'Settlement Worker',
    readTime: '4 min',
    lastUpdated: 'May 11, 2026',
    content: {
      intro: "Settlement workers are trained professionals who help newcomers navigate life in Canada. They can assist with everything from filling out forms to finding housing, employment, and community connections - all for free.",
      steps: [
        {
          title: 'Find your local settlement agency',
          description: 'Settlement services are available in most Canadian cities.',
          details: [
            'Search online for "settlement services" + your city name',
            'Visit the IRCC website for a list of funded agencies',
            'Call 211 for referrals to local services',
            'Ask other newcomers for recommendations'
          ]
        },
        {
          title: 'Book an appointment',
          description: 'Most agencies offer walk-in hours and appointments.',
          details: [
            'No appointment needed for initial visit at most agencies',
            'Bring your immigration documents (PR card, work permit, study permit)',
            'Services are completely free',
            'Interpreters available if you need language support'
          ]
        },
        {
          title: 'What settlement workers can help with',
          description: 'Settlement workers provide comprehensive support.',
          details: [
            'Help filling out government forms (health card, SIN, etc.)',
            'Job search support and resume writing',
            'Understanding your rights and responsibilities',
            'Referrals to other services (housing, legal aid, counseling)',
            'Language class registration (LINC)',
            'Community connections and newcomer events'
          ]
        }
      ],
      tips: [
        'Services are free and confidential - you should never have to pay',
        'Settlement workers are there to help, not judge',
        'Don\'t wait - the sooner you connect, the easier your settlement will be',
        'You can visit as many times as you need'
      ],
      resources: [
        { name: 'Find Settlement Services Near You', link: '/resources', type: 'internal' },
        { name: 'IRCC Settlement Services', link: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/pre-arrival-services.html', type: 'external' },
        { name: '211 Referral Line', link: 'tel:211', type: 'phone' }
      ]
    }
  },
  'get-health-card': {
    title: 'How do I get a health card?',
    category: 'Medical & Healthcare',
    readTime: '5 min',
    lastUpdated: 'May 10, 2026',
    content: {
      intro: "Getting a provincial health card is one of the most important steps after arriving in Canada. This card gives you access to free healthcare services including doctor visits, hospital care, and emergency services.",
      steps: [
        {
          title: 'Check your eligibility',
          description: 'You must be a resident of the province to qualify for health insurance.',
          details: [
            'You need a valid study permit, work permit, or permanent resident status',
            'You must plan to stay in the province for at least 6 months',
            'Some provinces have a 3-month waiting period for new residents'
          ]
        },
        {
          title: 'Gather required documents',
          description: 'Collect the following documents before your application:',
          details: [
            'Proof of identity (passport, birth certificate)',
            'Proof of Canadian immigration status (PR card, study/work permit, visa)',
            'Proof of residency in the province (lease agreement, utility bill, bank statement)',
            'Original documents are usually required - photocopies may not be accepted'
          ]
        },
        {
          title: 'Submit your application',
          description: 'You can apply in person or online depending on your province:',
          details: [
            'Ontario: Visit a ServiceOntario location or apply online',
            'BC: Visit an ICBC driver licensing office or Service BC location',
            'Alberta: Visit a registry agent office',
            'Quebec: Apply for a RAMQ card at a service center',
            'Other provinces: Check your provincial health ministry website'
          ]
        },
        {
          title: 'Wait for your card',
          description: 'Processing times and delivery:',
          details: [
            'Most provinces: 2-4 weeks to receive your card by mail',
            'You may receive a temporary paper card to use while waiting',
            'Your coverage may start on the date you applied or after a waiting period'
          ]
        }
      ],
      warnings: [
        'Some provinces have a 3-month waiting period. During this time, you may need private health insurance.',
        'Keep your health card with you at all times - you\'ll need it for any medical appointment.',
        'If you move to a different province, you need to apply for a new health card in that province.',
        'Health cards do NOT cover prescription medications, dental care, or eye care (except for children in some provinces).'
      ],
      documents: [
        'Valid passport or travel document',
        'Immigration document (PR card, study permit, work permit)',
        'Proof of address (lease, utility bill, bank statement dated within 30 days)',
        'Social Insurance Number (if you have one)'
      ],
      tips: [
        'Apply as soon as you arrive - don\'t wait! The sooner you apply, the sooner your coverage starts.',
        'If you have a 3-month waiting period, ask about interim health coverage programs for newcomers.',
        'Make a photocopy of your health card and keep it separate from the original.',
        'Report a lost or stolen health card immediately to prevent identity theft.'
      ],
      resources: [
        { name: 'ServiceOntario - Apply for Health Card', link: 'https://www.ontario.ca/page/apply-ohip', type: 'external' },
        { name: 'Find Nearest Service Center', link: '/resources', type: 'internal' },
        { name: 'Provincial Health Info Line: 1-866-532-3161', link: 'tel:1-866-532-3161', type: 'phone' }
      ]
    }
  },
  'tenant-rights': {
    title: 'What are my rights as a tenant?',
    category: 'Housing & Renting',
    readTime: '7 min',
    lastUpdated: 'May 8, 2026',
    content: {
      intro: "As a tenant in Canada, you have strong legal protections under provincial law. Understanding your rights helps you avoid scams, unfair treatment, and illegal evictions.",
      checklist: [
        'Safe and habitable living conditions',
        'Protection from illegal eviction',
        'Privacy rights (landlord must give notice)',
        'Security deposit protection',
        'No discrimination',
        'Right to have guests',
        'Right to organize with other tenants'
      ],
      steps: [
        {
          title: 'Your Right to Safe Housing',
          description: 'Your landlord must provide:',
          details: [
            'Working heat, water, and electricity',
            'Functioning locks on doors and windows',
            'No pest infestations (bedbugs, mice, cockroaches)',
            'Safe building structure and fire exits',
            'Working smoke and carbon monoxide detectors',
            'Repairs must be done in a reasonable time frame'
          ]
        },
        {
          title: 'Your Privacy Rights',
          description: 'Your landlord cannot enter your unit without permission except:',
          details: [
            'They must give 24 hours written notice for most visits',
            'Entry is only allowed during reasonable hours (usually 8am-8pm)',
            'Emergency situations (fire, flood, gas leak)',
            'If you gave permission for a specific time',
            'Your landlord cannot harass you or enter repeatedly without reason'
          ]
        },
        {
          title: 'Security Deposits & Rent',
          description: 'Rules about money:',
          details: [
            'Maximum deposit is usually one month\'s rent (varies by province)',
            'Landlord must keep deposits in a trust account',
            'You get interest on your deposit in some provinces',
            'Landlord cannot ask for post-dated cheques for entire year (in Ontario)',
            'Rent increases must follow legal limits and require proper notice',
            'You cannot be evicted for being late on rent just once'
          ]
        },
        {
          title: 'Eviction Protection',
          description: 'Your landlord cannot evict you without following legal process:',
          details: [
            'They must give proper written notice (30-60 days depending on reason)',
            'They need a valid legal reason (non-payment of rent, damage to property, etc.)',
            'They cannot change locks or force you out without a tribunal/court order',
            'You have the right to fight an eviction at a hearing',
            'If you pay owed rent before the hearing, eviction may be canceled'
          ]
        }
      ],
      warnings: [
        'Never pay rent in cash without getting a written receipt.',
        'Read your lease carefully before signing. Get it translated if needed.',
        'Take photos/videos of the apartment condition when you move in.',
        'Keep copies of ALL communication with your landlord (emails, texts, letters).',
        'If your landlord violates your rights, file a complaint with the provincial tenancy board immediately.'
      ],
      tips: [
        'Join a tenant union or association in your area for support and advice.',
        'Know the difference between "repairs" (landlord pays) and "damage" (you pay).',
        'Get renter\'s insurance - it\'s cheap and protects your belongings.',
        'If you have problems, try to resolve them in writing before going to the tribunal.'
      ],
      resources: [
        { name: 'Complete Tenant Rights Guide', link: '/category/housing-renting', type: 'internal' },
        { name: 'File a Complaint with Tenant Board', link: 'https://tribunalsontario.ca/ltb/', type: 'external' },
        { name: 'Find Free Legal Aid', link: '/resources', type: 'internal' },
        { name: 'Tenant Hotline: 1-888-772-9277', link: 'tel:1-888-772-9277', type: 'phone' }
      ]
    }
  },
  'police-rights': {
    title: 'How do I talk to police in Canada?',
    category: 'Police, Law & Authorities',
    readTime: '6 min',
    lastUpdated: 'May 9, 2026',
    content: {
      intro: "Knowing your rights when dealing with police in Canada is important for all newcomers. Canadian law protects everyone, regardless of immigration status. This guide explains what to do if you're stopped, questioned, or arrested by police.",
      steps: [
        {
          title: 'Your Basic Rights',
          description: 'The Canadian Charter of Rights and Freedoms protects everyone in Canada:',
          details: [
            'You have the right to remain silent (except giving your name)',
            'You have the right to speak with a lawyer before answering questions',
            'You are protected from unreasonable search and seizure',
            'You cannot be detained or arrested without a valid reason',
            'You have the right to know why you\'re being arrested',
            'These rights apply to EVERYONE - citizens, permanent residents, visitors, and undocumented people'
          ]
        },
        {
          title: 'If Police Stop You',
          description: 'What to do during a police encounter:',
          details: [
            'Stay calm and be polite - don\'t argue or resist',
            'Keep your hands visible at all times',
            'Ask "Am I free to leave?" If yes, you can walk away',
            'You must give your name if asked, but nothing else',
            'You don\'t have to answer other questions - you can say "I prefer not to answer"',
            'You can ask for the officer\'s name and badge number'
          ]
        },
        {
          title: 'Search and Seizure',
          description: 'When police can search you:',
          details: [
            'Police need "reasonable grounds" to search you',
            'You can refuse a search if you\'re not under arrest',
            'If police search you anyway, don\'t resist - but say "I do not consent to this search"',
            'Police can search your car if they smell drugs or see weapons',
            'Police cannot search your phone without a warrant (usually)',
            'Keep a record of what happened for your lawyer'
          ]
        },
        {
          title: 'If You\'re Arrested',
          description: 'Important steps:',
          details: [
            'Ask "Why am I being arrested?" - they must tell you',
            'Say "I want to speak to a lawyer" and nothing else',
            'Do NOT resist arrest - it can lead to additional charges',
            'You have the right to call a lawyer within a reasonable time',
            'Legal aid is free if you can\'t afford a lawyer',
            'You don\'t have to answer any questions until you talk to a lawyer',
            'Immigration officers are different from police - know the difference'
          ]
        }
      ],
      warnings: [
        'Police cannot arrest or detain you ONLY because of immigration status - that\'s for immigration officers.',
        'Never lie to police or give false ID - it\'s a crime and makes things worse.',
        'Don\'t sign anything you don\'t understand - ask for a translator or lawyer first.',
        'If you feel your rights were violated, file a complaint with the police oversight body in your province.',
        'Being polite and respectful is important, but you still have the right to remain silent.'
      ],
      tips: [
        'Memorize a lawyer\'s phone number or the Legal Aid number: 1-800-668-8258',
        'Keep your immigration documents with you, but you don\'t have to show them to regular police.',
        'If police come to your home, you don\'t have to let them in unless they have a warrant.',
        'Record the interaction (video/audio) if safe to do so - it\'s legal in Canada.',
        'Tell someone you trust immediately if you\'re arrested.'
      ],
      resources: [
        { name: 'Your Legal Rights Full Guide', link: '/category/police-law', type: 'internal' },
        { name: 'Free Legal Aid Services', link: '/resources', type: 'internal' },
        { name: 'Legal Aid Hotline: 1-800-668-8258', link: 'tel:1-800-668-8258', type: 'phone' },
        { name: 'File Police Complaint', link: 'https://www.ontario.ca/page/filing-complaint-about-police', type: 'external' }
      ]
    }
  }
};

export function ArticlePage() {
  const { articleId } = useParams();
  const article = articleData[articleId || ''];

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Article not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Return to home</Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link to="/" className="inline-flex items-center space-x-2 text-teal-700 hover:text-teal-800 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to categories</span>
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-md text-sm font-medium">
              {article.category}
            </span>
            <span className="flex items-center space-x-1.5 text-slate-600 text-sm">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} read</span>
            </span>
          </div>

          <h1 className="text-4xl font-semibold text-slate-900 mb-5 leading-tight">{article.title}</h1>

          <div className="flex items-center justify-between">
            <p className="text-slate-600">Last updated: {article.lastUpdated}</p>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-slate-50 rounded-md transition">
                <Bookmark className="w-5 h-5 text-slate-500" />
              </button>
              <button className="p-2 hover:bg-slate-50 rounded-md transition">
                <Share2 className="w-5 h-5 text-slate-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-md mb-10">
          <p className="text-slate-800 leading-relaxed">{article.content.intro}</p>
        </div>

        {article.content.steps && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">Step-by-Step Guide</h2>
            <div className="space-y-6">
              {article.content.steps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg border border-slate-200 shadow-sm p-7">
                  <div className="flex items-start space-x-5">
                    <div className="bg-teal-700 text-white rounded-lg w-9 h-9 flex items-center justify-center flex-shrink-0 font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-700 mb-4 leading-relaxed">{step.description}</p>
                      {step.details && (
                        <ul className="space-y-2.5">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2.5">
                              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700 leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {article.content.checklist && (
          <div className="mb-12 bg-white rounded-lg border border-slate-200 shadow-sm p-7">
            <h2 className="text-2xl font-semibold text-slate-900 mb-5">Your Rights Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {article.content.checklist.map((item, index) => (
                <div key={index} className="flex items-center space-x-2.5 p-3 bg-emerald-50 border border-emerald-200 rounded-md">
                  <CheckCircle className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                  <span className="text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {article.content.documents && (
          <div className="mb-12 bg-white rounded-lg border border-slate-200 shadow-sm p-7">
            <h2 className="text-2xl font-semibold text-slate-900 mb-5 flex items-center">
              <FileText className="w-6 h-6 mr-2.5 text-teal-700" />
              Required Documents
            </h2>
            <ul className="space-y-3">
              {article.content.documents.map((doc, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-700 rounded-full mt-2"></div>
                  <span className="text-slate-700 leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {article.content.warnings && (
          <div className="mb-12 bg-amber-50 border-l-4 border-amber-600 rounded-md p-6">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Important Warnings</h2>
                <ul className="space-y-3">
                  {article.content.warnings.map((warning, index) => (
                    <li key={index} className="text-slate-800 leading-relaxed">
                      <strong className="text-amber-800">⚠️</strong> {warning}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {article.content.tips && (
          <div className="mb-12 bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-5">💡 Pro Tips</h2>
            <ul className="space-y-3">
              {article.content.tips.map((tip, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
                  <span className="text-slate-700 leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {article.content.resources && (
          <div className="mb-12 bg-white rounded-lg border border-slate-200 shadow-sm p-7">
            <h2 className="text-2xl font-semibold text-slate-900 mb-5">Helpful Resources</h2>
            <div className="space-y-3">
              {article.content.resources.map((resource, index) => (
                resource.type === 'phone' ? (
                  <a
                    key={index}
                    href={resource.link}
                    className="flex items-center space-x-3 p-4 bg-red-50 hover:bg-red-100 border border-red-200 rounded-md transition"
                  >
                    <Phone className="w-5 h-5 text-red-700" />
                    <span className="text-slate-800 font-medium">{resource.name}</span>
                  </a>
                ) : resource.type === 'internal' ? (
                  <Link
                    key={index}
                    to={resource.link}
                    className="flex items-center space-x-3 p-4 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-md transition"
                  >
                    <MapPin className="w-5 h-5 text-teal-700" />
                    <span className="text-slate-800 font-medium">{resource.name}</span>
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md transition"
                  >
                    <ExternalLink className="w-5 h-5 text-slate-600" />
                    <span className="text-slate-800 font-medium">{resource.name}</span>
                  </a>
                )
              ))}
            </div>
          </div>
        )}

        <div className="bg-slate-100 border border-slate-200 rounded-lg p-10 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Still have questions?</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">Get personalized help from our assistant or talk to real people</p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/assistant"
              className="px-6 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition font-medium"
            >
              Ask Assistant
            </Link>
            <Link
              to="/chat"
              className="px-6 py-3 bg-white text-teal-700 border-2 border-teal-700 rounded-md hover:bg-slate-50 transition font-medium"
            >
              Live Chat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
