'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export interface SidebarProps {
  items?: SidebarSection[];
  className?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export interface SidebarSection {
  title?: string;
  items: SidebarItem[];
}

export interface SidebarItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  active?: boolean;
  badge?: string | number;
  children?: SidebarItem[];
}

export function Sidebar({
  items = [],
  className,
  collapsible = false,
  defaultCollapsed = false,
  header,
  footer,
}: SidebarProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

  return (
    <aside
      className={cn(
        'flex h-screen flex-col border-r border-slate-200 bg-white transition-all duration-300 ease-in-out',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      {/* Header */}
      {header && (
        <div className={cn(
          'flex h-16 items-center border-b border-slate-200 px-4',
          collapsed && 'justify-center px-2'
        )}>
          {collapsed ? (
            <div className="flex items-center justify-center overflow-hidden">
              {typeof header === 'string' ? header.charAt(0) : header}
            </div>
          ) : (
            <div className="overflow-hidden">{header}</div>
          )}
        </div>
      )}

      {/* Collapse Button */}
      {collapsible && (
        <div className={cn(
          'flex items-center border-b border-slate-200 p-2',
          collapsed ? 'justify-center' : 'justify-end'
        )}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="h-8 w-8 p-0"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
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
              className={cn('h-4 w-4 transition-transform duration-300', collapsed && 'rotate-180')}
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden p-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
        {items.map((section, sectionIdx) => (
          <div key={sectionIdx} className={cn('mb-4', sectionIdx === 0 && 'mt-0')}>
            {section.title && !collapsed && (
              <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                {section.title}
              </h3>
            )}
            {section.title && collapsed && sectionIdx > 0 && (
              <Separator className="my-2" />
            )}
            <div className="space-y-1">
              {section.items.map((item, itemIdx) => (
                <SidebarItemRenderer key={itemIdx} item={item} collapsed={collapsed} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      {footer && (
        <div className={cn(
          'border-t border-slate-200 p-4',
          collapsed && 'flex justify-center px-2'
        )}>
          <div className={cn(collapsed && 'flex items-center justify-center')}>
            {footer}
          </div>
        </div>
      )}
    </aside>
  );
}

function SidebarItemRenderer({
  item,
  collapsed,
  level = 0,
}: {
  item: SidebarItem;
  collapsed: boolean;
  level?: number;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const hasChildren = item.children && item.children.length > 0;

  // Don't show nested items when sidebar is collapsed
  if (hasChildren && !collapsed) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
            item.active && 'bg-slate-900 text-white hover:bg-slate-800',
            !item.active && 'text-slate-700',
            level > 0 && !collapsed && 'ml-6'
          )}
        >
          {item.icon && (
            <span className={cn('flex h-5 w-5 items-center justify-center flex-shrink-0')}>
              {item.icon}
            </span>
          )}
          <span className="flex-1 text-left truncate">{item.label}</span>
          {item.badge && (
            <span className={cn(
              'rounded-full px-2 py-0.5 text-xs font-medium',
              item.active ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
            )}>
              {item.badge}
            </span>
          )}
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
            className={cn(
              'h-4 w-4 flex-shrink-0 transition-transform duration-200',
              expanded && 'rotate-180'
            )}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        {expanded && (
          <div className="mt-1 space-y-1">
            {item.children?.map((child, idx) => (
              <SidebarItemRenderer
                key={idx}
                item={child}
                collapsed={collapsed}
                level={level + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Collapsed state - show only icon with tooltip
  if (hasChildren && collapsed) {
    return (
      <Link
        href={item.href}
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
          item.active && 'bg-slate-900 text-white hover:bg-slate-800',
          !item.active && 'text-slate-700'
        )}
        title={item.label}
      >
        {item.icon ? (
          <span className="flex h-5 w-5 items-center justify-center flex-shrink-0">
            {item.icon}
          </span>
        ) : (
          <span className="text-xs font-semibold">{item.label.charAt(0)}</span>
        )}
      </Link>
    );
  }

  // Regular item (leaf node)
  return (
    <Link
      href={item.href}
      className={cn(
        'flex items-center gap-2 rounded-md transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
        collapsed ? 'h-10 w-10 justify-center' : 'px-3 py-2',
        item.active && 'bg-slate-900 text-white hover:bg-slate-800',
        !item.active && 'text-slate-700',
        level > 0 && !collapsed && 'ml-6',
        'text-sm font-medium'
      )}
      title={collapsed ? item.label : undefined}
    >
      {item.icon ? (
        <span className={cn('flex h-5 w-5 items-center justify-center flex-shrink-0')}>
          {item.icon}
        </span>
      ) : (
        !collapsed && <span className="w-5" />
      )}
      {!collapsed && (
        <>
          <span className="flex-1 truncate">{item.label}</span>
          {item.badge && (
            <span className={cn(
              'rounded-full px-2 py-0.5 text-xs font-medium flex-shrink-0',
              item.active ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
            )}>
              {item.badge}
            </span>
          )}
        </>
      )}
    </Link>
  );
}
