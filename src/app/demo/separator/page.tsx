'use client';

import { Separator } from '@/components/ui/separator';

export default function SeparatorDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-4xl font-bold text-slate-900">Separator</h1>
        <p className="text-lg text-slate-600">
          Visual dividers to separate content sections
        </p>
      </div>

      <Separator />

      {/* Horizontal Separator */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Horizontal Separator</h2>
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Section 1</h3>
              <p className="text-sm text-slate-600">
                This is the first section with some content.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold">Section 2</h3>
              <p className="text-sm text-slate-600">
                This is the second section with different content.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold">Section 3</h3>
              <p className="text-sm text-slate-600">
                This is the third section with more content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Separator */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Vertical Separator</h2>
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex h-24 items-center gap-4">
            <div className="flex-1 text-center">
              <h3 className="text-lg font-semibold">Column 1</h3>
              <p className="text-sm text-slate-600">Content here</p>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1 text-center">
              <h3 className="text-lg font-semibold">Column 2</h3>
              <p className="text-sm text-slate-600">Content here</p>
            </div>
            <Separator orientation="vertical" />
            <div className="flex-1 text-center">
              <h3 className="text-lg font-semibold">Column 3</h3>
              <p className="text-sm text-slate-600">Content here</p>
            </div>
          </div>
        </div>
      </section>

      {/* In Lists */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">In Lists</h2>
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="space-y-0">
            <div className="p-4 hover:bg-slate-50">
              <h4 className="font-medium">Item 1</h4>
              <p className="text-sm text-slate-600">Description for item 1</p>
            </div>
            <Separator />
            <div className="p-4 hover:bg-slate-50">
              <h4 className="font-medium">Item 2</h4>
              <p className="text-sm text-slate-600">Description for item 2</p>
            </div>
            <Separator />
            <div className="p-4 hover:bg-slate-50">
              <h4 className="font-medium">Item 3</h4>
              <p className="text-sm text-slate-600">Description for item 3</p>
            </div>
            <Separator />
            <div className="p-4 hover:bg-slate-50">
              <h4 className="font-medium">Item 4</h4>
              <p className="text-sm text-slate-600">Description for item 4</p>
            </div>
          </div>
        </div>
      </section>

      {/* In Forms */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">In Forms</h2>
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-4 text-lg font-semibold">Account Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Username</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    placeholder="johndoe"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Password</label>
                  <input
                    type="password"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* With Text */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">With Text (Custom)</h2>
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-600">
                Some content before the separator...
              </p>
            </div>
            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-4 text-xs text-slate-500">OR</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-600">
                Some content after the separator...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Usage</h2>
        <div className="rounded-lg bg-slate-900 p-6 text-slate-50">
          <pre className="text-sm">
            <code>{`import { Separator } from '@/components/ui/separator';

// Horizontal (default)
<Separator />

// Vertical
<Separator orientation="vertical" />

// Custom styling
<Separator className="my-4" />`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
