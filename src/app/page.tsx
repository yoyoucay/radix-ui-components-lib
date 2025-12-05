export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-slate-900">
            UI Kit - Radix UI
          </h1>
          <p className="text-xl text-slate-600">
            Beautiful, accessible components for Next.js projects
          </p>
            <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://github.com/yoyoucay/radix-ui-components-lib"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              View on GitHub
            </a>
            <a
              href="/demo"
              className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-900 hover:bg-slate-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path fill="currentColor" d="M8 5v14l11-7z"/>
              </svg>
              Demo
            </a>
            <a
              href="/documentation"
              className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-900 hover:bg-slate-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path fill="currentColor" d="M6 4v16h12V4H6zm2 2h8v12H8V6zm2 2v8h4V8h-4z"/>
              </svg>
              Documentation
            </a>
            </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="🎨 Pre-styled"
            description="Beautiful components built on Radix UI primitives"
          />
          <FeatureCard
            title="🔧 Customizable"
            description="Easy to theme and extend with Tailwind CSS"
          />
          <FeatureCard
            title="📦 Tree-shakeable"
            description="Import only what you need, optimized bundle size"
          />
          <FeatureCard
            title="♿ Accessible"
            description="WCAG compliant with keyboard navigation"
          />
          <FeatureCard
            title="🎯 TypeScript"
            description="Full type safety and autocomplete support"
          />
          <FeatureCard
            title="📱 Responsive"
            description="Mobile-first design that works everywhere"
          />
        </div>

        {/* Installation */}
        <div className="mb-12 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Quick Start
          </h2>
          <div className="space-y-4">
            <div>
              <p className="mb-2 font-medium text-slate-700">
                1. Install the package
              </p>
              <code className="block rounded-md bg-slate-900 p-4 text-sm text-white">
                bun add git+https://github.com/yoyoucay/radix-ui-components-lib.git
              </code>
            </div>
            <div>
              <p className="mb-2 font-medium text-slate-700">2. Import styles</p>
              <code className="block rounded-md bg-slate-900 p-4 text-sm text-white">
                import &apos;radix-ui-components-lib/styles&apos;;
              </code>
            </div>
            <div>
              <p className="mb-2 font-medium text-slate-700">
                3. Use components
              </p>
              <code className="block rounded-md bg-slate-900 p-4 text-sm text-white">
                import &#123; Button, Navbar &#125; from
                &apos;radix-ui-components-lib&apos;;
              </code>
            </div>
          </div>
        </div>

        {/* Components */}
        <div className="mb-12 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Available Components
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <ComponentCard
              name="Button"
              description="Versatile button with multiple variants and sizes"
            />
            <ComponentCard
              name="Dialog"
              description="Modal dialog for alerts and confirmations"
            />
            <ComponentCard
              name="Dropdown Menu"
              description="Contextual menu with nested support"
            />
            <ComponentCard
              name="Tooltip"
              description="Accessible tooltips for additional information"
            />
            <ComponentCard
              name="Navbar"
              description="Responsive navigation bar with mobile menu"
            />
            <ComponentCard
              name="Sidebar"
              description="Collapsible sidebar with nested navigation"
            />
            <ComponentCard
              name="Separator"
              description="Visual divider for content sections"
            />
            <ComponentCard
              name="More coming..."
              description="More components are being added regularly"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-600">
          <p>
            Built with ❤️ using Radix UI, Tailwind CSS, and Next.js
          </p>
          <p className="mt-2">
            <a
              href="https://github.com/yoyoucay/radix-ui-components-lib"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            {' · '}
            <a href="/EXAMPLE.md" className="text-blue-600 hover:underline">
              Examples
            </a>
            {' · '}
            <a href="/API.md" className="text-blue-600 hover:underline">
              API Docs
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6">
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

function ComponentCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <h4 className="mb-1 font-semibold text-slate-900">{name}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}
