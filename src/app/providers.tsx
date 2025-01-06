'use client';
import { NextUIProvider } from '@nextui-org/react';
import ContextProviders from '../../contexts/ContextProviders';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ContextProviders>{children}</ContextProviders>
    </NextUIProvider>
  );
}
