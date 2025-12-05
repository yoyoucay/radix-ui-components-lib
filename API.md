# API Documentation

Complete API reference for the Radix UI Components Library.

## Installation & Setup

### Installation

```bash
# Install from Git
bun add git+https://github.com/yoyoucay/radix-ui-components-lib.git

# Or with npm/yarn/pnpm
npm install git+https://github.com/yoyoucay/radix-ui-components-lib.git
yarn add git+https://github.com/yoyoucay/radix-ui-components-lib.git
pnpm add git+https://github.com/yoyoucay/radix-ui-components-lib.git
```

### Peer Dependencies

Ensure you have these installed:

```bash
bun add react react-dom next tailwindcss
```

### Setup

1. **Import styles in your root layout:**

```tsx
// app/layout.tsx
import 'radix-ui-components-lib/styles';
```

2. **Configure Tailwind CSS:**

```ts
// tailwind.config.ts
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/radix-ui-components-lib/dist/**/*.{js,mjs}',
  ],
};
```

## Package Exports

### Main Export

```tsx
import { 
  // UI Components
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
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
  
  // Feature Components
  Navbar,
  Sidebar,
  
  // Utilities
  cn,
  
  // Types (TypeScript)
  type ButtonProps,
  type NavbarProps,
  type NavbarItem,
  type SidebarProps,
  type SidebarSection,
  type SidebarItem,
  type Variant,
  type Size,
} from 'radix-ui-components-lib';
```

### Styles Export

```tsx
// Import in your root layout or main CSS
import 'radix-ui-components-lib/styles';
```

Or in CSS:

```css
@import 'radix-ui-components-lib/styles';
```

## Component Categories

### UI Components (Primitives)

Low-level, reusable UI primitives:

- **Button** - Versatile button component
- **Dialog** - Modal dialog system
- **Dropdown Menu** - Contextual menus
- **Tooltip** - Hover tooltips
- **Separator** - Visual dividers

### Feature Components (Composites)

Higher-level, composed components:

- **Navbar** - Application navigation bar
- **Sidebar** - Application sidebar navigation

## Styling System

### Tailwind CSS Classes

All components accept a `className` prop for custom styling:

```tsx
<Button className="your-custom-classes">
  Custom Button
</Button>
```

### CSS Variables

Override theme colors using CSS variables:

```css
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
```

### Class Merge Utility (cn)

Use the `cn` utility for conditional and merged classes:

```tsx
import { cn } from 'radix-ui-components-lib';

<Button 
  className={cn(
    'base-classes',
    isActive && 'active-classes',
    isDisabled && 'disabled-classes'
  )}
/>
```

The `cn` utility:
- Merges multiple class strings
- Handles conditional classes
- Deduplicates Tailwind classes (e.g., `px-2 px-4` becomes `px-4`)
- Uses `clsx` and `tailwind-merge` under the hood

## TypeScript Support

### Full Type Safety

All components are fully typed with TypeScript:

```tsx
import type { ButtonProps, NavbarItem } from 'radix-ui-components-lib';

// Use in your components
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

const navItems: NavbarItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];
```

### Available Types

```tsx
// Component Props
ButtonProps
NavbarProps
NavbarItem
SidebarProps
SidebarSection
SidebarItem

// Utility Types
Variant: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
Size: 'sm' | 'md' | 'lg'
BaseComponentProps
```

### Extending Types

```tsx
import type { ButtonProps } from 'radix-ui-components-lib';

interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean;
  loadingText?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  isLoading, 
  loadingText = 'Loading...', 
  children,
  ...props 
}) => {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading ? loadingText : children}
    </Button>
  );
};
```

## Polymorphic Components

### asChild Prop

Components that support the `asChild` prop can render as different elements:

```tsx
// Button as an anchor tag
<Button asChild>
  <a href="/link">Link Button</a>
</Button>

// Button as a Next.js Link
<Button asChild>
  <Link href="/page">Next Link Button</Link>
</Button>

// Dialog trigger as a custom component
<DialogTrigger asChild>
  <CustomComponent>Open Dialog</CustomComponent>
</DialogTrigger>
```

## Server Components & Client Components

### 'use client' Directive

Some components require `'use client'` directive:

**Client Components** (require 'use client'):
- Button (when using onClick)
- Dialog
- DropdownMenu
- Tooltip
- Navbar
- Sidebar

**Server Components** (can be used in RSC):
- Button (static, no interactions)
- Separator
- Layout structures

### Usage in App Router

