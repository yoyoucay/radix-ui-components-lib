# Radix UI Components Library

A standalone, reusable Radix UI component library for Next.js projects. Built with TypeScript, Tailwind CSS v4, and optimized for modern React applications.

## 🚀 Features

- **🎨 Pre-styled Components** — Beautiful, accessible components built on Radix UI primitives
- **🔧 Highly Customizable** — Easy to theme and extend with Tailwind CSS
- **📦 Tree-shakeable** — Import only what you need
- **♿ Accessible** — WCAG compliant with keyboard navigation
- **🎯 TypeScript First** — Full type safety and autocomplete
- **🌙 Dark Mode Ready** — Built-in dark mode support
- **📱 Responsive** — Mobile-first design approach

## 📦 Installation

### Install via Git

```bash
bun add git+https://github.com/your-username/radix-ui-components-lib.git
# or
npm install git+https://github.com/your-username/radix-ui-components-lib.git
# or
yarn add git+https://github.com/your-username/radix-ui-components-lib.git
# or
pnpm add git+https://github.com/your-username/radix-ui-components-lib.git
```

### Install Peer Dependencies

```bash
bun add react react-dom next tailwindcss
```

## ⚙️ Setup

### 1. Import Styles

Add the component library styles to your root layout or main CSS file:

```tsx
// app/layout.tsx or _app.tsx
import 'radix-ui-components-lib/styles';
import './globals.css'; // Your custom styles
```

Or import directly in your CSS:

```css
/* globals.css */
@import 'radix-ui-components-lib/styles';
@import 'tailwindcss';
```

### 2. Configure Tailwind CSS

Update your `tailwind.config.ts` to include the component library paths:

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/radix-ui-components-lib/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

### 3. Configure Path Aliases (Optional but Recommended)

If you're using TypeScript, add path aliases to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📖 Usage Examples

### Button Component

```tsx
import { Button } from 'radix-ui-components-lib';

export default function MyPage() {
  return (
    <div>
      <Button variant="default">Default Button</Button>
      <Button variant="primary">Primary Button</Button>
      <Button variant="outline" size="lg">Large Outline</Button>
      <Button variant="ghost" size="sm">Small Ghost</Button>
    </div>
  );
}
```

### Dialog Component

```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, Button } from 'radix-ui-components-lib';

export default function MyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <p>Your dialog content goes here.</p>
      </DialogContent>
    </Dialog>
  );
}
```

### Dropdown Menu

```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, Button } from 'radix-ui-components-lib';

export default function MyDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Navbar Component

```tsx
import { Navbar } from 'radix-ui-components-lib';

export default function MyApp() {
  return (
    <Navbar
      logo={<span className="text-xl font-bold">MyApp</span>}
      items={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        {
          label: 'Products',
          href: '/products',
          children: [
            { label: 'Electronics', href: '/products/electronics' },
            { label: 'Clothing', href: '/products/clothing' },
          ],
        },
      ]}
      actions={
        <>
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </>
      }
      sticky
    />
  );
}
```

### Sidebar Component

```tsx
import { Sidebar } from 'radix-ui-components-lib';

export default function MyLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar
        collapsible
        header={<h2 className="text-lg font-bold">Dashboard</h2>}
        items={[
          {
            title: 'Main',
            items: [
              { label: 'Home', href: '/', icon: <HomeIcon />, active: true },
              { label: 'Analytics', href: '/analytics', icon: <ChartIcon />, badge: '3' },
            ],
          },
          {
            title: 'Settings',
            items: [
              { label: 'Profile', href: '/profile', icon: <UserIcon /> },
              { label: 'Preferences', href: '/preferences', icon: <SettingsIcon /> },
            ],
          },
        ]}
      />
      <main className="flex-1 overflow-y-auto p-8">{/* Your content */}</main>
    </div>
  );
}
```

## 🎨 Available Components

### UI Components
- **Button** — Versatile button with multiple variants (default, primary, secondary, outline, ghost, destructive)
- **Dialog** — Modal dialog for alerts, confirmations, and forms
- **Dropdown Menu** — Contextual menu with nested support
- **Tooltip** — Accessible tooltips for additional information
- **Separator** — Visual divider for content sections

### Feature Components
- **Navbar** — Responsive navigation bar with mobile menu and dropdown support
- **Sidebar** — Collapsible sidebar with nested navigation and badges

## 🛠️ Customization

### Theming with CSS Variables

Override default colors in your `globals.css`:

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

### Extending Components

All components accept `className` prop for custom styling:

```tsx
<Button className="bg-gradient-to-r from-purple-500 to-pink-500">
  Gradient Button
</Button>
```

### Creating Custom Variants

Use the `cn` utility for merging classes:

```tsx
import { Button, cn } from 'radix-ui-components-lib';

<Button className={cn('your-custom-classes', someCondition && 'conditional-class')}>
  Custom Styled
</Button>
```

## 📁 Project Structure

```
radix-ui-components-lib/
├── src/
│   ├── components/
│   │   └── ui/           # Base UI components
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── tooltip.tsx
│   │       ├── separator.tsx
│   │       └── index.ts
│   ├── features/         # Composite feature components
│   │   ├── navbar.tsx
│   │   ├── sidebar.tsx
│   │   └── index.ts
│   ├── lib/              # Utilities
│   │   └── utils.ts
│   ├── types/            # TypeScript types
│   │   └── index.ts
│   ├── styles/           # Global styles
│   │   └── globals.css
│   └── index.ts          # Main entry point
├── dist/                 # Build output (auto-generated)
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

## 🔨 Development

### Build the Library

```bash
bun run build
```

This generates:
- `dist/index.js` (CommonJS)
- `dist/index.mjs` (ES Modules)
- `dist/index.d.ts` (TypeScript declarations)

### Type Checking

```bash
bun run type-check
```

### Linting

```bash
bun run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-component`)
3. Commit your changes (`git commit -m 'Add amazing component'`)
4. Push to the branch (`git push origin feature/amazing-component`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this library in your projects!

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) — Unstyled, accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) — Design inspiration

## 📞 Support

For issues, questions, or contributions, please open an issue on GitHub.

---

**Made with ❤️ for the Next.js community**
