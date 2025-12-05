# Component API Reference

Complete API documentation for all components in the Radix UI Components Library.

## Table of Contents

- [Button](#button)
- [Dialog](#dialog)
- [Dropdown Menu](#dropdown-menu)
- [Tooltip](#tooltip)
- [Separator](#separator)
- [Navbar](#navbar)
- [Sidebar](#sidebar)
- [Utilities](#utilities)

---

## Button

A versatile button component with multiple variants and sizes.

### Import

```tsx
import { Button } from 'radix-ui-components-lib';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive'` | `'default'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `asChild` | `boolean` | `false` | Polymorphic prop to render as child element |
| `className` | `string` | `undefined` | Additional CSS classes |
| `disabled` | `boolean` | `false` | Disabled state |
| `onClick` | `() => void` | `undefined` | Click handler |

Plus all standard HTML button attributes.

### Examples

```tsx
<Button>Default Button</Button>
<Button variant="primary" size="lg">Large Primary</Button>
<Button variant="destructive" onClick={() => alert('Deleted')}>Delete</Button>
<Button asChild><a href="/link">Link Button</a></Button>
```

### Variants

- **default**: Dark background (slate-900)
- **primary**: Blue background (blue-600)
- **secondary**: Light background (slate-200)
- **outline**: Border only, transparent background
- **ghost**: No background, hover effect only
- **destructive**: Red background (red-600)

---

## Dialog

A modal dialog component for alerts, confirmations, and forms.

### Import

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from 'radix-ui-components-lib';
```

### Dialog (Root)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Default open state (uncontrolled) |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback when open state changes |

### DialogContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | `undefined` | Dialog content |

Includes a close button by default.

### DialogHeader

Container for dialog title and description. Accepts `className` prop.

### DialogTitle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | `undefined` | Title text |

### DialogDescription

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | `undefined` | Description text |

### DialogFooter

Container for dialog actions (buttons). Accepts `className` prop.

### Example

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>
        Are you sure you want to proceed?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## Dropdown Menu

A contextual menu component with support for nested menus.

### Import

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from 'radix-ui-components-lib';
```

### DropdownMenu (Root)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Default open state (uncontrolled) |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback when open state changes |

### DropdownMenuContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `sideOffset` | `number` | `4` | Distance from trigger |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment relative to trigger |

### DropdownMenuItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `inset` | `boolean` | `false` | Add left padding for alignment |
| `disabled` | `boolean` | `false` | Disabled state |
| `onSelect` | `() => void` | `undefined` | Selection handler |

### DropdownMenuLabel

Label for grouping menu items. Accepts `className` and `inset` props.

### DropdownMenuSeparator

Visual separator between menu items. Accepts `className` prop.

### Example

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

## Tooltip

Accessible tooltip component for additional information.

### Import

```tsx
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from 'radix-ui-components-lib';
```

### TooltipProvider

Wrap your app or component tree with this provider.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delayDuration` | `number` | `700` | Delay before showing tooltip (ms) |
| `skipDelayDuration` | `number` | `300` | Delay when moving between tooltips |

### Tooltip (Root)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Default open state |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Open state change handler |

### TooltipContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `sideOffset` | `number` | `4` | Distance from trigger |
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Tooltip position |

### Example

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Helpful information</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

## Separator

A visual divider for content sections.

### Import

```tsx
import { Separator } from 'radix-ui-components-lib';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Separator orientation |
| `decorative` | `boolean` | `true` | Whether separator is decorative |
| `className` | `string` | `undefined` | Additional CSS classes |

### Example

```tsx
<div>
  <p>Section 1</p>
  <Separator className="my-4" />
  <p>Section 2</p>
</div>
```

---

## Navbar

A responsive navigation bar with mobile menu support.

### Import

```tsx
import { Navbar } from 'radix-ui-components-lib';
import type { NavbarProps, NavbarItem } from 'radix-ui-components-lib';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `ReactNode` | `undefined` | Logo or brand element |
| `items` | `NavbarItem[]` | `[]` | Navigation items |
| `actions` | `ReactNode` | `undefined` | Action buttons (login, etc.) |
| `className` | `string` | `undefined` | Additional CSS classes |
| `sticky` | `boolean` | `false` | Sticky positioning at top |

### NavbarItem Type

```tsx
interface NavbarItem {
  label: string;        // Display text
  href: string;         // Link destination
  icon?: ReactNode;     // Optional icon
  children?: NavbarItem[]; // Nested items (dropdown)
}
```

### Features

- Automatic mobile menu (hamburger) on small screens
- Dropdown support for nested navigation
- Sticky header option
- Responsive design

### Example

```tsx
<Navbar
  logo={<span className="font-bold">MyApp</span>}
  items={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Products',
      href: '/products',
      children: [
        { label: 'Category 1', href: '/products/cat1' },
        { label: 'Category 2', href: '/products/cat2' },
      ],
    },
  ]}
  actions={
    <>
      <Button variant="ghost">Login</Button>
      <Button variant="primary">Sign Up</Button>
    </>
  }
  sticky
/>
```

---

## Sidebar

A collapsible sidebar navigation component.

### Import

```tsx
import { Sidebar } from 'radix-ui-components-lib';
import type { SidebarProps, SidebarSection, SidebarItem } from 'radix-ui-components-lib';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `SidebarSection[]` | `[]` | Sidebar navigation sections |
| `className` | `string` | `undefined` | Additional CSS classes |
| `collapsible` | `boolean` | `false` | Enable collapse functionality |
| `defaultCollapsed` | `boolean` | `false` | Default collapsed state |
| `header` | `ReactNode` | `undefined` | Sidebar header content |
| `footer` | `ReactNode` | `undefined` | Sidebar footer content |

### SidebarSection Type

```tsx
interface SidebarSection {
  title?: string;        // Section title (optional)
  items: SidebarItem[];  // Section items
}
```

### SidebarItem Type

```tsx
interface SidebarItem {
  label: string;           // Display text
  href: string;            // Link destination
  icon?: ReactNode;        // Optional icon
  active?: boolean;        // Active state highlighting
  badge?: string | number; // Badge (notification count, etc.)
  children?: SidebarItem[]; // Nested items (expandable)
}
```

### Features

- Collapsible sidebar with animated transitions
- Nested navigation support
- Badges for notifications/counts
- Icons support
- Header and footer areas
- Active state highlighting

### Example

```tsx
<Sidebar
  collapsible
  header={<h2 className="font-bold">Dashboard</h2>}
  items={[
    {
      title: 'Main',
      items: [
        { 
          label: 'Home', 
          href: '/', 
          icon: <HomeIcon />, 
          active: true 
        },
        { 
          label: 'Analytics', 
          href: '/analytics', 
          icon: <ChartIcon />,
          badge: '5'
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        { label: 'Profile', href: '/profile', icon: <UserIcon /> },
        { label: 'Preferences', href: '/prefs', icon: <SettingsIcon /> },
      ],
    },
  ]}
  footer={
    <Button variant="ghost" className="w-full">
      Logout
    </Button>
  }
/>
```

---

## Utilities

### cn (className utility)

Utility function for merging Tailwind CSS classes with proper precedence.

#### Import

```tsx
import { cn } from 'radix-ui-components-lib';
```

#### Usage

```tsx
// Basic usage
cn('text-red-500', 'bg-blue-500')
// => "text-red-500 bg-blue-500"

// Conditional classes
cn('base-class', condition && 'conditional-class')
// => "base-class conditional-class" (if condition is true)

// Tailwind merge (deduplication)
cn('px-2 py-1', 'px-4')
// => "py-1 px-4" (px-4 overrides px-2)

// With component
<Button className={cn('custom-class', isActive && 'ring-2')}>
  Click me
</Button>
```

#### Parameters

- `...inputs: ClassValue[]` - Any number of class values (strings, objects, arrays, etc.)

#### Returns

- `string` - Merged and deduplicated class string

---

## TypeScript Types

### Common Types

```tsx
import type {
  // Component Props
  ButtonProps,
  NavbarProps,
  NavbarItem,
  SidebarProps,
  SidebarSection,
  SidebarItem,
  
  // Utility Types
  Variant,
  Size,
  BaseComponentProps,
} from 'radix-ui-components-lib';
```

### Variant Type

```tsx
type Variant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
```

### Size Type

```tsx
type Size = 'sm' | 'md' | 'lg';
```

### BaseComponentProps

```tsx
interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}
```

---

## Accessibility

All components are built with accessibility in mind:

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **ARIA Attributes**: Proper ARIA labels, roles, and states
- **Focus Management**: Logical focus order and visible focus indicators
- **Screen Reader Support**: Semantic HTML and proper announcements
- **Color Contrast**: WCAG AA compliant color combinations

### Keyboard Shortcuts

- **Button**: `Enter` or `Space` to activate
- **Dialog**: `Esc` to close
- **Dropdown Menu**: Arrow keys to navigate, `Enter` to select, `Esc` to close
- **Sidebar**: Arrow keys to navigate nested items

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Contributing

Found an issue or want to add a feature? Check out our [Contributing Guide](./CONTRIBUTING.md).

## License

MIT License - See [LICENSE](./LICENSE) file for details.
