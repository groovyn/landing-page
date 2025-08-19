import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Scissors, 
  Store, 
  Shirt, 
  Palette, 
  Download,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  ShoppingBag,
  Apple,
  Play
} from 'lucide-react';

export default function GroovynLanding() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Users,
      title: "Unified Platform",
      description: "Manage all your custom clothing needs—tailoring, shopping, rentals, and fabrics—in one seamless app."
    },
    {
      icon: Star,
      title: "Verified Tailors & Boutiques",
      description: "Access a curated network of trusted professionals for quality and reliability."
    },
    {
      icon: ArrowRight,
      title: "Smart Booking & Payments",
      description: "Schedule visits, book services, and pay securely through Groovyn for a hassle-free experience."
    },
    {
      icon: ShoppingBag,
      title: "Exclusive Offers & Rewards",
      description: "Unlock app-only discounts, loyalty rewards, and special deals every time you use Groovyn."
    },
    {
      icon: Shirt,
      title: "Home Delivery & Trials",
      description: "Enjoy doorstep delivery and trial options for rentals and purchases."
    },
    {
      icon: CheckCircle,
      title: "Community & Support",
      description: "Connect with fashion enthusiasts and get 24/7 help from our support team."
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Book a Tailor",
      description: "Schedule a home visit from verified professional tailors in your area."
    },
    {
      step: "02",
      title: "Shop Boutiques",
      description: "Browse collections from premium boutiques and make purchases directly."
    },
    {
      step: "03",
      title: "Rent Outfits",
      description: "Choose designer outfits for rent with convenient home delivery."
    },
    {
      step: "04",
      title: "Buy Fabrics",
      description: "Source high-quality fabrics from our trusted marketplace suppliers."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg transition-all duration-500">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/groovyn-logo.jpg" 
              alt="Groovyn Logo" 
              className="w-8 h-8 rounded-lg shadow-md"
            />
            <div className="text-xl sm:text-2xl font-bold text-black">Groovyn</div>
          </div>
          <div className="hidden lg:flex space-x-8">
            <a href="#workflow" className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-105">What We Do</a>
            <a href="#services" className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-105">Services</a>
            <a href="#story" className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-105">Our Story</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-105">Contact</a>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 transition-all duration-500 transform hover:scale-110 hover:shadow-xl shadow-lg px-4 sm:px-6">
            <Download className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Download App</span>
            <span className="sm:hidden">App</span>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        data-animate
          className={`relative pt-20 sm:pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-white text-black transition-all duration-1500 ${
            isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="container mx-auto text-center max-w-7xl relative z-10">
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transform transition-all duration-1000 hover:scale-105">
              Your{' '}
              <span className="bg-gradient-to-r from-black via-gray-800 to-gray-900 bg-clip-text text-transparent animate-pulse">
                Custom Clothing
              </span>
              <br />
              <span className="inline-block transform hover:rotate-1 transition-transform duration-500">Universe</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1200 delay-300">
              Connect with tailors, boutiques, rental stores, and fabric suppliers - all in one premium platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-white-800 px-6 sm:px-8 py-4 text-base sm:text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg hover:-translate-y-1 group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Our App
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-6 sm:px-8 py-4 text-base sm:text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Mobile App Screenshots with 3D Effects */}
          <div className="relative max-w-6xl mx-auto perspective-1000">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-6 sm:p-8 h-64 sm:h-80 md:h-96 flex items-center justify-center shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-y-12 hover:shadow-3xl group perspective-child">
                <div className="text-center group-hover:scale-110 transition-transform duration-500">
                  <ShoppingBag className="h-12 sm:h-16 w-12 sm:w-16 mx-auto mb-4 text-gray-600 group-hover:text-black transition-colors duration-300" />
                  <p className="text-gray-600 font-medium group-hover:text-black transition-colors duration-300">Browse & Shop</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl p-6 sm:p-8 h-64 sm:h-80 md:h-96 flex items-center justify-center shadow-2xl transform md:scale-110 transition-all duration-700 hover:scale-125 hover:rotate-y-12 hover:shadow-3xl group perspective-child relative z-10">
                <div className="text-center group-hover:scale-110 transition-transform duration-500">
                  <Scissors className="h-12 sm:h-16 w-12 sm:w-16 mx-auto mb-4 text-gray-600 group-hover:text-black transition-colors duration-300" />
                  <p className="text-gray-700 font-semibold group-hover:text-black transition-colors duration-300">Custom Tailoring</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-6 sm:p-8 h-64 sm:h-80 md:h-96 flex items-center justify-center shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-y-12 hover:shadow-3xl group perspective-child">
                <div className="text-center group-hover:scale-110 transition-transform duration-500">
                  <Shirt className="h-12 sm:h-16 w-12 sm:w-16 mx-auto mb-4 text-gray-600 group-hover:text-black transition-colors duration-300" />
                  <p className="text-gray-600 font-medium group-hover:text-black transition-colors duration-300">Rent & Try</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gray-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-200 rounded-full opacity-10 animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gray-150 rounded-full opacity-15 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* What We Do Section (second, dark) */}
      <section 
        id="workflow" 
        data-animate
        className={`py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white transition-all duration-1500 ${
          isVisible['workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 hover:scale-105">What We Do</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to transform your clothing experience
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {workflowSteps.map((step, index) => (
              <Card 
                key={index} 
                className="border-2 border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-110 group perspective-child bg-gradient-to-br from-white via-gray-100 to-gray-50 overflow-hidden relative rounded-3xl hover:border-black hover:bg-gradient-to-tr hover:from-gray-50 hover:via-gray-200 hover:to-white"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <CardContent className={`p-4 sm:p-8 text-center relative z-10 min-h-0 h-auto ${index < 2 ? 'max-h-[400px] sm:max-h-none' : 'max-h-[320px] sm:max-h-none'} flex flex-col justify-center`}>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-500 group-hover:bg-black group-hover:scale-110 group-hover:rotate-12 shadow-lg">
                    {index === 0 && <Scissors className="h-8 w-8 sm:h-10 sm:w-10 text-gray-600 transition-all duration-500 group-hover:text-red-600 group-hover:scale-110" />}
                    {index === 1 && <Store className="h-8 w-8 sm:h-10 sm:w-10 text-gray-600 transition-all duration-500 group-hover:text-blue-600 group-hover:scale-110" />}
                    {index === 2 && <Shirt className="h-8 w-8 sm:h-10 sm:w-10 text-gray-600 transition-all duration-500 group-hover:text-purple-600 group-hover:scale-110" />}
                    {index === 3 && <Palette className="h-8 w-8 sm:h-10 sm:w-10 text-gray-600 transition-all duration-500 group-hover:text-emerald-600 group-hover:scale-110" />}
                  </div>
                  <div className="bg-black text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mx-auto mb-3 sm:mb-4 font-bold text-xs sm:text-sm group-hover:bg-gray-800 transition-all duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 group-hover:text-black transition-colors duration-300">{step.title}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed group-hover:text-black transition-colors duration-300">{step.description}</p>
                    {(step.title === 'Book a Tailor' || step.title === 'Shop Boutiques') && (
                      <div className="flex flex-col items-center gap-2 mt-2 sm:gap-1 sm:mt-1">
                        <span className="inline-block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white border border-gray-600 rounded-full px-4 py-1 font-semibold text-xs shadow-md tracking-wide sm:bg-gray-100 sm:text-gray-800 sm:border-gray-200 sm:rounded sm:px-2 sm:py-0 sm:font-normal">
                          <span className="mr-2">🏬</span> Visit Store Available
                        </span>
                        <span className="inline-block bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white border border-gray-600 rounded-full px-4 py-1 font-semibold text-xs shadow-md tracking-wide sm:bg-gray-100 sm:text-gray-800 sm:border-gray-200 sm:rounded sm:px-2 sm:py-0 sm:font-normal">
                          <span className="mr-2">💸</span> Extra discount when you pay via our app
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%]"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      

      {/* Services Section (third, white) */}
      <section 
        id="services" 
        data-animate
        className={`py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden transition-all duration-1500 ${
          isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 hover:scale-105">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for your custom clothing journey, all in one platform
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-110 group perspective-child bg-gradient-to-br from-white via-gray-100 to-gray-50 overflow-hidden relative rounded-3xl hover:border-black hover:bg-gradient-to-tr hover:from-gray-50 hover:via-gray-200 hover:to-white"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <CardContent className="p-4 sm:p-8 text-center relative z-10 min-h-0 h-auto max-h-[320px] sm:max-h-none flex flex-col justify-center">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-500 group-hover:bg-black group-hover:scale-110 group-hover:rotate-12 shadow-lg">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gray-600 transition-transform duration-300 group-hover:scale-110 group-hover:text-indigo-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 group-hover:text-black transition-colors duration-300">{service.title}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                    {(service.title === 'Stitching Services' || service.title === 'Boutiques') && (
                      <div className="text-xs sm:text-sm text-gray-700">
                        <span className="inline-block bg-gray-100 border border-gray-200 rounded-full px-3 py-1 mr-2 mb-1">Visit Store Available</span>
                        <span className="inline-block bg-gray-100 border border-gray-200 rounded-full px-3 py-1 mb-1">Extra discount when you pay via our app</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%]"></div>
              </Card>
            ))}
          </div>
        </div>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800 rounded-full opacity-5 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-700 rounded-full opacity-5 animate-pulse"></div>
        </div>
      </section>

      {/* Download App Section (fourth, dark) */}
      <section 
        id="download" 
        data-animate
        className={`py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden transition-all duration-1500 ${
          isVisible['download'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-gray-800 text-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                READY TO START?
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Download Groovyn
                <br />
                <span className="text-gray-400">Today</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-10 max-w-lg leading-relaxed">
                Join thousands of fashion enthusiasts who are already using Groovyn to discover, book, and style their perfect looks. Available on iOS and Android.
              </p>
              
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-10">
                <Button 
                  size="lg" 
                  className="bg-gray-800 text-white hover:bg-gray-700 px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base transition-all duration-500 transform hover:scale-105 hover:shadow-xl shadow-lg group border border-gray-700"
                >
                  <div className="flex items-center">
                    <Apple className="mr-3 h-6 w-6 text-red-400" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </div>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gray-800 text-white hover:bg-gray-700 px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base transition-all duration-500 transform hover:scale-105 hover:shadow-xl shadow-lg group border border-gray-700"
                >
                  <div className="flex items-center">
                    <Play className="mr-3 h-6 w-6 text-blue-400" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Get it on</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </div>
                </Button>
              </div>
              
              {/* Features List */}
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Free to download</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">No hidden fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Secure & private</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">24/7 support</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-80 h-[500px] bg-gradient-to-b from-gray-200 to-gray-300 rounded-[3rem] p-3 shadow-2xl transform transition-all duration-700 hover:scale-105">
                  {/* Screen */}
                  <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white rounded-[2.5rem] p-6 relative overflow-hidden">
                    {/* App Header */}
                    <div className="text-center mb-8 mt-8">
                      <h3 className="text-2xl font-bold text-black mb-2">Groovyn</h3>
                    </div>
                    
                    {/* App Features Cards */}
                    <div className="space-y-4">
                      <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Store className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="text-gray-800 font-medium">Virtual Stores</span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                            <Scissors className="h-5 w-5 text-red-600" />
                          </div>
                          <span className="text-gray-800 font-medium">Book Tailors</span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Shirt className="h-5 w-5 text-purple-600" />
                          </div>
                          <span className="text-gray-800 font-medium">Rent Clothes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800 rounded-full opacity-5 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-700 rounded-full opacity-5 animate-pulse"></div>
        </div>
      </section>

      

      {/* Our Story Section (fifth, dark) */}
      <section 
        id="story" 
        data-animate
        className={`py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden transition-all duration-1000 ${
          isVisible['story'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Groovyn was born out of frustration with the fragmented custom clothing market. 
                  Our founders experienced firsthand the challenges of finding reliable tailors, 
                  quality fabrics, and rental options for special occasions.
                </p>
                <p>
                  We realized that customers were spending countless hours coordinating between 
                  different vendors, often with inconsistent quality and service. That's when we 
                  decided to create a unified platform that brings together the entire custom 
                  clothing ecosystem.
                </p>
                <p>
                  Today, Groovyn connects thousands of customers with verified tailors, premium 
                  boutiques, rental services, and fabric suppliers, making custom clothing 
                  accessible, reliable, and enjoyable for everyone.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-black">
              <div className="space-y-8">
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  <span className="text-base sm:text-lg font-medium">Quality Assured</span>
                </div>
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  <span className="text-base sm:text-lg font-medium">Verified Partners</span>
                </div>
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  <span className="text-base sm:text-lg font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  <span className="text-base sm:text-lg font-medium">Home Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800 rounded-full opacity-5 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-700 rounded-full opacity-5 animate-pulse"></div>
        </div>
      </section>

      {/* Contact Section (last, white) */}
      <section 
        id="contact" 
        data-animate
        className={`py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-white transition-all duration-1500 ${
          isVisible['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 hover:scale-105">Get In Touch</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your clothing experience? We'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="First Name" 
                        className="border-gray-200 focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-300 hover:shadow-md" 
                      />
                      <Input 
                        placeholder="Last Name" 
                        className="border-gray-200 focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-300 hover:shadow-md" 
                      />
                    </div>
                    <Input 
                      placeholder="Email Address" 
                      type="email" 
                      className="border-gray-200 focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-300 hover:shadow-md" 
                    />
                    <Textarea 
                      placeholder="Your Message" 
                      rows={5} 
                      className="border-gray-200 focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-300 hover:shadow-md resize-none" 
                    />
                    <Button 
                      className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg group"
                      size="lg"
                    >
                      <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer transform transition-all duration-300 hover:scale-105">
                    <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg group-hover:text-black transition-colors duration-300">Email</p>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">info@groovyn.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer transform transition-all duration-300 hover:scale-105">
                    <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg group-hover:text-black transition-colors duration-300">Phone</p>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">+91 7891467209</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer transform transition-all duration-300 hover:scale-105">
                    <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg group-hover:text-black transition-colors duration-300">Address</p>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Delhi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Groovyn</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Your premium custom clothing marketplace connecting you with tailors, 
                boutiques, rental services, and fabric suppliers.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tailoring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Boutiques</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rentals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fabrics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Groovyn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}