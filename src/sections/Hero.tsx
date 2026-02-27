import React, { useEffect, useState } from 'react';
import { ArrowRight, Sprout, Users, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { siteData } from '../data/site';

const metricIcons = [Sprout, Users, Sparkles];

export const Hero: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);

  useEffect(() => {
    const modules = import.meta.glob('../assets/gallery/hero/*.{jpg,jpeg,png,webp,gif}', { eager: true, as: 'url' }) as Record<string, string>;
    const imgs = Object.keys(modules).map((k) => modules[k]);
    if (imgs.length > 0) setHeroImage(imgs[0]);
  }, []);
  return (
    <section id="inicio" className="relative hero-gradient pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {siteData.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              {siteData.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="lg" href="#atuacao">
                {siteData.hero.primaryCta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" href="#contacto">
                {siteData.hero.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-[var(--radius-2xl)] overflow-hidden shadow-2xl backdrop-blur-sm border border-white/10 bg-black/5">
              {heroImage ? (
                <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sprout className="w-32 h-32 text-white/30" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {siteData.hero.metrics.map((metric, index) => {
            const Icon = metricIcons[index];
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-[var(--radius-xl)] p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{metric.title}</h3>
                    <p className="text-sm text-white/80">{metric.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
