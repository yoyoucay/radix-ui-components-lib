import { Separator } from '@/components/ui/separator';

export default function DocumentationPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Radix UI Components Library
                    </h1>
                    <p className="text-xl text-gray-600">
                        A modern, accessible component library built with Radix UI primitives and styled with Tailwind CSS.
                    </p>
                </div>

                {/* Features */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { icon: '🎨', text: 'Beautiful, customizable components' },
                            { icon: '♿', text: 'Fully accessible (WCAG compliant)' },
                            { icon: '🎯', text: 'Built with Radix UI primitives' },
                            { icon: '💅', text: 'Styled with Tailwind CSS' },
                            { icon: '📦', text: 'Easy to integrate' },
                            { icon: '🔧', text: 'TypeScript support' },
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                                <span className="text-2xl">{feature.icon}</span>
                                <span className="text-gray-700">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <Separator className="my-12" />

                {/* Installation */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation</h2>
                    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                        <pre className="text-sm">
                            <code>{`npm install
# or
yarn install
# or
pnpm install`}</code>
                        </pre>
                    </div>
                </section>

                <Separator className="my-12" />

                {/* Getting Started */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
                    <p className="text-gray-700 mb-4">
                        Import and use components in your React application:
                    </p>
                    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                        <pre className="text-sm">
                            <code>{`import { Button, Dialog, Tooltip } from '@/components/ui';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Tooltip content="Helpful information">
        <span>Hover me</span>
      </Tooltip>
    </div>
  );
}`}</code>
                        </pre>
                    </div>
                </section>

                <Separator className="my-12" />

                {/* Available Components */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Components</h2>
                    <div className="space-y-4">
                        {[
                            { name: 'Button', desc: 'Versatile button component with multiple variants and sizes' },
                            { name: 'Dialog', desc: 'Modal dialogs for confirmations, forms, and important messages' },
                            { name: 'Dropdown Menu', desc: 'Context menus and action lists for user interactions' },
                            { name: 'Tooltip', desc: 'Contextual help and information on hover' },
                            { name: 'Separator', desc: 'Visual dividers to separate content sections' },
                            { name: 'Navbar', desc: 'Navigation header component' },
                            { name: 'Sidebar', desc: 'Side navigation component' },
                        ].map((component, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {component.name}
                                </h3>
                                <p className="text-gray-600">{component.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <Separator className="my-12" />

                {/* Development */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Development</h2>
                    <p className="text-gray-700 mb-4">Run the development server:</p>
                    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-4">
                        <pre className="text-sm">
                            <code>{`npm run dev
# or
yarn dev
# or
pnpm dev`}</code>
                        </pre>
                    </div>
                    <p className="text-gray-700">
                        Open{' '}
                        <a
                            href="http://localhost:3000"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            http://localhost:3000
                        </a>{' '}
                        to view the demo.
                    </p>
                </section>

                <Separator className="my-12" />

                {/* Project Structure */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Structure</h2>
                    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                        <pre className="text-sm">
                            <code>{`src/
├── components/
│   └── ui/          # UI components
├── app/
│   └── demo/        # Demo pages
└── lib/             # Utility functions`}</code>
                        </pre>
                    </div>
                </section>

                <Separator className="my-12" />

                {/* Links */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Links</h2>
                    <div className="space-y-3">
                        {[
                            { name: 'GitHub Repository', url: 'https://github.com/yoyoucay/radix-ui-components-lib' },
                            { name: 'Radix UI Documentation', url: 'https://www.radix-ui.com/' },
                            { name: 'Tailwind CSS Documentation', url: 'https://tailwindcss.com/' },
                        ].map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-600 hover:underline text-lg"
                            >
                                {link.name} →
                            </a>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
                    <p>MIT License</p>
                    <p className="mt-2">
                        Contributions are welcome! Please feel free to submit a Pull Request.
                    </p>
                </footer>
            </div>
        </div>
    );
}
