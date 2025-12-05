# CHANGELOG

All notable changes to the Radix UI Components Library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-12-05

### 🎉 Initial Release

The first release of the Radix UI Components Library for Next.js projects.

### ✨ Added

#### UI Components (Primitives)
- **Button** - Versatile button component with 6 variants (default, primary, secondary, outline, ghost, destructive) and 3 sizes (sm, md, lg)
- **Dialog** - Modal dialog system with overlay, trigger, content, header, footer, title, and description components
- **Dropdown Menu** - Contextual menu with nested support, labels, separators, and sub-menus
- **Tooltip** - Accessible tooltip component with TooltipProvider for managing delay and positioning
- **Separator** - Visual divider component with horizontal and vertical orientations

#### Feature Components (Composites)
- **Navbar** - Responsive navigation bar with:
  - Mobile hamburger menu
  - Dropdown support for nested navigation
  - Sticky positioning option
  - Logo/brand area
  - Actions area for buttons
  - Automatic responsive behavior

- **Sidebar** - Collapsible sidebar navigation with:
  - Nested navigation support
  - Badges for notifications/counts
  - Icons support
  - Active state highlighting
  - Header and footer areas
  - Smooth collapse animations
  - Configurable default collapsed state

#### Utilities
- **cn()** - className merge utility using `clsx` and `tailwind-merge` for proper Tailwind CSS class deduplication

#### TypeScript Support
- Full TypeScript definitions for all components
- Exported types: `ButtonProps`, `NavbarProps`, `NavbarItem`, `SidebarProps`, `SidebarSection`, `SidebarItem`, `Variant`, `Size`, `BaseComponentProps`
- Polymorphic component support with `asChild` prop

#### Build System
- **tsup** configuration for dual ESM/CJS builds
- TypeScript declaration generation
- Source maps included
- Tree-shakeable exports
- Optimized bundle size (~35-45 KB gzipped)

#### Styling
- Tailwind CSS v4 integration
- CSS variables for theming
- Dark mode support via `prefers-color-scheme`
- Customizable via className prop on all components

#### Documentation
- Comprehensive README with installation and usage
- EXAMPLE.md with live code examples for all components
- COMPONENTS.md with complete API reference
- API.md with setup, configuration, and advanced usage
- Interactive demo page at `/demo`

#### Accessibility
- WCAG 2.1 Level AA compliance
- Full keyboard navigation support
- Proper ARIA attributes on all components
- Screen reader friendly
- Focus management
- Color contrast compliance

### 🔧 Technical Details

#### Dependencies
- Built on `@radix-ui/*` primitives (v1.x)
- Uses `class-variance-authority` for variant management
- Includes `clsx` and `tailwind-merge` for className handling

#### Peer Dependencies
- React 18.x or 19.x
- React DOM 18.x or 19.x
- Next.js 13.x, 14.x, 15.x, or 16.x
- Tailwind CSS 3.x or 4.x

#### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari 12+
- Chrome Mobile (latest)

### 📦 Package Structure

```
radix-ui-components-lib/
├── dist/                    # Build output
│   ├── index.js            # CommonJS build
│   ├── index.mjs           # ES Module build
│   ├── index.d.ts          # TypeScript declarations
│   └── *.map               # Source maps
├── src/
│   ├── components/ui/      # Base UI components
│   ├── features/           # Composite components
│   ├── lib/                # Utilities
│   ├── types/              # TypeScript types
│   ├── styles/             # Global styles
│   └── index.ts            # Main export
├── EXAMPLE.md              # Usage examples
├── COMPONENTS.md           # Component API reference
├── API.md                  # Complete API documentation
├── README.md               # Main documentation
├── CHANGELOG.md            # This file
└── LICENSE                 # MIT License
```

### 🚀 Installation

```bash
bun add git+https://github.com/yoyoucay/radix-ui-components-lib.git
```

### 📖 Quick Start

```tsx
// Import styles
import 'radix-ui-components-lib/styles';

// Use components
import { Button, Navbar, Sidebar } from 'radix-ui-components-lib';

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

### 🎯 Next Steps

Future releases will include:
- Additional UI components (Tabs, Accordion, Select, Switch, Avatar, etc.)
- More composite components (Header, Footer, Card, etc.)
- Enhanced theming system
- Additional styling utilities
- Component composition patterns
- Animation utilities
- Form components and validation helpers
- Data table components
- Chart components integration

---

## Versioning Strategy

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality in a backwards compatible manner
- **PATCH** version for backwards compatible bug fixes

## How to Update

To update to the latest version:

```bash
# Update from Git
bun update radix-ui-components-lib

# Or reinstall
bun remove radix-ui-components-lib
bun add git+https://github.com/yoyoucay/radix-ui-components-lib.git
```

---

[0.1.0]: https://github.com/yoyoucay/radix-ui-components-lib/releases/tag/v0.1.0
