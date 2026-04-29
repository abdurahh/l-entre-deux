import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shirt, Watch, Feather, ArrowRight } from 'lucide-react';
import { ROUTES } from '../types';

export default function Home() {
  const navigate = useNavigate();
  const [heroVideoUsable, setHeroVideoUsable] = useState(true);

  const onHeroVideoError = useCallback(() => {
    setHeroVideoUsable(false);
  }, []);

  return (
    <div className="max-w-container-max mx-auto px-4 md:px-6 py-12">
      <section className="border border-text-charcoal bg-surface-sepia mb-16 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          <div className="p-8 md:p-10 flex flex-col justify-center bg-background-paper border-b md:border-b-0 md:border-r border-text-charcoal z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 italic leading-tight"
            >
              Professionalism Simplified.
            </motion.h1>
            <p className="text-lg mb-10 max-w-md text-zinc-700 leading-relaxed font-sans">
              Beginner-friendly business wear for the modern graduate. Inspired by the 20th century, tailored for today.
            </p>
            <div>
              <button
                type="button"
                onClick={() => navigate(ROUTES.collections)}
                className="w-full md:w-auto px-6 py-3 uppercase tracking-widest text-xs font-semibold rounded-none bg-accent-teal text-background-paper hover:bg-text-charcoal transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore the Collection
              </button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-full bg-zinc-200 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-text-charcoal/50 via-text-charcoal/15 to-transparent z-[1] pointer-events-none" />
            {heroVideoUsable ? (
              <video
                className="absolute inset-0 w-full h-full object-cover hero-media-colorize"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/double-breasted.webp"
                onError={onHeroVideoError}
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
            ) : (
              <img
                src="/images/double-breasted.webp"
                alt="Professional portrait"
                className="absolute inset-0 w-full h-full object-cover hero-media-colorize"
              />
            )}
            <div className="absolute inset-0 border-[10px] border-text-charcoal m-4 pointer-events-none opacity-20 z-[2]" />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-text-charcoal mb-16">
        {[
          {
            title: 'Beginner Friendly',
            desc: 'Pre-styled coordinates that remove the guesswork from building a professional wardrobe.',
            Icon: Shirt,
          },
          {
            title: 'Historical Elegance',
            desc: 'High-waisted, structured silhouettes drawn from 20th-century European tailoring, adapted for today.',
            Icon: Watch,
          },
          {
            title: 'Modern Comfort',
            desc: 'Flowy fabrics that move with you, combating formalwear anxiety without losing polish.',
            Icon: Feather,
          },
        ].map((item, i) => (
          <div
            key={item.title}
            className={`p-8 border-b border-r border-text-charcoal transition-colors hover:bg-surface-sepia ${
              i % 2 === 1 ? 'bg-surface-sepia' : 'bg-background-paper'
            }`}
          >
            <div className="border border-text-charcoal w-12 h-12 flex items-center justify-center mb-6 bg-white">
              <item.Icon className="text-text-charcoal" aria-hidden />
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-zinc-600 leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <div className="flex justify-between items-end border-b-2 border-text-charcoal pb-2 mb-8">
          <h2 className="text-3xl italic">The Gazette</h2>
          <button
            type="button"
            onClick={() => navigate(ROUTES.comfort)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent-teal transition-colors"
          >
            Read All <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-text-charcoal border border-text-charcoal">
          <article
            role="button"
            tabIndex={0}
            onClick={() => navigate(ROUTES.comfort)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate(ROUTES.comfort);
              }
            }}
            className="bg-background-paper p-6 md:p-8 flex flex-col group cursor-pointer transition-colors hover:bg-white"
          >
            <div className="relative aspect-[16/9] mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img src="/images/herringbone.jpeg" alt="Suit details" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-background-paper border border-text-charcoal px-3 py-1 text-[10px] uppercase font-bold">
                Guide
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent-teal transition-colors">
              The Anatomy of a First Interview Suit
            </h3>
            <p className="text-zinc-600 mb-6 flex-grow">
              A definitive guide to avoiding common sartorial missteps when making your inaugural professional impression.
            </p>
            <span className="text-xs font-bold uppercase border-b border-text-charcoal w-fit pb-1 group-hover:border-accent-teal">
              Read Article
            </span>
          </article>

          <div className="flex flex-col gap-px bg-text-charcoal">
            {[
              {
                cat: 'Material Focus',
                title: 'In Defense of Tweed',
                desc: 'Why the academic staple deserves a place in the modern open-plan office.',
                img: 'images/Tweed-jacket.jpeg',
              },
              {
                cat: 'Maintenance',
                title: 'The Sunday Polish Ritual',
                desc: 'Protecting your investment footwear through consistent, mindful care routines.',
                img: 'images/loafers.webp',
              },
            ].map((art) => (
              <article
                key={art.title}
                role="button"
                tabIndex={0}
                onClick={() => navigate(ROUTES.comfort)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(ROUTES.comfort);
                  }
                }}
                className="bg-surface-sepia p-6 md:p-8 flex items-center md:items-stretch gap-6 group cursor-pointer h-full transition-colors hover:bg-white"
              >
                <div className="w-1/3 aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={art.img} alt={art.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-2/3 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 mb-2">{art.cat}</span>
                  <h4 className="text-lg md:text-xl italic font-bold mb-2 group-hover:text-accent-teal transition-colors">{art.title}</h4>
                  <p className="text-sm text-zinc-600 line-clamp-2 md:line-clamp-none">{art.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
