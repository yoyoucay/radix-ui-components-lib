export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-slate-900">
            Radix UI Components Library
          </h1>
          <p className="text-xl text-slate-600">
            Beautiful, accessible components for Next.js projects
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://github.com/yoyoucay/radix-ui-components-lib"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800"
            >
              View on GitHub
            </a>
            <a
              href="/EXAMPLE.md"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-900 hover:bg-slate-50"
            >
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
