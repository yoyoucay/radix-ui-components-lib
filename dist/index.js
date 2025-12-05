'use strict';

var React3 = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var DialogPrimitive = require('@radix-ui/react-dialog');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var Link = require('next/link');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React3__namespace = /*#__PURE__*/_interopNamespace(React3);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);
var Link__default = /*#__PURE__*/_interopDefault(Link);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300",
        outline: "border border-slate-300 bg-transparent hover:bg-slate-100",
        ghost: "hover:bg-slate-100",
        destructive: "bg-red-600 text-white hover:bg-red-700"
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Button = React3__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ jsxRuntime.jsx(
      Comp,
      __spreadValues({
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        suppressHydrationWarning: true
      }, props)
    );
  }
);
Button.displayName = "Button";
var Dialog = DialogPrimitive__namespace.Root;
var DialogTrigger = DialogPrimitive__namespace.Trigger;
var DialogPortal = DialogPrimitive__namespace.Portal;
var DialogClose = DialogPrimitive__namespace.Close;
var DialogOverlay = React3__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Overlay,
    __spreadValues({
      ref,
      className: cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var DialogContent = React3__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      DialogPrimitive__namespace.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg sm:max-w-md",
          className
        )
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntime.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "h-4 w-4",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 6 6 18" }),
                  /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m6 6 12 12" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
});
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
var DialogHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className)
    }, props)
  );
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
    }, props)
  );
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React3__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Title,
    __spreadValues({
      ref,
      className: cn("text-lg font-semibold leading-none tracking-tight", className)
    }, props)
  );
});
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var DialogDescription = React3__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-slate-500", className)
    }, props)
  );
});
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var DropdownMenuSubTrigger = React3__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.SubTrigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "ml-auto h-4 w-4",
            children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m9 18 6-6-6-6" })
          }
        )
      ]
    })
  );
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive__namespace.SubTrigger.displayName;
var DropdownMenuSubContent = React3__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.SubContent,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      )
    }, props)
  );
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive__namespace.SubContent.displayName;
var DropdownMenuContent = React3__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      )
    }, props)
  ) });
});
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React3__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var DropdownMenuLabel = React3__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Label,
    __spreadValues({
      ref,
      className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)
    }, props)
  );
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var DropdownMenuSeparator = React3__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-slate-200", className)
    }, props)
  );
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var TooltipProvider = TooltipPrimitive__namespace.Provider;
var Tooltip = TooltipPrimitive__namespace.Root;
var TooltipTrigger = TooltipPrimitive__namespace.Trigger;
var TooltipContent = React3__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TooltipPrimitive__namespace.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 overflow-hidden rounded-md bg-slate-900 px-3 py-1.5 text-xs text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        className
      )
    }, props)
  );
});
TooltipContent.displayName = TooltipPrimitive__namespace.Content.displayName;
var Separator2 = React3__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, orientation = "horizontal", decorative = true } = _b, props = __objRest(_b, ["className", "orientation", "decorative"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SeparatorPrimitive__namespace.Root,
    __spreadValues({
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-slate-200",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )
    }, props)
  );
});
Separator2.displayName = SeparatorPrimitive__namespace.Root.displayName;
function Navbar({ logo, items = [], actions, className, sticky = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React3__namespace.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "nav",
    {
      className: cn(
        "border-b border-slate-200 bg-white",
        sticky && "sticky top-0 z-40",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-16 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center", children: logo && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-shrink-0", children: logo }) }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "ml-10 flex items-center space-x-4", children: items.map((item, index) => /* @__PURE__ */ jsxRuntime.jsx(NavbarItemRenderer, { item }, index)) }) }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "hidden md:flex items-center space-x-4", children: actions }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex md:hidden", children: /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              "aria-label": "Toggle menu",
              children: mobileMenuOpen ? /* @__PURE__ */ jsxRuntime.jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "h-6 w-6",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 6 6 18" }),
                    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m6 6 12 12" })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntime.jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "h-6 w-6",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 12h16" }),
                    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 6h16" }),
                    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 18h16" })
                  ]
                }
              )
            }
          ) })
        ] }) }),
        mobileMenuOpen && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "md:hidden border-t border-slate-200", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-1 px-2 pb-3 pt-2", children: [
          items.map((item, index) => /* @__PURE__ */ jsxRuntime.jsx(MobileNavbarItem, { item, onClose: () => setMobileMenuOpen(false) }, index)),
          actions && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-4 px-3", children: actions })
        ] }) })
      ]
    }
  );
}
function NavbarItemRenderer({ item }) {
  if (item.children && item.children.length > 0) {
    return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(Button, { variant: "ghost", size: "sm", className: "gap-1", children: [
        item.icon,
        item.label,
        /* @__PURE__ */ jsxRuntime.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "h-4 w-4",
            children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m6 9 6 6 6-6" })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuContent, { align: "start", children: item.children.map((child, idx) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(Link__default.default, { href: child.href, className: "flex items-center gap-2", children: [
        child.icon,
        child.label
      ] }) }, idx)) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(Link__default.default, { href: item.href, children: /* @__PURE__ */ jsxRuntime.jsxs(Button, { variant: "ghost", size: "sm", className: "gap-2", children: [
    item.icon,
    item.label
  ] }) });
}
function MobileNavbarItem({
  item,
  onClose
}) {
  const [expanded, setExpanded] = React3__namespace.useState(false);
  if (item.children && item.children.length > 0) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          onClick: () => setExpanded(!expanded),
          className: "flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-100",
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-2", children: [
              item.icon,
              item.label
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: cn("h-4 w-4 transition-transform", expanded && "rotate-180"),
                children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m6 9 6 6 6-6" })
              }
            )
          ]
        }
      ),
      expanded && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "ml-4 space-y-1", children: item.children.map((child, idx) => /* @__PURE__ */ jsxRuntime.jsxs(
        Link__default.default,
        {
          href: child.href,
          onClick: onClose,
          className: "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100",
          children: [
            child.icon,
            child.label
          ]
        },
        idx
      )) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Link__default.default,
    {
      href: item.href,
      onClick: onClose,
      className: "flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-100",
      children: [
        item.icon,
        item.label
      ]
    }
  );
}
function Sidebar({
  items = [],
  className,
  collapsible = false,
  defaultCollapsed = false,
  header,
  footer
}) {
  const [collapsed, setCollapsed] = React3__namespace.useState(defaultCollapsed);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "aside",
    {
      className: cn(
        "flex h-screen flex-col border-r border-slate-200 bg-white transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
        className
      ),
      children: [
        header && /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(
          "flex h-16 items-center border-b border-slate-200 px-4",
          collapsed && "justify-center px-2"
        ), children: collapsed ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center overflow-hidden", children: typeof header === "string" ? header.charAt(0) : header }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "overflow-hidden", children: header }) }),
        collapsible && /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(
          "flex items-center border-b border-slate-200 p-2",
          collapsed ? "justify-center" : "justify-end"
        ), children: /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => setCollapsed(!collapsed),
            className: "h-8 w-8 p-0",
            title: collapsed ? "Expand sidebar" : "Collapse sidebar",
            children: /* @__PURE__ */ jsxRuntime.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: cn("h-4 w-4 transition-transform duration-300", collapsed && "rotate-180"),
                children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m15 18-6-6 6-6" })
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "flex-1 overflow-y-auto overflow-x-hidden p-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent", children: items.map((section, sectionIdx) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("mb-4", sectionIdx === 0 && "mt-0"), children: [
          section.title && !collapsed && /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500", children: section.title }),
          section.title && collapsed && sectionIdx > 0 && /* @__PURE__ */ jsxRuntime.jsx(Separator2, { className: "my-2" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-1", children: section.items.map((item, itemIdx) => /* @__PURE__ */ jsxRuntime.jsx(SidebarItemRenderer, { item, collapsed }, itemIdx)) })
        ] }, sectionIdx)) }),
        footer && /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(
          "border-t border-slate-200 p-4",
          collapsed && "flex justify-center px-2"
        ), children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(collapsed && "flex items-center justify-center"), children: footer }) })
      ]
    }
  );
}
function SidebarItemRenderer({
  item,
  collapsed,
  level = 0
}) {
  var _a;
  const [expanded, setExpanded] = React3__namespace.useState(false);
  const hasChildren = item.children && item.children.length > 0;
  if (hasChildren && !collapsed) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          onClick: () => setExpanded(!expanded),
          className: cn(
            "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
            item.active && "bg-slate-900 text-white hover:bg-slate-800",
            !item.active && "text-slate-700",
            level > 0 && !collapsed && "ml-6"
          ),
          children: [
            item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("flex h-5 w-5 items-center justify-center flex-shrink-0"), children: item.icon }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1 text-left truncate", children: item.label }),
            item.badge && /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(
              "rounded-full px-2 py-0.5 text-xs font-medium",
              item.active ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
            ), children: item.badge }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: cn(
                  "h-4 w-4 flex-shrink-0 transition-transform duration-200",
                  expanded && "rotate-180"
                ),
                children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m6 9 6 6 6-6" })
              }
            )
          ]
        }
      ),
      expanded && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-1 space-y-1", children: (_a = item.children) == null ? void 0 : _a.map((child, idx) => /* @__PURE__ */ jsxRuntime.jsx(
        SidebarItemRenderer,
        {
          item: child,
          collapsed,
          level: level + 1
        },
        idx
      )) })
    ] });
  }
  if (hasChildren && collapsed) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Link__default.default,
      {
        href: item.href,
        className: cn(
          "flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
          item.active && "bg-slate-900 text-white hover:bg-slate-800",
          !item.active && "text-slate-700"
        ),
        title: item.label,
        children: item.icon ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex h-5 w-5 items-center justify-center flex-shrink-0", children: item.icon }) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-semibold", children: item.label.charAt(0) })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Link__default.default,
    {
      href: item.href,
      className: cn(
        "flex items-center gap-2 rounded-md transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
        collapsed ? "h-10 w-10 justify-center" : "px-3 py-2",
        item.active && "bg-slate-900 text-white hover:bg-slate-800",
        !item.active && "text-slate-700",
        level > 0 && !collapsed && "ml-6",
        "text-sm font-medium"
      ),
      title: collapsed ? item.label : void 0,
      children: [
        item.icon ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("flex h-5 w-5 items-center justify-center flex-shrink-0"), children: item.icon }) : !collapsed && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-5" }),
        !collapsed && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1 truncate", children: item.label }),
          item.badge && /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(
            "rounded-full px-2 py-0.5 text-xs font-medium flex-shrink-0",
            item.active ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
          ), children: item.badge })
        ] })
      ]
    }
  );
}

exports.Button = Button;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.Navbar = Navbar;
exports.Separator = Separator2;
exports.Sidebar = Sidebar;
exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map