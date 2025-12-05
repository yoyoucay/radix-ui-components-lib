# Radix UI Components Library

A modern, accessible component library built with Radix UI primitives and styled with Tailwind CSS.

## Features

- 🎨 Beautiful, customizable components
- ♿ Fully accessible (WCAG compliant)
- 🎯 Built with Radix UI primitives
- 💅 Styled with Tailwind CSS
- 📦 Easy to integrate
- 🔧 TypeScript support

## Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Getting Started

Import and use components in your React application:

```tsx
import { Button, Dialog, Tooltip } from '@/components/ui';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Tooltip content="Helpful information">
        <span>Hover me</span>
      </Tooltip>
    </div>
  );
}
```

## Available Components

- **Button** - Versatile button component with multiple variants and sizes
- **Dialog** - Modal dialogs for confirmations, forms, and important messages
- **Dropdown Menu** - Context menus and action lists for user interactions
- **Tooltip** - Contextual help and information on hover
- **Separator** - Visual dividers to separate content sections
- **Navbar** - Navigation header component
- **Sidebar** - Side navigation component

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the demo.

## Project Structure

```
src/
├── components/
│   └── ui/          # UI components
├── app/
│   └── demo/        # Demo pages
└── lib/             # Utility functions
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Links

- [GitHub Repository](https://github.com/yoyoucay/radix-ui-components-lib)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
