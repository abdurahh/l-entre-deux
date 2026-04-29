import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ROUTES } from '../types';

const TOPS = [
  { id: 't1', name: 'Oxford Cloth', desc: 'White / Structure', img: '/images/Gemini_Generated_Image_sk6ym1sk6ym1sk6y.png' },
  { id: 't2', name: 'Merino Blazer', desc: 'Charcoal / Tailored', img: '/images/double-breasted.webp' },
  { id: 't3', name: 'Heavy Knit Rollneck', desc: 'Cream / Comfort', img: 'https://images.unsplash.com/photo-1611312449412-6cefac56399e?q=80&w=2072&auto=format&fit=crop' },
  { id: 't4', name: 'Field Jacket', desc: 'Olive / Utility', img: '/images/overcoat.webp' },
];

export default function Inspiration() {
  const navigate = useNavigate();
  const [selectedTop, setSelectedTop] = useState(TOPS[1]);

  return (
    <div className="max-w-container-max mx-auto px-4 md:px-6 py-12">
      <section className="text-center mb-16 border-b border-text-charcoal pb-12">
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">The Style Matrix</h1>
        <p className="text-lg md:text-xl font-semibold text-text-charcoal max-w-2xl mx-auto mb-3">
          Find Your Professional Persona
        </p>
        <p className="text-lg md:text-xl italic text-zinc-600 max-w-2xl mx-auto">
          Curate your transitional wardrobe. Select elements to compose a silhouette bridging classic tailoring with modern utility.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 border border-text-charcoal bg-surface-sepia mb-24 overflow-hidden">
        <div className="md:col-span-5 p-8 md:p-12 flex flex-col items-center justify-center bg-background-paper border-b md:border-b-0 md:border-r border-text-charcoal min-h-[500px] md:min-h-[600px] relative">
          <div className="absolute top-6 left-6 text-[10px] uppercase font-bold tracking-[0.2em] border border-text-charcoal px-3 py-1">Canvas</div>

          <div className="w-full max-w-[280px] md:max-w-sm aspect-[3/4] border border-text-charcoal relative overflow-hidden bg-zinc-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedTop.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={selectedTop.img}
                alt="Styled Look"
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </AnimatePresence>

            <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3 opacity-20">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border-[0.5px] border-text-charcoal" />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center px-4">
            <h3 className="text-2xl font-bold mb-2 italic">The Architect</h3>
            <p className="text-sm text-zinc-500 uppercase tracking-widest font-sans">Structured. Deliberate. Transitional.</p>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col bg-background-paper">
          <div className="flex border-b border-text-charcoal divide-x divide-text-charcoal overflow-x-auto">
            <button type="button" className="flex-1 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-text-charcoal text-white whitespace-nowrap px-4">
              Tops
            </button>
            <button type="button" className="flex-1 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors whitespace-nowrap px-4">
              Bottoms
            </button>
            <button type="button" className="flex-1 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors whitespace-nowrap px-4">
              Footwear
            </button>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-2 gap-4 md:gap-6 overflow-y-auto max-h-[600px]">
            {TOPS.map((top) => (
              <button
                key={top.id}
                type="button"
                onClick={() => setSelectedTop(top)}
                className={`group p-3 md:p-4 border transition-all duration-300 text-left relative ${
                  selectedTop.id === top.id ? 'border-text-charcoal bg-surface-sepia' : 'border-zinc-200 hover:border-text-charcoal'
                }`}
              >
                {selectedTop.id === top.id && <CheckCircle2 className="absolute top-2 right-2 text-text-charcoal" size={16} />}
                <div className="aspect-square bg-zinc-100 mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <img src={top.img} alt={top.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-xs md:text-sm mb-1">{top.name}</h4>
                <p className="text-[10px] italic text-zinc-500 line-clamp-1">{top.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-24 pt-12 border-t border-text-charcoal">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-text-charcoal pb-4 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Editorial Archive</h2>
          <button
            type="button"
            onClick={() => navigate(ROUTES.collections)}
            className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-accent-teal"
          >
            View All <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { vol: 'IV', tag: 'The Commute', desc: 'Autumn / Winter', img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=2070&auto=format&fit=crop' },
            { vol: 'V', tag: 'The Overcoat', desc: 'Transitional Layering', img: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop' },
            { vol: 'VI', tag: 'Materials', desc: 'Heritage Textures', img: 'https://images.unsplash.com/photo-1550998272-917453074121?q=80&w=2148&auto=format&fit=crop' },
          ].map((item) => (
            <motion.div key={item.tag} whileHover={{ y: -10 }} className="border border-text-charcoal p-2 bg-white group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-200">
                <img src={item.img} alt={item.tag} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-text-charcoal/0 group-hover:bg-text-charcoal/80 transition-colors duration-500 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 p-6">
                  <h3 className="text-background-paper text-2xl font-bold mb-4">{item.tag}</h3>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(ROUTES.collections);
                    }}
                    className="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    Shop the Look
                  </button>
                </div>
              </div>
              <div className="p-4 border-t border-text-charcoal mt-2 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                <span>Vol. {item.vol}</span>
                <span className="italic text-zinc-500 font-serif lowercase">{item.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
