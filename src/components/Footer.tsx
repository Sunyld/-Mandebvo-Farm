import React from 'react';
import { Leaf, MapPin, Phone, Mail } from 'lucide-react';
import { Container } from './Container';
import { siteData } from '../data/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-green-950 text-white">
      <Container className="py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">
                  {siteData.company.name}
                </span>
                <span className="text-xs text-white/70">
                  {siteData.company.subtitle}
                </span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {siteData.footer.about}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {siteData.footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm leading-relaxed">
                  {siteData.company.location}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-white/80 text-sm">
                  {siteData.company.phones.map((phone, index) => (
                    <div key={index}>
                      <a
                        href={`tel:${phone}`}
                        className="hover:text-accent transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-white/80 text-sm">
                  {siteData.company.emails.map((email: string, i: number) => (
                    <div key={i}>
                      <a
                        href={`mailto:${email}`}
                        className="hover:text-accent transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/60 text-sm">
            {siteData.footer.copyright}
          </p>
          {siteData.footer.poweredBy && (
            <p className="text-center text-white/60 text-sm mt-2">
              Powered by{' '}
              <a
                href={siteData.footer.poweredBy.url}
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-accent underline"
              >
                {siteData.footer.poweredBy.name}
              </a>
            </p>
          )}
        </div>
      </Container>
    </footer>
  );
};
