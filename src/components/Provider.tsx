"use client";

import { Suspense, useEffect } from "react";
import Loading from "./Loading/Loading";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToast from "@/store/toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
    },
  },
});

export default function Provider({ children }: { children: React.ReactNode }) {
  const { toastState, setToast } = useToast();

  useEffect(() => {
    if (toastState) {
      toast.warning(toastState, { toastId: `warningToast-${Date.now()}` });
      setToast(null);
    }
  }, [toastState, setToast]);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer style={{ zIndex: 10 }} />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </QueryClientProvider>
  );
}
