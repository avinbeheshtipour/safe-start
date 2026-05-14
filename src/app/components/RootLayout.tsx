import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { ScrollToTop } from './ScrollToTop';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-white">SafeStart Canada</h3>
              <p className="text-sm text-slate-300">Trusted support for newcomers in Canada</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Emergency: 911</li>
                <li>Mental Health: 988</li>
                <li>Settlement Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>IRCC Official Site</li>
                <li>Service Canada</li>
                <li>Provincial Health</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Disclaimer</h4>
              <p className="text-xs text-slate-400">This app provides guidance, not legal or medical diagnosis. For emergencies call 911.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
            © 2026 SafeStart Canada. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
