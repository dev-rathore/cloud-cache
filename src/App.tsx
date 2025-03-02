import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from "@/routes/app-routes";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ThemeProvider storageKey="cloud-cache-ui-theme">
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
          <Toaster />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App
