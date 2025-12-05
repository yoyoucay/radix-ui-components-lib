'use client';

import { Separator } from '@/index';
import Link from 'next/link';

export default function DemoPage() {
  return (
    <div className="space-y-12">
            {/* Header */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h1 className="mb-2 text-4xl font-bold text-slate-900">
                    Component Library Overview
                  </h1>
                  <p className="text-lg text-slate-600">
                    Explore our collection of reusable UI components built with Radix UI
                  </p>
                </div>
                <Link href="/documentation">
                  <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg">
                    📚 View Documentation
                  </button>
                </Link>
              </div>
            </div>

            <Separator />

            {/* Component Grid */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Components</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Button Card */}
                <Link href="/demo/buttons">
                  <div className="group cursor-pointer rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-blue-600">
                      Buttons
                    </h3>
                    <p className="text-sm text-slate-600">
                      Versatile button component with multiple variants and sizes
                    </p>
                  </div>
                </Link>

                {/* Dialog Card */}
                <Link href="/demo/dialog">
                  <div className="group cursor-pointer rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-purple-600">
                      Dialog
                    </h3>
                    <p className="text-sm text-slate-600">
                      Modal dialogs for confirmations, forms, and important messages
                    </p>
                  </div>
                </Link>

                {/* Dropdown Menu Card */}
                <Link href="/demo/dropdown-menu">
                  <div className="group cursor-pointer rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-green-600">
                      Dropdown Menu
                    </h3>
                    <p className="text-sm text-slate-600">
                      Context menus and action lists for user interactions
                    </p>
                  </div>
                </Link>

                {/* Tooltip Card */}
                <Link href="/demo/tooltip">
                  <div className="group cursor-pointer rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-yellow-600">
                      Tooltip
                    </h3>
                    <p className="text-sm text-slate-600">
                      Contextual help and information on hover
                    </p>
                  </div>
                </Link>

                {/* Separator Card */}
                <Link href="/demo/separator">
                  <div className="group cursor-pointer rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-slate-600">
                      Separator
                    </h3>
                    <p className="text-sm text-slate-600">
                      Visual dividers to separate content sections
                    </p>
                  </div>
                </Link>

                {/* Navbar & Sidebar Card */}
                <div className="cursor-pointer rounded-lg border border-slate-200 bg-white p-6 shadow-sm opacity-60">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    Layout Components
                  </h3>
                  <p className="text-sm text-slate-600">
                    Navbar and Sidebar (currently in use on this page)
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Getting Started */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Getting Started</h2>
              <div className="rounded-lg bg-white p-6 shadow">
                <div className="space-y-4">
                  <p className="text-slate-600">
                    This component library is built with Radix UI primitives and styled with Tailwind CSS.
                    All components are fully accessible and customizable.
                  </p>
                  <div className="rounded-lg bg-slate-900 p-4 text-slate-50">
                    <pre className="text-sm">
                      <code>{`import { Button, Dialog, Tooltip } from '@/components/ui';

<Button variant="primary">Click me</Button>`}</code>
                    </pre>
                  </div>
                  <p className="text-sm text-slate-600">
                    Click on any component card above to see detailed examples and usage instructions.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="text-center text-sm text-slate-600">
              <p>
                View source code on{' '}
                <a
                  href="https://github.com/yoyoucay/radix-ui-components-lib"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {' | '}
                <Link href="/documentation" className="text-blue-600 hover:underline">
                  Documentation
                </Link>
              </p>
            </div>
          </div>
  );
}
