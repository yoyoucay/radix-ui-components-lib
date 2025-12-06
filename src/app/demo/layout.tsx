'use client';

import { Button, Navbar, Sidebar } from '@/index';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <Navbar
        logo={
          <span className="text-lg sm:text-xl font-bold text-slate-900">
            Component Library
          </span>
        }
        items={[
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/demo' },
          {
            label: 'Resources',
            href: '/resources',
            children: [
              { label: 'Documentation', href: '/docs' },
              { label: 'Examples', href: '/examples' },
              { label: 'GitHub', href: 'https://github.com' },
            ],
          },
        ]}
        actions={
        <></>
        }
        sticky
      />

      <div className="flex relative">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden fixed bottom-4 right-4 z-50 rounded-full bg-blue-600 p-3 text-white shadow-lg hover:bg-blue-700"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Overlay */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-40
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <Sidebar
            collapsible
            defaultCollapsed={false}
            header={
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-blue-600" />
                <span className="font-bold">Demo</span>
              </div>
            }
            items={[
              {
                title: 'Components',
                items: [
                  {
                    label: 'Overview',
                    href: '/demo',
                    icon: (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    ),
                    active: pathname === '/demo',
                  },
                  {
                    label: 'Buttons',
                    href: '/demo/buttons',
                    icon: (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    ),
                    active: pathname === '/demo/buttons',
                  },
                  {
                    label: 'Dialog',
                    href: '/demo/dialog',
                    icon: (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    ),
                    active: pathname === '/demo/dialog',
                  },
                  {
                    label: 'Dropdown Menu',
                    href: '/demo/dropdown-menu',
                    icon: (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    ),
                    active: pathname === '/demo/dropdown-menu',
                  },
                  {
                    label: 'Tooltip',
                    href: '/demo/tooltip',
                    icon: (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    active: pathname === '/demo/tooltip',
                  },
                  {
                    label: 'Separator',
                    href: '/demo/separator',
                    icon: (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ),
                    active: pathname === '/demo/separator',
                  },
                ],
              },
            ]}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 w-full lg:w-auto">
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
