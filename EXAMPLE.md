# Example Usage Guide

This guide demonstrates how to use the Radix UI Components Library in your Next.js project.

## 📋 Table of Contents

- [Installation](#installation)
- [Basic Setup](#basic-setup)
- [Component Examples](#component-examples)
  - [Button](#button)
  - [Dialog](#dialog)
  - [Dropdown Menu](#dropdown-menu)
  - [Tooltip](#tooltip)
  - [Navbar](#navbar)
  - [Sidebar](#sidebar)
- [Real-World Examples](#real-world-examples)
- [Styling & Customization](#styling--customization)

---

## Installation

```bash
# Install the library from Git
bun add git+https://github.com/yoyoucay/radix-ui-components-lib.git

# Or with npm
npm install git+https://github.com/yoyoucay/radix-ui-components-lib.git
```

Make sure you have the required peer dependencies:

```bash
bun add react react-dom next tailwindcss
```

---

## Basic Setup

### 1. Import Styles in Your Root Layout

```tsx
// app/layout.tsx
import 'radix-ui-components-lib/styles';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### 2. Configure Tailwind CSS

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/radix-ui-components-lib/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

---

## Component Examples

### Button

```tsx
import { Button } from 'radix-ui-components-lib';

export default function ButtonExample() {
  return (
    <div className="space-y-4 p-8">
      {/* Different Variants */}
      <div className="flex gap-4">
        <Button variant="default">Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>

      {/* Different Sizes */}
      <div className="flex gap-4 items-center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      {/* With Click Handler */}
      <Button onClick={() => alert('Button clicked!')}>
        Click Me
      </Button>

      {/* Disabled State */}
      <Button disabled>Disabled</Button>

      {/* As Child (polymorphic) */}
      <Button asChild>
        <a href="/somewhere">Link Button</a>
      </Button>
    </div>
  );
}
```

### Dialog

```tsx
'use client';

import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from 'radix-ui-components-lib';

export default function DialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      {/* Simple Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button variant="destructive">Delete Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Controlled Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Controlled Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled Example</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-slate-600">
            This dialog's open state is controlled by React state.
          </p>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
```

### Dropdown Menu

```tsx
'use client';

import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from 'radix-ui-components-lib';

export default function DropdownExample() {
  return (
    <div className="p-8">
      {/* Simple Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* With Actions */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => console.log('Edit clicked')}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log('Duplicate clicked')}>
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            onClick={() => console.log('Delete clicked')}
            className="text-red-600"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
```

### Tooltip

```tsx
'use client';

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'radix-ui-components-lib';

export default function TooltipExample() {
  return (
    <div className="p-8">
      <TooltipProvider>
        {/* Simple Tooltip */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip</p>
          </TooltipContent>
        </Tooltip>

        {/* Multiple Tooltips */}
        <div className="flex gap-4 mt-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm">Save</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Save your changes (Ctrl+S)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="destructive">Delete</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete permanently</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
}
```

### Navbar

```tsx
'use client';

import { Navbar, Button } from 'radix-ui-components-lib';

export default function NavbarExample() {
  return (
    <Navbar
      logo={
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-blue-600" />
          <span className="text-xl font-bold">MyApp</span>
        </div>
      }
      items={[
        { 
          label: 'Home', 
          href: '/' 
        },
        { 
          label: 'About', 
          href: '/about' 
        },
        {
          label: 'Products',
          href: '/products',
          children: [
            { label: 'Electronics', href: '/products/electronics' },
            { label: 'Clothing', href: '/products/clothing' },
            { label: 'Books', href: '/products/books' },
          ],
        },
        {
          label: 'Resources',
          href: '/resources',
          children: [
            { label: 'Blog', href: '/blog' },
            { label: 'Documentation', href: '/docs' },
            { label: 'Support', href: '/support' },
          ],
        },
        { 
          label: 'Contact', 
          href: '/contact' 
        },
      ]}
      actions={
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Login</Button>
          <Button variant="primary" size="sm">Sign Up</Button>
        </div>
      }
      sticky
    />
  );
}
```

### Sidebar

```tsx
'use client';

import { Sidebar, Button } from 'radix-ui-components-lib';

export default function SidebarExample() {
  return (
    <div className="flex h-screen">
      <Sidebar
        collapsible
        defaultCollapsed={false}
        header={
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-600" />
            <span className="text-lg font-bold">Dashboard</span>
          </div>
        }
        items={[
          {
            title: 'Main',
            items: [
              {
                label: 'Home',
                href: '/',
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                active: true,
              },
              {
                label: 'Analytics',
                href: '/analytics',
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                badge: '3',
              },
              {
                label: 'Projects',
                href: '/projects',
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                ),
                children: [
                  { label: 'Active Projects', href: '/projects/active', badge: '12' },
                  { label: 'Archived', href: '/projects/archived' },
                  { label: 'Templates', href: '/projects/templates' },
                ],
              },
            ],
          },
          {
            title: 'Settings',
            items: [
              {
                label: 'Profile',
                href: '/profile',
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
              },
              {
                label: 'Preferences',
                href: '/preferences',
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
            ],
          },
        ]}
        footer={
          <Button variant="ghost" size="sm" className="w-full justify-start">
            Logout
          </Button>
        }
      />
      
      <main className="flex-1 overflow-y-auto bg-slate-50 p-8">
        <h1 className="text-3xl font-bold">Main Content Area</h1>
        <p className="mt-4 text-slate-600">
          Your page content goes here...
        </p>
      </main>
    </div>
  );
}
```

---

## Real-World Examples

### Complete Dashboard Layout

```tsx
'use client';

import { Navbar, Sidebar, Button } from 'radix-ui-components-lib';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      {/* Navbar */}
      <Navbar
        logo={<span className="text-xl font-bold">Dashboard</span>}
        items={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Reports', href: '/reports' },
        ]}
        actions={
          <Button variant="primary" size="sm">
            New Project
          </Button>
        }
        sticky
      />

      {/* Main Content with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          collapsible
          items={[
            {
              title: 'Navigation',
              items: [
                { label: 'Overview', href: '/dashboard', active: true },
                { label: 'Projects', href: '/projects', badge: '5' },
                { label: 'Tasks', href: '/tasks' },
              ],
            },
          ]}
        />

        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
```

### User Profile Card with Dialog

```tsx
'use client';

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Separator,
} from 'radix-ui-components-lib';

export default function UserProfile() {
  return (
    <div className="max-w-md rounded-lg border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-blue-600" />
        <div>
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-sm text-slate-600">john@example.com</p>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Member since</span>
          <span className="font-medium">Jan 2024</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Projects</span>
          <span className="font-medium">12</span>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex-1">
              Edit Profile
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md border border-slate-300 px-3 py-2"
                defaultValue="John Doe"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-slate-300 px-3 py-2"
                defaultValue="john@example.com"
              />
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline">Cancel</Button>
              <Button variant="primary">Save Changes</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Button variant="primary" className="flex-1">
          View Details
        </Button>
      </div>
    </div>
  );
}
```

---

## Styling & Customization

### Custom Button Styles

```tsx
import { Button, cn } from 'radix-ui-components-lib';

export function CustomButton() {
  return (
    <div className="space-x-4">
      {/* Gradient Button */}
      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
        Gradient Button
      </Button>

      {/* Custom Colors */}
      <Button className="bg-green-600 hover:bg-green-700">
        Success Button
      </Button>

      {/* With Icon */}
      <Button className="gap-2">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Item
      </Button>
    </div>
  );
}
```

### Theme Customization

```css
/* globals.css */
@import 'radix-ui-components-lib/styles';

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

/* Custom theme overrides */
.dark {
  --background: #121212;
  --foreground: #f5f5f5;
}
```

### Using the `cn` Utility

```tsx
import { Button, cn } from 'radix-ui-components-lib';

export function ConditionalButton({ isActive }: { isActive: boolean }) {
  return (
    <Button
      className={cn(
        'transition-all',
        isActive && 'ring-2 ring-blue-500 ring-offset-2',
        !isActive && 'opacity-50'
      )}
    >
      {isActive ? 'Active' : 'Inactive'}
    </Button>
  );
}
```

---

## Next Steps

- Explore the [API Documentation](./API.md)
- Check out the [Component Reference](./COMPONENTS.md)
- See [Advanced Patterns](./ADVANCED.md)
- Browse the [GitHub Repository](https://github.com/yoyoucay/radix-ui-components-lib)

---

**Need Help?** Open an issue on [GitHub](https://github.com/yoyoucay/radix-ui-components-lib/issues)
