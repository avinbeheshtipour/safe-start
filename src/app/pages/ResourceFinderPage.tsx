import { useEffect, useState } from 'react';
import { MapPin, Search, Filter, Heart, Home, Building2, Scale, UtensilsCrossed, GraduationCap, Phone, Clock, Globe, Star, Navigation } from 'lucide-react';
import { ApiItem, getResources } from '../lib/api';

interface Resource {
  id: number;
  name: string;
  type: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  languages: string[];
  free: boolean;
  rating: number;
  distance: string;
  description: string;
}

const mockResources: Resource[] = [
  {
    id: 1,
    name: 'Toronto Settlement Services',
    type: 'Settlement Agency',
    address: '123 Main Street',
    city: 'Toronto, ON',
    phone: '416-555-0100',
    hours: 'Mon-Fri 9am-5pm',
    languages: ['English', 'Français', 'فارسی', 'العربية'],
    free: true,
    rating: 4.8,
    distance: '1.2 km',
    description: 'Free settlement services including orientation, job search help, and language classes'
  },
  {
    id: 2,
    name: 'Community Health Clinic',
    type: 'Walk-in Clinic',
    address: '456 Queen St W',
    city: 'Toronto, ON',
    phone: '416-555-0200',
    hours: 'Mon-Sat 8am-8pm',
    languages: ['English', 'Français', 'Español', '中文'],
    free: false,
    rating: 4.5,
    distance: '2.4 km',
    description: 'Walk-in medical clinic accepting health cards. No appointment needed.'
  },
  {
    id: 3,
    name: 'Legal Aid Ontario',
    type: 'Legal Services',
    address: '789 Bay Street',
    city: 'Toronto, ON',
    phone: '416-555-0300',
    hours: 'Mon-Fri 9am-4:30pm',
    languages: ['English', 'Français'],
    free: true,
    rating: 4.6,
    distance: '3.1 km',
    description: 'Free legal aid for eligible low-income residents. Immigration, tenant, and family law.'
  },
  {
    id: 4,
    name: 'Daily Bread Food Bank',
    type: 'Food Bank',
    address: '191 New Toronto St',
    city: 'Toronto, ON',
    phone: '416-555-0400',
    hours: 'Tue, Thu 10am-2pm',
    languages: ['English', 'Français', 'العربية'],
    free: true,
    rating: 4.7,
    distance: '4.5 km',
    description: 'Emergency food assistance for individuals and families in need. No ID required.'
  },
  {
    id: 5,
    name: 'YMCA Newcomer Services',
    type: 'Settlement Agency',
    address: '20 Grosvenor St',
    city: 'Toronto, ON',
    phone: '416-555-0500',
    hours: 'Mon-Sat 8am-6pm',
    languages: ['English', 'Français', 'हिन्दी', 'اردو'],
    free: true,
    rating: 4.9,
    distance: '1.8 km',
    description: 'Comprehensive settlement programs, employment services, and language training.'
  },
  {
    id: 6,
    name: 'Toronto Public Library - Central',
    type: 'Library',
    address: '789 Yonge St',
    city: 'Toronto, ON',
    phone: '416-555-0600',
    hours: 'Mon-Sat 9am-8pm, Sun 1pm-5pm',
    languages: ['English', 'Français', '中文', 'Tamil'],
    free: true,
    rating: 4.8,
    distance: '2.7 km',
    description: 'Free library card, internet access, language learning resources, and settlement programs.'
  },
  {
    id: 7,
    name: 'Immigrant Women Services',
    type: 'Support Center',
    address: '489 College St',
    city: 'Toronto, ON',
    phone: '416-555-0700',
    hours: 'Mon-Fri 10am-6pm',
    languages: ['English', 'Français', 'Español', 'فارسی'],
    free: true,
    rating: 4.7,
    distance: '3.9 km',
    description: 'Support services for immigrant women including counseling, job training, and childcare.'
  },
  {
    id: 8,
    name: 'Toronto Central Hospital',
    type: 'Hospital',
    address: '585 University Ave',
    city: 'Toronto, ON',
    phone: '416-555-0800',
    hours: '24/7 Emergency',
    languages: ['English', 'Français', '中文', 'Tamil'],
    free: false,
    rating: 4.4,
    distance: '2.2 km',
    description: 'Full-service hospital with 24/7 emergency department. Health card accepted.'
  }
];

