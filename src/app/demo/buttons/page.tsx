'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function ButtonsDemo() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Buttons</h1>
        <p className="text-base sm:text-lg text-slate-600">
          Versatile button component with multiple variants and sizes
        </p>
      </div>

      <Separator />

      {/* Variants */}
      <section>
        <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-slate-900">Variants</h2>
        <div className="rounded-lg bg-white p-4 sm:p-6 shadow">
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-slate-900">Sizes</h2>
        <div className="rounded-lg bg-white p-4 sm:p-6 shadow">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </section>

      {/* Disabled State */}
      <section>
        <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-slate-900">Disabled State</h2>
        <div className="rounded-lg bg-white p-4 sm:p-6 shadow">
          <div className="flex flex-wrap gap-3">
            <Button disabled>Default Disabled</Button>
            <Button variant="primary" disabled>Primary Disabled</Button>
            <Button variant="destructive" disabled>Destructive Disabled</Button>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section>
        <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-slate-900">With Icons</h2>
        <div className="rounded-lg bg-white p-4 sm:p-6 shadow">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Item
            </Button>
            <Button variant="outline">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Edit
            </Button>
            <Button variant="destructive">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </Button>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section>
        <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-slate-900">Usage</h2>
        <div className="rounded-lg bg-slate-900 p-4 sm:p-6 text-slate-50 overflow-x-auto">
          <pre className="text-xs sm:text-sm">
            <code>{`import { Button } from '@/components/ui/button';

<Button variant="primary" size="md">
  Click me
</Button>`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
