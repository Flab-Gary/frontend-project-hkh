'use client';

import { QueryClientProvider, HydrationBoundary } from '@tanstack/react-query';
import appSettings from '@/setup';

export default function ClientProviders({
  children,
  dehydratedState,
}: {
  children: React.ReactNode;
  dehydratedState?: unknown;
}) {


  return (
    <QueryClientProvider client={appSettings.queryClient}>
      <HydrationBoundary state={dehydratedState}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
