import { useState } from 'react';
import { Send, Sparkles, AlertCircle, FileText, MapPin, Phone, Bookmark } from 'lucide-react';
import { Link } from 'react-router';

export function SmartAssistantPage() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string; resources?: Array<{ title: string; link: string; type: string }> }>>([
    {
      role: 'assistant',
      content: "Hello! I'm your SafeStart assistant. I can help you with questions about healthcare, housing, legal rights, jobs, culture, and more. What situation are you dealing with today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    "How do I get a health card?",
    "What are my rights as a tenant?",
    "How do I open a bank account?",
    "What should I do if stopped by police?",
    "Where can I find free language classes?",
    "How do I prepare for Canadian winter?"
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages([...messages, { role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (question: string): { role: 'assistant'; content: string; resources?: Array<{ title: string; link: string; type: string }> } => {
    const lowerQ = question.toLowerCase();

    if (lowerQ.includes('health card') || lowerQ.includes('healthcare')) {
      return {
        role: 'assistant',
        content: "To get a health card in Canada, you'll need to:\n\n1. **Confirm your eligibility** - You must be a resident of the province\n2. **Gather required documents** - Proof of identity, immigration documents, and proof of residency\n3. **Apply at a Service Ontario/BC/etc location** - Visit in person or apply online depending on your province\n4. **Wait for processing** - Usually takes 2-4 weeks\n\nYour health card gives you access to free healthcare services. You should apply as soon as you arrive!\n\nImportant: There may be a 3-month waiting period in some provinces. Ask about interim coverage options.",
        resources: [
          { title: 'Complete Health Card Guide', link: '/article/get-health-card', type: 'article' },
          { title: 'Find Nearest Service Center', link: '/resources', type: 'map' },
          { title: 'Provincial Health Services: 1-866-532-3161', link: 'tel:1-866-532-3161', type: 'phone' }
        ]
      };
    }

    if (lowerQ.includes('tenant') || lowerQ.includes('rent') || lowerQ.includes('landlord')) {
      return {
        role: 'assistant',
        content: "As a tenant in Canada, you have strong legal protections:\n\n**Your Key Rights:**\n• Safe and habitable living conditions\n• Protection from illegal eviction\n• Privacy (landlord must give 24hrs notice to enter)\n• Keep your rental deposit in a trust account\n• No discrimination based on race, religion, family status, etc.\n\n**Illegal Practices:**\n❌ Asking for more than one month's rent as deposit\n❌ Demanding post-dated cheques for entire year\n❌ Evicting without proper legal notice\n❌ Charging unfair fees\n\nIf your landlord violates your rights, contact your provincial tenancy board immediately.",
        resources: [
          { title: 'Tenant Rights Full Guide', link: '/article/tenant-rights', type: 'article' },
          { title: 'Report Landlord Issues', link: '/category/housing-renting', type: 'category' },
          { title: 'Find Legal Aid Services', link: '/resources', type: 'map' }
        ]
      };
    }

    if (lowerQ.includes('bank') || lowerQ.includes('account')) {
      return {
        role: 'assistant',
        content: "Opening a bank account in Canada is straightforward:\n\n**Required Documents:**\n• Two pieces of ID (passport, PR card, study/work permit)\n• Proof of Canadian address (lease, utility bill, official letter)\n• Social Insurance Number (SIN) - recommended but not always required\n\n**Steps:**\n1. Choose a bank (RBC, TD, Scotiabank, BMO, CIBC are major banks)\n2. Book an appointment or visit a branch\n3. Bring your documents\n4. Choose account type (chequing and/or savings)\n\n**Newcomer Programs:** Most banks offer special packages for newcomers with no monthly fees for 1-2 years!\n\n**Tip:** You can often open an account before arriving in Canada if you have a job offer or acceptance letter.",
        resources: [
          { title: 'Banking Guide for Newcomers', link: '/article/open-bank-account', type: 'article' },
          { title: 'Find Nearest Bank Branches', link: '/resources', type: 'map' }
        ]
      };
    }

    if (lowerQ.includes('police') || lowerQ.includes('stopped')) {
      return {
        role: 'assistant',
        content: "If you're stopped by police in Canada:\n\n**Your Rights:**\n• You have the right to remain silent (except giving your name)\n• You have the right to speak with a lawyer\n• You don't have to consent to a search (in most cases)\n• You can ask if you're free to leave\n\n**What to Do:**\n1. Stay calm and be polite\n2. Keep your hands visible\n3. Provide your name and ID if asked\n4. You can ask \"Am I under arrest?\" or \"Am I free to go?\"\n5. If arrested, say \"I want to speak to a lawyer\" and nothing else\n\n**Important:** Your immigration status does not change your basic rights. Police cannot detain you solely for immigration reasons - that's for immigration officers.\n\nIf you feel your rights were violated, file a complaint with the police oversight body in your province.",
        resources: [
          { title: 'Your Rights with Police', link: '/article/police-rights', type: 'article' },
          { title: 'Free Legal Aid Resources', link: '/resources', type: 'map' },
          { title: 'Legal Rights Hotline: 1-800-668-8258', link: 'tel:1-800-668-8258', type: 'phone' }
        ]
      };
    }

    return {
      role: 'assistant',
      content: "I can help you with that! Based on your question, here are some areas I can guide you through:\n\n• **Healthcare** - Finding doctors, getting a health card, emergency services\n• **Housing** - Tenant rights, finding safe housing, avoiding scams\n• **Legal & Rights** - Your rights in Canada, talking to police, legal aid\n• **Jobs & Finance** - SIN number, banking, resumes, work permits\n• **Culture** - Social norms, workplace culture, winter preparation\n• **Community** - Settlement services, language classes, support groups\n\nCould you tell me more specifically what you need help with? Or choose one of the suggested questions below!",
      resources: [
        { title: 'Browse All Categories', link: '/', type: 'category' },
        { title: 'Find Local Resources', link: '/resources', type: 'map' },
        { title: 'Talk to a Real Person', link: '/chat', type: 'chat' }
      ]
    };
  };

  const handleSuggestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-teal-100 p-3 rounded-lg">
              <Sparkles className="w-7 h-7 text-teal-700" />
            </div>
            <h1 className="text-4xl font-semibold text-slate-900">Smart Assistant</h1>
          </div>
          <p className="text-lg text-slate-600">Get personalized guidance for your situation</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-md">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-700 mt-0.5" />
            <div>
              <p className="text-sm text-amber-900">
                <strong>Important:</strong> This assistant provides guidance, not legal or medical diagnosis. For emergencies, call 911. For professional advice, consult with qualified experts.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${message.role === 'user' ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-900'} rounded-lg p-4`}>
                  {message.role === 'assistant' && (
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="w-4 h-4 text-teal-700" />
                      <span className="font-semibold text-sm text-teal-700">SafeStart Assistant</span>
                    </div>
                  )}
                  <div className="whitespace-pre-line leading-relaxed">{message.content}</div>

                  {message.resources && message.resources.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
                      <div className="font-semibold text-sm text-slate-700 mb-2">📚 Helpful Resources:</div>
                      {message.resources.map((resource, idx) => (
                        <Link
                          key={idx}
                          to={resource.link}
                          className="flex items-center space-x-2 p-2.5 bg-white rounded-md hover:bg-slate-50 transition border border-slate-200"
                        >
                          {resource.type === 'article' && <FileText className="w-4 h-4 text-teal-600" />}
                          {resource.type === 'map' && <MapPin className="w-4 h-4 text-emerald-600" />}
                          {resource.type === 'phone' && <Phone className="w-4 h-4 text-red-600" />}
                          {resource.type === 'category' && <Bookmark className="w-4 h-4 text-slate-600" />}
                          <span className="text-sm text-slate-700">{resource.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-teal-700" />
                    <span className="font-semibold text-sm text-teal-700">SafeStart Assistant</span>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <div className="text-sm text-slate-600 mb-3 font-medium">Suggested questions:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {suggestedQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestion(question)}
                    className="text-left p-3 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-md text-sm text-teal-800 transition"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-slate-200 p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="What situation are you dealing with?"
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
          </div>
        </div>
      </div>
    </div>
  );
}
