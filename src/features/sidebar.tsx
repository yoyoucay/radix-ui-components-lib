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
        'flex h-full flex-col border-r border-slate-200 bg-white transition-all duration-300',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      {/* Header */}
      {header && (
        <div className={cn('border-b border-slate-200 p-4', collapsed && 'px-2')}>
          {collapsed ? (
            <div className="flex justify-center">{header}</div>
          ) : (
            header
          )}
        </div>
      )}

      {/* Collapse Button */}
      {collapsible && (
        <div className="flex justify-end p-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="h-8 w-8 p-0"
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
              className={cn('h-4 w-4 transition-transform', collapsed && 'rotate-180')}
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-2">
        {items.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-4">
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
        <div className={cn('border-t border-slate-200 p-4', collapsed && 'px-2')}>
          {footer}
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

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100',
            item.active && 'bg-slate-100 text-slate-900',
            collapsed && 'justify-center px-2',
            level > 0 && 'ml-4'
          )}
          title={collapsed ? item.label : undefined}
        >
          {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
          {!collapsed && (
            <>
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs">
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
                className={cn('h-4 w-4 flex-shrink-0 transition-transform', expanded && 'rotate-180')}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </>
          )}
        </button>
        {expanded && !collapsed && (
          <div className="space-y-1">
            {item.children?.map((child, idx) => (
              <SidebarItemRenderer key={idx} item={child} collapsed={collapsed} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100',
        item.active && 'bg-slate-100 text-slate-900',
        collapsed && 'justify-center px-2',
        level > 0 && 'ml-4'
      )}
      title={collapsed ? item.label : undefined}
    >
      {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
      {!collapsed && (
        <>
          <span className="flex-1">{item.label}</span>
          {item.badge && (
            <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs">
              {item.badge}
            </span>
          )}
        </>
      )}
    </Link>
  );
}
