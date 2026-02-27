import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { siteData } from '../data/site';

const gradients = [
  'from-green-700 to-green-900',
  'from-green-900 to-green-950',
  'from-amber-600 to-amber-800',
  'from-green-700 to-amber-600',
  'from-green-950 to-green-700',
  'from-amber-700 to-green-800',
  'from-green-800 to-green-950',
  'from-amber-600 to-green-700',
  'from-green-700 to-green-800'
];

export const Gallery: React.FC = () => {
  const [imagesByFolder, setImagesByFolder] = useState<Record<string, string[]>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFolder, setModalFolder] = useState<string | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    const modules = import.meta.glob('../assets/gallery/**/*.{jpg,jpeg,png,webp,gif}', { eager: true, as: 'url' }) as Record<string, string>;
    const map: Record<string, string[]> = {};
    Object.keys(modules).forEach((p) => {
      const parts = p.split('/');
      // folder is the directory just before the filename
      const folder = parts[parts.length - 2];
      map[folder] = map[folder] || [];
      map[folder].push(modules[p]);
    });
    // keep original order per folder
    setImagesByFolder(map);
  }, []);

  const openFolderAt = useCallback((folder: string, index = 0) => {
    setModalFolder(folder);
    setModalIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setModalFolder(null);
    setModalIndex(0);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => {
    if (!modalFolder) return;
    const list = imagesByFolder[modalFolder] || [];
    setModalIndex((i) => (i + 1) % list.length);
  }, [modalFolder, imagesByFolder]);

  const goPrev = useCallback(() => {
    if (!modalFolder) return;
    const list = imagesByFolder[modalFolder] || [];
    setModalIndex((i) => (i - 1 + list.length) % list.length);
  }, [modalFolder, imagesByFolder]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen, closeModal, goNext, goPrev]);

  const prepared = useMemo(() => {
    return siteData.gallery.map((item) => {
      const folder = item.placeholder;
      const imgs = imagesByFolder[folder] || [];
      return { ...item, folder, imgs };
    });
  }, [imagesByFolder]);

  return (
    <section id="galeria" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Galeria"
          subtitle="Conheça as nossas instalações e atividades"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prepared.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-[var(--radius-2xl)] overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openFolderAt(item.folder, 0)}
            >
              {item.imgs && item.imgs[0] ? (
                <div className="w-full h-full relative">
                  <img src={item.imgs[0]} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <p className="text-white font-semibold text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.alt}
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-80 group-hover:opacity-90 transition-opacity`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white font-semibold text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.alt}
                    </p>
                  </div>
                  <div className="absolute inset-0 transform scale-100 group-hover:scale-110 transition-transform duration-500" />
                </>
              )}
            </div>
          ))}
        </div>

        {modalOpen && modalFolder && imagesByFolder[modalFolder] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={closeModal} />
            <div className="relative z-10 max-w-5xl w-full px-4">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative">
                  <img src={imagesByFolder[modalFolder][modalIndex]} alt="Galeria" className="w-full h-[70vh] object-contain bg-black" />
                  <button onClick={closeModal} className="absolute top-3 right-3 bg-white/80 rounded-full p-2 shadow">Fechar</button>
                  {imagesByFolder[modalFolder].length > 1 && (
                    <>
                      <button onClick={goPrev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow">‹</button>
                      <button onClick={goNext} className="absolute right-12 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow">›</button>
                    </>
                  )}
                </div>
                {imagesByFolder[modalFolder].length > 1 && (
                  <div className="flex items-center gap-2 p-3 overflow-x-auto bg-slate-50">
                    {imagesByFolder[modalFolder].map((src, i) => (
                      <button key={i} onClick={() => setModalIndex(i)} className={`flex-shrink-0 rounded overflow-hidden border ${i === modalIndex ? 'ring-2 ring-accent' : ''}`}>
                        <img src={src} className="h-16 w-24 object-cover" alt={`thumb-${i}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
