import { ArrowRight, PlayCircle, Shield, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDY4LCA2OCwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-5" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark-50 mb-6">
              Master Real Estate Deal
              <span className="block mt-2 bg-gradient-to-r from-accent-purple via-accent-glow to-accent-blue bg-clip-text text-transparent">
                Objection Handling
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-dark-100 max-w-2xl mx-auto">
              Learn proven strategies to handle any objection in SLOT, Options, Rent-To-Own, and more.
              Join thousands of successful investors today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-sm bg-dark-900/50 border-dark-800 text-dark-50 placeholder:text-dark-400"
              />
              <Button size="lg" className="shadow-glow-sm hover:shadow-glow-md transition-shadow">
                Get Started Free <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-dark-900/50 border-y border-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-dark-800/50 rounded-xl backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center mb-4 shadow-glow-sm">
                <PlayCircle className="h-6 w-6 text-dark-50" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-50">Video Training Library</h3>
              <p className="text-dark-200">
                Access our extensive collection of real-world objection handling scenarios and expert responses.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-dark-800/50 rounded-xl backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center mb-4 shadow-glow-sm">
                <Sparkles className="h-6 w-6 text-dark-50" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-50">Deal Categories</h3>
              <p className="text-dark-200">
                Specialized training for SLOT, Options, Rent-To-Own, Subject To, and Owner Financing deals.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-dark-800/50 rounded-xl backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center mb-4 shadow-glow-sm">
                <Shield className="h-6 w-6 text-dark-50" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-50">Premium Content</h3>
              <p className="text-dark-200">
                Unlock advanced strategies and exclusive content with our Pro membership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-50">Ready to Close More Deals?</h2>
          <p className="text-lg text-dark-200 mb-8 max-w-2xl mx-auto">
            Join our community of successful real estate investors and master the art of objection handling.
          </p>
          <Button
            size="lg"
            className="shadow-glow-sm hover:shadow-glow-md transition-shadow"
          >
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}