import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./providers/ThemeProvider";
import { LoadingProvider } from "./providers/LoadingProvider";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { AnimatedTransition } from "./components/shared/AnimatedTransition";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Works from "@/pages/Works";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <AnimatedTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/works" component={Works} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </AnimatedTransition>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          <LoadingProvider>
            {(isLoading) => (
              <div className="min-h-screen flex flex-col">
                {!isLoading && <Navbar />}
                <main className={`flex-1 ${!isLoading ? 'pt-16' : ''}`}>
                  <Router />
                </main>
                {!isLoading && <Footer />}
                <Toaster />
              </div>
            )}
          </LoadingProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;