import React from 'react';
import { Target, Eye, Heart, Check } from 'lucide-react';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';
import { siteData } from '../data/site';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-cream-50">
      <Container>
        <SectionTitle
          title={siteData.about.title}
          subtitle={siteData.about.description}
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card hover>
            <div className="w-14 h-14 bg-green-700 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-950 mb-4">
              {siteData.about.mission.title}
            </h3>
            <p className="text-muted leading-relaxed">
              {siteData.about.mission.description}
            </p>
          </Card>

          <Card hover>
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-950 mb-4">
              {siteData.about.vision.title}
            </h3>
            <p className="text-muted leading-relaxed">
              {siteData.about.vision.description}
            </p>
          </Card>

          <Card hover>
            <div className="w-14 h-14 bg-green-950 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-950 mb-4">
              {siteData.about.values.title}
            </h3>
            <ul className="space-y-3">
              {siteData.about.values.items.map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                  <span className="text-muted text-sm leading-relaxed">{value}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
};
