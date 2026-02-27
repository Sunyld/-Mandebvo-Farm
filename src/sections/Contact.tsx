import React, { useState } from 'react';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { siteData } from '../data/site';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', contact: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-cream-50">
      <Container>
        <SectionTitle
          title="Entre em Contacto"
          subtitle="Estamos prontos para responder às suas questões e necessidades"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <h3 className="text-2xl font-bold text-green-950 mb-6">
              Informações de Contacto
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-950 mb-1">Localização</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {siteData.company.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-950 mb-1">Telefones</h4>
                  {siteData.company.phones.map((phone, index) => (
                    <p key={index} className="text-muted text-sm">
                      <a href={`tel:${phone}`} className="hover:text-accent transition-colors">
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-950 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-950 mb-1">Email</h4>
                  <p className="text-muted text-sm">
                    <a
                      href={`mailto:${siteData.company.email}`}
                      className="hover:text-accent transition-colors"
                    >
                      {siteData.company.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-950 mb-1">
                    Diretora Executiva
                  </h4>
                  <p className="text-muted text-sm">{siteData.company.director}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-2xl font-bold text-green-950 mb-6">
              Envie uma Mensagem
            </h3>

            {submitted ? (
              <div className="flex items-center justify-center h-64 bg-green-50 rounded-[var(--radius-lg)]">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-green-950 mb-2">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-muted">
                    Entraremos em contacto em breve.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-green-950 mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stroke focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-semibold text-green-950 mb-2"
                  >
                    Telefone ou Email
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stroke focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition-all"
                    placeholder="Como podemos contactá-lo?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-green-950 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-stroke focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
};
