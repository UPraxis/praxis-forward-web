import React, { Suspense, lazy, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

// Dynamically import all pages under /pages
const pages = import.meta.glob("./pages/**/*.tsx");

const App: React.FC = () => {
  const routes = useMemo(() => {
    return Object.entries(pages).map(([filePath, importFn]) => {
      // Remove "./pages/" prefix and ".tsx" extension
      let relativePath = filePath
          .replace(/^\.\/pages\//, "")
          .replace(/\.tsx$/, "");

      // Map root index.tsx → "/"
      if (relativePath.toLowerCase() === "index") {
        relativePath = "";
      }

      // Remove trailing "/index" for nested index files
      if (relativePath.endsWith("/index")) {
        relativePath = relativePath.slice(0, -"index".length - 1);
      }

      // Build route path
      let routePath = relativePath === "" ? "/" : `/${relativePath.toLowerCase()}`;

      // Special case for NotFound.tsx
      if (relativePath.toLowerCase() === "notfound") {
        routePath = "*";
      }

      // Lazy-load the component
      const Component = lazy(() => importFn() as Promise<{ default: React.FC }>);

      return { routePath, Component };
    });
  }, []);

  return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <HelmetProvider>
              <div className="min-h-screen flex flex-col bg-background text-foreground">
                <Header />
                <main className="flex-1">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      {routes.map(({ routePath, Component }) => (
                          <Route key={routePath} path={routePath} element={<Component />} />
                      ))}
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </HelmetProvider>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
  );
};

export default App;
