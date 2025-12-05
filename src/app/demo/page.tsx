'use client';

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Separator,
  Navbar,
  Sidebar,
} from '@/index';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar Demo */}
      <Navbar
        logo={
          <span className="text-xl font-bold text-slate-900">
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
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </div>
        }
        sticky
      />

      <div className="flex">
        {/* Sidebar Demo */}
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
                  active: true,
                },
                {
                  label: 'Buttons',
                  href: '/demo/buttons',
                  icon: (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  ),
                  badge: 'New',
                },
              ],
            },
          ]}
        />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Header */}
            <div>
              <h1 className="mb-2 text-4xl font-bold text-slate-900">
                Component Demo
              </h1>
              <p className="text-lg text-slate-600">
                Interactive examples of all components in the library
              </p>
            </div>

            <Separator />

            {/* Button Demo */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Buttons</h2>
              <div className="space-y-4 rounded-lg bg-white p-6 shadow">
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <Separator />
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </section>

            {/* Dialog Demo */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Dialog</h2>
              <div className="rounded-lg bg-white p-6 shadow">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently delete
                        your account and remove your data from our servers.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button variant="destructive">Delete Account</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </section>

            {/* Dropdown Menu Demo */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                Dropdown Menu
              </h2>
              <div className="rounded-lg bg-white p-6 shadow">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </section>

            {/* Tooltip Demo */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Tooltips</h2>
              <div className="rounded-lg bg-white p-6 shadow">
                <TooltipProvider>
                  <div className="flex gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover me</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is a helpful tooltip!</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="primary">Save</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Save your changes (Ctrl+S)</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="destructive">Delete</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Permanently delete this item</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>
            </section>

            {/* Combined Example */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                Combined Example
              </h2>
              <div className="rounded-lg bg-white p-6 shadow">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">User Profile</h3>
                      <p className="text-sm text-slate-600">
                        Manage your account settings
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Actions
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Name</span>
                      <span className="font-medium">John Doe</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Email</span>
                      <span className="font-medium">john@example.com</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Role</span>
                      <span className="font-medium">Administrator</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Cancel
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="primary" size="sm">
                          Save Changes
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Confirm Changes</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to save these changes to your
                            profile?
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline">Cancel</Button>
                          <Button variant="primary">Confirm</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
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
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
