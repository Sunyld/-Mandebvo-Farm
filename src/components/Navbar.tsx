import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from './Button';
import { Container } from './Container';
import { siteData } from '../data/site';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#inicio');
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-bold text-lg leading-tight ${
                    isScrolled ? 'text-green-950' : 'text-white'
                  }`}
                >
                  {siteData.company.name}
                </span>
                <span
                  className={`text-xs ${
                    isScrolled ? 'text-muted' : 'text-white/80'
                  }`}
                >
                  {siteData.company.subtitle}
                </span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {siteData.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? 'text-slate-700 hover:text-green-700'
                      : 'text-white hover:text-amber-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <Button
                variant={isScrolled ? 'primary' : 'outline'}
                size="md"
                href="#contacto"
              >
                Pedir Cotação
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </Container>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-white shadow-xl rounded-b-3xl overflow-hidden">
            <nav className="flex flex-col p-6 space-y-4">
              {siteData.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-lg font-medium text-slate-700 hover:text-green-700 transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <Button variant="primary" size="md" href="#contacto" className="w-full">
                  Pedir Cotação
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
