import type { ReactNode } from 'react';

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export type Variant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type Size = 'sm' | 'md' | 'lg';
