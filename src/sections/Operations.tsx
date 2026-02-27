import React from 'react';
import { Wheat, Carrot, Sprout, Drumstick, Egg } from 'lucide-react';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { SectionTitle } from '../components/SectionTitle';
import { siteData } from '../data/site';

export const Operations: React.FC = () => {
  const headerIcons = [Wheat, Carrot, Sprout, Drumstick, Egg];
  
  return (
    <section id="atuacao" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Áreas de Atuação"
          subtitle="Diversificação produtiva com foco em qualidade e sustentabilidade"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.operations.map((operation, index) => {
            const Icon = headerIcons[index % headerIcons.length];
            return (
              <Card key={index} hover>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-cream-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-green-700" />
                  </div>
                  <Badge variant={operation.category === 'Agrícola' ? 'green' : 'accent'}>
                    {operation.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-green-950 mb-3">
                  {operation.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {operation.description}
                </p>
              
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
