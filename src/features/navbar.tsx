'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export interface NavbarProps {
  logo?: React.ReactNode;
  items?: NavbarItem[];
  actions?: React.ReactNode;
  className?: string;
  sticky?: boolean;
}

export interface NavbarItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavbarItem[];
}

export function Navbar({ logo, items = [], actions, className, sticky = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav
      className={cn(
        'border-b border-slate-200 bg-white',
        sticky && 'sticky top-0 z-40',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {logo && <div className="flex-shrink-0">{logo}</div>}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {items.map((item, index) => (
                <NavbarItemRenderer key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">{actions}</div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M4 12h16" />
                  <path d="M4 6h16" />
                  <path d="M4 18h16" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {items.map((item, index) => (
              <MobileNavbarItem key={index} item={item} onClose={() => setMobileMenuOpen(false)} />
            ))}
            {actions && <div className="mt-4 px-3">{actions}</div>}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavbarItemRenderer({ item }: { item: NavbarItem }) {
  if (item.children && item.children.length > 0) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-1">
            {item.icon}
            {item.label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {item.children.map((child, idx) => (
            <DropdownMenuItem key={idx} asChild>
              <Link href={child.href} className="flex items-center gap-2">
                {child.icon}
                {child.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link href={item.href}>
      <Button variant="ghost" size="sm" className="gap-2">
        {item.icon}
        {item.label}
      </Button>
    </Link>
  );
}

function MobileNavbarItem({
  item,
  onClose,
}: {
  item: NavbarItem;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = React.useState(false);

  if (item.children && item.children.length > 0) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-100"
        >
          <span className="flex items-center gap-2">
            {item.icon}
            {item.label}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn('h-4 w-4 transition-transform', expanded && 'rotate-180')}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        {expanded && (
          <div className="ml-4 space-y-1">
            {item.children.map((child, idx) => (
              <Link
                key={idx}
                href={child.href}
                onClick={onClose}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {child.icon}
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-100"
    >
      {item.icon}
      {item.label}
    </Link>
  );
}