const resourceTypeByCategory: Record<string, string> = {
  healthcare: 'Walk-in Clinic',
  housing: 'Support Center',
  'legal-rights': 'Legal Services',
  'mental-health': 'Support Center',
  'settlement-worker': 'Settlement Agency',
  'community-support': 'Support Center'
};

function mapApiItemToResource(item: ApiItem): Resource {
  const type = resourceTypeByCategory[item.category] || 'Support Center';

  return {
    id: item.id,
    name: item.title,
    type,
    address: item.location === 'Canada-wide' ? 'Available Canada-wide' : 'Local service area',
    city: item.location,
    phone: item.urgent ? '911 / local crisis line' : 'Contact local office',
    hours: item.urgent ? 'Urgent support available' : 'Hours vary by location',
    languages: ['English', 'Français'],
    free: item.category !== 'healthcare',
    rating: item.urgent ? 4.9 : 4.6,
    distance: item.location === 'Canada-wide' ? 'Canada-wide' : 'Nearby',
    description: item.description
  };
}

export function ResourceFinderPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [freeOnly, setFreeOnly] = useState(false);
  const [openNow, setOpenNow] = useState(false);
  const [resources, setResources] = useState<Resource[]>(mockResources);
  const [resourcesLoading, setResourcesLoading] = useState(false);
  const [usingFallbackResources, setUsingFallbackResources] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadResources() {
      setResourcesLoading(true);

      try {
        const apiResources = await getResources();

        if (!isMounted) return;

        setResources(apiResources.map(mapApiItemToResource));
        setUsingFallbackResources(false);
      } catch {
        if (!isMounted) return;

        setResources(mockResources);
        setUsingFallbackResources(true);
      } finally {
        if (isMounted) {
          setResourcesLoading(false);
        }
      }
    }

    loadResources();

    return () => {
      isMounted = false;
    };
  }, []);

  const baseResourceTypes = [
    { name: 'All', icon: MapPin },
    { name: 'Walk-in Clinic', icon: Heart },
    { name: 'Hospital', icon: Building2 },
    { name: 'Settlement Agency', icon: Home },
    { name: 'Legal Services', icon: Scale },
    { name: 'Food Bank', icon: UtensilsCrossed },
    { name: 'Library', icon: GraduationCap },
    { name: 'Support Center', icon: Heart }
  ];

  const resourceTypes = baseResourceTypes.map((type) => ({
    ...type,
    count: type.name === 'All'
      ? resources.length
      : resources.filter((resource) => resource.type === type.name).length
  }));

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    const matchesFree = !freeOnly || resource.free;
    return matchesSearch && matchesType && matchesFree;
  });

  const getTypeIcon = (type: string) => {
    const typeObj = resourceTypes.find(t => t.name === type);
    return typeObj ? typeObj.icon : MapPin;
  };

  return (
    <div className="w-full bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <MapPin className="w-7 h-7 text-emerald-700" />
            </div>
            <h1 className="text-4xl font-semibold text-slate-900">Resource Finder</h1>
          </div>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Find nearby clinics, hospitals, settlement agencies, food banks, and more
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, locations, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800 bg-white"
                />
              </div>
              <button className="px-6 py-3 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition flex items-center justify-center space-x-2 font-medium">
                <Navigation className="w-5 h-5" />
                <span>Use My Location</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="w-5 h-5 text-slate-700" />
                <h3 className="font-semibold text-slate-900">Filters</h3>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-slate-800 mb-3">Resource Type</h4>
                <div className="space-y-2">
                  {resourceTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.name}
                        onClick={() => setSelectedType(type.name)}
                        className={`w-full flex items-center justify-between p-3 rounded-md transition ${selectedType === type.name ? 'bg-emerald-50 border-2 border-emerald-500' : 'hover:bg-slate-50 border-2 border-transparent'}`}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className="w-4 h-4 text-slate-600" />
                          <span className="text-sm text-slate-800">{type.name}</span>
                        </div>
                        <span className="text-xs text-slate-500">({type.count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-slate-800 mb-3">Options</h4>
                <label className="flex items-center space-x-2.5 mb-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={freeOnly}
                    onChange={(e) => setFreeOnly(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                  />
                  <span className="text-sm text-slate-700 group-hover:text-slate-900">Free services only</span>
                </label>
                <label className="flex items-center space-x-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={openNow}
                    onChange={(e) => setOpenNow(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                  />
                  <span className="text-sm text-slate-700 group-hover:text-slate-900">Open now</span>
                </label>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="font-medium text-slate-800 mb-2">Need Help?</h4>
                <p className="text-xs text-slate-600 mb-3">Can't find what you're looking for?</p>
                <button className="w-full px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition text-sm font-medium">
                  Ask Assistant
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                {filteredResources.length} Resources Found
              </h2>
              <p className="text-slate-600">
                {resourcesLoading
                  ? 'Loading resources...'
                  : usingFallbackResources
                    ? 'Showing sample resources while the backend is unavailable'
                    : 'Showing resources from the SafeStart backend'}
              </p>
            </div>

            <div className="space-y-5">
              {filteredResources.map((resource) => {
                const Icon = getTypeIcon(resource.type);
                return (
                  <div
                    key={resource.id}
                    className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-emerald-100 p-3 rounded-lg">
                          <Icon className="w-6 h-6 text-emerald-700" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">{resource.name}</h3>
                          <div className="flex items-center flex-wrap gap-2 mb-2">
                            <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs rounded font-medium">{resource.type}</span>
                            {resource.free && (
                              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs rounded font-medium">Free</span>
                            )}
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-amber-500 fill-current" />
                              <span className="text-sm font-medium text-slate-700">{resource.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-slate-600 mb-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">{resource.distance}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-5 leading-relaxed">{resource.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                      <div className="flex items-start space-x-2.5">
                        <MapPin className="w-4 h-4 text-slate-500 mt-0.5" />
                        <div className="text-sm">
                          <div className="text-slate-800">{resource.address}</div>
                          <div className="text-slate-600">{resource.city}</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2.5">
                        <Clock className="w-4 h-4 text-slate-500 mt-0.5" />
                        <div className="text-sm text-slate-800">{resource.hours}</div>
                      </div>

                      <div className="flex items-start space-x-2.5">
                        <Phone className="w-4 h-4 text-slate-500 mt-0.5" />
                        <a href={`tel:${resource.phone}`} className="text-sm text-teal-700 hover:text-teal-800 hover:underline">
                          {resource.phone}
                        </a>
                      </div>

                      <div className="flex items-start space-x-2.5">
                        <Globe className="w-4 h-4 text-slate-500 mt-0.5" />
                        <div className="text-sm text-slate-800">
                          {resource.languages.slice(0, 2).join(', ')}
                          {resource.languages.length > 2 && ` +${resource.languages.length - 2} more`}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 px-4 py-2.5 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition font-medium text-sm">
                        Get Directions
                      </button>
                      <button className="px-4 py-2.5 border-2 border-slate-300 rounded-md hover:bg-slate-50 transition text-sm font-medium text-slate-700">
                        Save
                      </button>
                      <button className="px-4 py-2.5 border-2 border-slate-300 rounded-md hover:bg-slate-50 transition text-sm font-medium text-slate-700">
                        Share
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
