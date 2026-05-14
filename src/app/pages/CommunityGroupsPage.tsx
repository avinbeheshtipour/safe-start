import { Users, MapPin, Calendar, Heart, Home, Briefcase, GraduationCap, Globe } from 'lucide-react';
import { Link } from 'react-router';

export function CommunityGroupsPage() {
  const groups = [
    {
      id: 1,
      name: 'Newcomers Toronto',
      members: 1247,
      location: 'Toronto, ON',
      category: 'General',
      icon: Users,
      color: 'bg-blue-50',
      iconColor: 'text-blue-700',
      borderColor: 'hover:border-blue-300',
      description: 'Connect with other newcomers in Toronto. Share experiences, ask questions, and make friends.',
      nextEvent: 'Coffee Meetup - May 15, 2026',
      tags: ['Social', 'Networking', 'Support']
    },
    {
      id: 2,
      name: 'Vancouver Housing Support',
      members: 843,
      location: 'Vancouver, BC',
      category: 'Housing',
      icon: Home,
      color: 'bg-teal-50',
      iconColor: 'text-teal-700',
      borderColor: 'hover:border-teal-300',
      description: 'Help finding apartments, understanding tenant rights, and navigating the Vancouver rental market.',
      nextEvent: 'Tenant Rights Workshop - May 18, 2026',
      tags: ['Housing', 'Legal', 'Resources']
    },
    {
      id: 3,
      name: 'International Students Montreal',
      members: 2156,
      location: 'Montreal, QC',
      category: 'Students',
      icon: GraduationCap,
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-700',
      borderColor: 'hover:border-indigo-300',
      description: 'Student community for international students at Montreal universities and colleges.',
      nextEvent: 'Study Group - May 12, 2026',
      tags: ['Students', 'Academic', 'Social']
    },
    {
      id: 4,
      name: 'Healthcare Navigators',
      members: 967,
      location: 'Canada-wide',
      category: 'Healthcare',
      icon: Heart,
      color: 'bg-red-50',
      iconColor: 'text-red-700',
      borderColor: 'hover:border-red-300',
      description: 'Get help understanding the Canadian healthcare system, finding doctors, and accessing services.',
      nextEvent: 'Health Card Q&A - May 14, 2026',
      tags: ['Healthcare', 'Resources', 'Support']
    },
    {
      id: 5,
      name: 'Job Seekers Canada',
      members: 1891,
      location: 'Canada-wide',
      category: 'Employment',
      icon: Briefcase,
      color: 'bg-amber-50',
      iconColor: 'text-amber-700',
      borderColor: 'hover:border-amber-300',
      description: 'Resume help, interview tips, job postings, and career advice for newcomers.',
      nextEvent: 'Resume Workshop - May 16, 2026',
      tags: ['Jobs', 'Career', 'Networking']
    },
    {
      id: 6,
      name: 'Calgary Families',
      members: 634,
      location: 'Calgary, AB',
      category: 'Families',
      icon: Users,
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-700',
      borderColor: 'hover:border-emerald-300',
      description: 'Community for newcomer families in Calgary. School info, childcare, family activities.',
      nextEvent: 'Family Picnic - May 20, 2026',
      tags: ['Families', 'Children', 'Social']
    },
    {
      id: 7,
      name: 'Persian Community Canada',
      members: 1523,
      location: 'Canada-wide',
      category: 'Cultural',
      icon: Globe,
      color: 'bg-slate-50',
      iconColor: 'text-slate-700',
      borderColor: 'hover:border-slate-300',
      description: 'فارسی-speaking community for Persian newcomers. Cultural events, support, and friendship.',
      nextEvent: 'Nowruz Celebration - March 2027',
      tags: ['Cultural', 'Persian', 'Social']
    },
    {
      id: 8,
      name: 'Ottawa Settlement Services',
      members: 789,
      location: 'Ottawa, ON',
      category: 'Services',
      icon: Users,
      color: 'bg-blue-50',
      iconColor: 'text-blue-700',
      borderColor: 'hover:border-blue-300',
      description: 'Connect with settlement workers, access free programs, and get help navigating Canadian systems.',
      nextEvent: 'Orientation Session - May 13, 2026',
      tags: ['Services', 'Resources', 'Support']
    },
    {
      id: 9,
      name: 'Mental Health Support',
      members: 1034,
      location: 'Canada-wide',
      category: 'Wellness',
      icon: Heart,
      color: 'bg-rose-50',
      iconColor: 'text-rose-700',
      borderColor: 'hover:border-rose-300',
      description: 'Safe space for newcomers dealing with stress, anxiety, depression, and adjustment challenges.',
      nextEvent: 'Weekly Support Circle - Every Thursday',
      tags: ['Mental Health', 'Support', 'Wellness']
    }
  ];

  const categories = [
    { name: 'All Groups', count: groups.length },
    { name: 'General', count: 3 },
    { name: 'Housing', count: 1 },
    { name: 'Students', count: 1 },
    { name: 'Healthcare', count: 2 },
    { name: 'Employment', count: 1 },
    { name: 'Cultural', count: 1 }
  ];

  return (
    <div className="w-full bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Users className="w-7 h-7 text-indigo-700" />
            </div>
            <h1 className="text-4xl font-semibold text-slate-900">Community Groups</h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join groups based on your location, interests, and needs. Connect with other newcomers and verified helpers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.name}
              className="px-4 py-2 bg-white border-2 border-slate-200 hover:border-indigo-400 rounded-md transition text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className={`bg-white rounded-lg border-2 border-slate-200 ${group.borderColor} shadow-sm hover:shadow-md transition-all overflow-hidden`}
              >
                <div className={`${group.color} p-6 border-b border-slate-100`}>
                  <div className="flex items-start justify-between mb-3">
                    <Icon className={`w-10 h-10 ${group.iconColor}`} />
                    <span className="bg-white border border-slate-200 px-3 py-1 rounded-md text-sm text-slate-700 font-medium">
                      {group.members.toLocaleString()} members
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{group.name}</h3>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-slate-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{group.location}</span>
                  </div>

                  <p className="text-slate-700 mb-4 text-sm leading-relaxed">{group.description}</p>

                  <div className="flex items-start space-x-2 text-sm text-slate-600 mb-4 bg-teal-50 border border-teal-200 p-3 rounded-md">
                    <Calendar className="w-4 h-4 mt-0.5 text-teal-700" />
                    <div>
                      <div className="font-medium text-teal-900">Next Event:</div>
                      <div className="text-teal-800">{group.nextEvent}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/chat"
                    className="block w-full text-center px-4 py-2.5 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition font-medium text-sm"
                  >
                    Join Group
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-100 border border-slate-200 rounded-lg p-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Can't find your community?</h2>
            <p className="text-slate-600 leading-relaxed">Start your own group and connect with others who share your interests</p>
          </div>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition font-medium">
              Create a Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
