"use client"

import { Suspense } from "react";
import Loading from "./Loading/Loading";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </QueryClientProvider>
  );
}
