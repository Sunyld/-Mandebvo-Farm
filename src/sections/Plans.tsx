import React from 'react';
import { Check } from 'lucide-react';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { siteData } from '../data/site';

export const Plans: React.FC = () => {
  return (
    <section className="py-20 bg-cream-50">
      <Container>
        <SectionTitle
          title="Pacotes de Produtos"
          subtitle="Soluções adaptadas às suas necessidades"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.plans.map((plan, index) => (
            <Card
              key={index}
              className={plan.highlighted ? 'ring-2 ring-accent shadow-2xl' : ''}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-green-950 mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted text-sm">{plan.description}</p>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-green-950">
                  {plan.price}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <span className="text-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? 'primary' : 'secondary'}
                className="w-full"
                href="#contacto"
              >
                Escolher
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