```tsx
// app/page.tsx (Server Component)
import { Separator } from 'radix-ui-components-lib';

export default function Page() {
  return (
    <div>
      <h1>Server Component</h1>
      <Separator />
      <p>Content</p>
    </div>
  );
}

// components/client-section.tsx (Client Component)
'use client';

import { Button, Dialog } from 'radix-ui-components-lib';

export function ClientSection() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      {/* ... */}
    </Dialog>
  );
}
```

## Performance Optimization

### Tree Shaking

The library is built with tree-shaking support. Only import what you need:

```tsx
// ✅ Good - Tree-shakeable
import { Button, Dialog } from 'radix-ui-components-lib';

// ❌ Avoid - Imports everything
import * as RadixUI from 'radix-ui-components-lib';
```

### Code Splitting

Components are automatically code-split when using dynamic imports:

```tsx
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => 
  import('radix-ui-components-lib').then(mod => ({ default: mod.Navbar }))
);
```

### Bundle Size

- Base UI components: ~25-30 KB (gzipped)
- Feature components: ~10-15 KB additional (gzipped)
- Total: ~35-45 KB (gzipped) for full library

## Accessibility (a11y)

### WCAG Compliance

All components follow WCAG 2.1 Level AA guidelines:

- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ ARIA attributes
- ✅ Focus management
- ✅ Color contrast

### Keyboard Navigation

| Component | Keys | Action |
|-----------|------|--------|
| Button | `Enter` / `Space` | Activate |
| Dialog | `Esc` | Close |
| Dropdown Menu | `↑` `↓` | Navigate items |
| Dropdown Menu | `Enter` | Select item |
| Dropdown Menu | `Esc` | Close menu |
| Sidebar | `↑` `↓` | Navigate items |
| Sidebar | `Enter` | Expand/collapse |

### ARIA Attributes

Components automatically include proper ARIA attributes:

```tsx
// Button
<button role="button" aria-disabled="false">...</button>

// Dialog
<div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <h2 id="dialog-title">Title</h2>
  <p id="dialog-desc">Description</p>
</div>

// Dropdown Menu
<div role="menu" aria-orientation="vertical">
  <button role="menuitem">Item</button>
</div>
```

## Browser Support

### Supported Browsers

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |
| iOS Safari | 12+ |
| Chrome Mobile | Latest |

### Polyfills

The library uses modern JavaScript features. If you need to support older browsers:

```ts
// next.config.ts
const config = {
  transpilePackages: ['radix-ui-components-lib'],
};
```

## Version Compatibility

### React & Next.js

| Library Version | React | Next.js |
|----------------|-------|---------|
| 0.1.x | 18.x, 19.x | 13.x, 14.x, 15.x, 16.x |

### Tailwind CSS

| Library Version | Tailwind CSS |
|----------------|--------------|
| 0.1.x | 3.x, 4.x |

## Migration & Upgrading

### From 0.1.0 to Future Versions

Breaking changes and migration guides will be documented here.

## Troubleshooting

### Common Issues

#### Styles Not Applying

**Problem:** Components don't have styles

**Solution:** Ensure you've imported the styles:

```tsx
import 'radix-ui-components-lib/styles';
```

And configured Tailwind:

```ts
// tailwind.config.ts
content: [
  './node_modules/radix-ui-components-lib/dist/**/*.{js,mjs}',
]
```

#### TypeScript Errors

**Problem:** `Cannot find module 'radix-ui-components-lib'`

**Solution:** Ensure types are generated:

```bash
bun run build
```

#### Build Errors with Next.js

**Problem:** Build fails with module errors

**Solution:** Add to `next.config.ts`:

```ts
transpilePackages: ['radix-ui-components-lib']
```

## Development Workflow

### Local Development

```bash
# Clone the repository
git clone https://github.com/yoyoucay/radix-ui-components-lib.git

# Install dependencies
bun install

# Build the library
bun run build

# Type check
bun run type-check

# Lint
bun run lint
```

### Testing Changes Locally

```bash
# In the library directory
bun link

# In your project directory
bun link radix-ui-components-lib
```

## Support & Community

### Getting Help

- 📖 Read the [Example Usage Guide](./EXAMPLE.md)
- 📚 Check [Component Reference](./COMPONENTS.md)
- 🐛 Report issues on [GitHub](https://github.com/yoyoucay/radix-ui-components-lib/issues)
- 💬 Discussions on [GitHub Discussions](https://github.com/yoyoucay/radix-ui-components-lib/discussions)

### Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## License

MIT License - See [LICENSE](./LICENSE) file.

---

**Documentation Version:** 0.1.0  
**Last Updated:** December 2025
