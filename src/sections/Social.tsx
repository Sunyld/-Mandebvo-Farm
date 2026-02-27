import React, { useEffect, useState } from 'react';
import { Users, HandHeart, TrendingUp, ShieldCheck } from 'lucide-react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { siteData } from '../data/site';

const actionIcons = [Users, HandHeart, TrendingUp, ShieldCheck];

export const Social: React.FC = () => {
  const [socialImage, setSocialImage] = useState<string | null>(null);

  useEffect(() => {
    const modules = import.meta.glob('../assets/gallery/hero/hero2.{jpg,jpeg,png,webp,gif}', { eager: true, as: 'url' }) as Record<string, string>;
    const imgs = Object.keys(modules).map((k) => modules[k]);
    if (imgs.length > 0) setSocialImage(imgs[0]);
  }, []);
  return (
    <section id="social" className="py-20 bg-cream-50">
      <Container>
        <SectionTitle
          title={siteData.social.title}
          subtitle={siteData.social.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-green-700 to-green-900 rounded-[var(--radius-2xl)] overflow-hidden shadow-2xl">
              {socialImage ? (
                <img src={socialImage} alt="Social" className="w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <HandHeart className="w-32 h-32 text-white/20" />
                </div>
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 md:-bottom-6 md:-right-6 md:w-48 md:h-48 bg-accent rounded-[var(--radius-2xl)] shadow-xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl md:text-4xl font-bold mb-1">100%</div>
                <div className="text-xs md:text-sm font-medium">Compromisso</div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              {siteData.social.description}
            </p>

            <div className="space-y-6 mb-8">
              {siteData.social.actions.map((action, index) => {
                const Icon = actionIcons[index];
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-950 mb-1">{action.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">
                        {action.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button variant="primary" size="lg" href="#contacto">
              {siteData.social.cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
