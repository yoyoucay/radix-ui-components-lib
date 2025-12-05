# UI Kit - Radix UI

A production-ready, accessible component library built with Radix UI primitives and styled with Tailwind CSS. Perfect for building modern React applications with a consistent design system.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0-blue)](https://reactjs.org/)

## ✨ Features

- 🎨 **Beautiful Design** - Modern, clean UI components ready to use
- ♿ **Fully Accessible** - WCAG compliant, keyboard navigation, screen reader support
- 🎯 **Radix UI Primitives** - Built on top of unstyled, accessible components
- 💅 **Tailwind CSS** - Highly customizable with utility-first CSS
- 📦 **Tree-shakeable** - Import only what you need
- 🔧 **TypeScript Support** - Fully typed for better DX
- 🎭 **Dark Mode Ready** - Easy theme customization
- 📱 **Responsive** - Mobile-first design approach

## 📦 Installation

### Option 1: Install as a Library (Recommended)

Install the required dependencies in your existing project:

#### Using npm

```bash
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip @radix-ui/react-separator @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

#### Using yarn

```bash
yarn add @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip @radix-ui/react-separator @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

#### Using pnpm

```bash
pnpm add @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip @radix-ui/react-separator @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

#### Using bun

```bash
bun add @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip @radix-ui/react-separator @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

### Option 2: Clone Demo Project

To run the demo and explore all components:

```bash
# Clone the repository
git clone https://github.com/yoyoucay/radix-ui-components-lib.git
cd radix-ui-components-lib

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install

# Run the demo
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the interactive demos.

## 🚀 Quick Start

### 1. Copy Components

Clone this repository and copy the components you need from `src/components/ui/` to your project:

```bash
# Clone the repository
git clone https://github.com/yoyoucay/radix-ui-components-lib.git

# Copy components to your project
cp -r radix-ui-components-lib/src/components/ui ./src/components/
cp -r radix-ui-components-lib/src/lib ./src/
```

### 2. Configure Tailwind CSS

Make sure your `tailwind.config.ts` includes the component paths:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
```

### 3. Use Components

Import and use components in your application:

```tsx
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

function App() {
  return (
    <TooltipProvider>
      <div className="p-8">
        <Button variant="default" size="md">
          Click me
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <h2>Dialog Title</h2>
            <p>Dialog content goes here</p>
          </DialogContent>
        </Dialog>

        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>
            <p>Helpful information</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
```

## 📚 Available Components

### Core Components

| Component | Description | Props |
|-----------|-------------|-------|
| **Button** | Versatile button with multiple variants | `variant`, `size`, `disabled` |
| **Dialog** | Modal dialogs for important messages | `open`, `onOpenChange` |
| **Dropdown Menu** | Context menus and action lists | `open`, `onOpenChange` |
| **Tooltip** | Contextual help on hover | `content`, `side`, `align` |
| **Separator** | Visual content dividers | `orientation` |

### Layout Components

| Component | Description | Use Case |
|-----------|-------------|----------|
| **Navbar** | Navigation header | Top navigation bar |
| **Sidebar** | Side navigation | App navigation menu |

## 🎨 Component Examples

### Button

```tsx
import { Button } from '@/components/ui/button';

// Variants
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>
```

### Dialog

```tsx
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

### Dropdown Menu

```tsx
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

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
```

### Tooltip

```tsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Helpful tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## 🎨 Customization

### Styling with Tailwind

All components accept `className` prop for custom styling:

```tsx
<Button className="bg-purple-600 hover:bg-purple-700">
  Custom Button
</Button>
```

### Modifying Component Variants

Edit the component files in `src/components/ui/` to add new variants or modify existing ones:

```typescript
// In button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground...",
        // Add your custom variant
        custom: "bg-gradient-to-r from-purple-500 to-pink-500...",
      },
    },
  }
);
```

## 🏗️ Project Structure

```
radix-ui-components-lib/
├── src/
│   ├── components/
│   │   └── ui/              # Reusable UI components
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── tooltip.tsx
│   │       ├── separator.tsx
│   │       ├── navbar.tsx
│   │       └── sidebar.tsx
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn)
│   └── app/
│       ├── page.tsx         # Demo homepage
│       ├── demo/            # Component demos
│       └── documentation/   # Documentation page
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## 🔧 Development

### Run Demo Locally

```bash
# Clone the repository
git clone https://github.com/yoyoucay/radix-ui-components-lib.git
cd radix-ui-components-lib

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the component demos.

### Build for Production

```bash
npm run build
```

## 📖 Documentation

Visit the [Live Demo](http://localhost:3000) to see all components in action with interactive examples.

- **Homepage**: Component showcase
- **Demo Page**: Interactive component playground
- **Documentation**: Full API reference

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure accessibility standards are met

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Design inspiration and component patterns
- [CVA](https://cva.style/) - Class Variance Authority for variant management

## 🔗 Links

- [GitHub Repository](https://github.com/yoyoucay/radix-ui-components-lib)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Next.js Documentation](https://nextjs.org/docs)

## 📞 Support

- 📧 Email: support@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yoyoucay/radix-ui-components-lib/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yoyoucay/radix-ui-components-lib/discussions)

---

Made with ❤️ by the UI Kit - Radix UI team
