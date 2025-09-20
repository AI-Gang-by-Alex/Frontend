'use client';

import { FC, ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export const Providers: FC<ProvidersProps> = props => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>{props.children}</MantineProvider>
    </QueryClientProvider>
  );
};
