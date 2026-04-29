import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import { ROUTES } from '../types';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-12">
      <section className="text-center mb-16 border-b border-text-charcoal pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 italic">The Imposter Syndrome Antidote</h1>
        <p className="text-lg italic text-zinc-600 max-w-2xl mx-auto">
          Bridging the gap between the academic past and the professional future.
        </p>
      </section>

      <section className="mb-24 relative aspect-video bg-surface-sepia border border-text-charcoal flex items-center justify-center overflow-hidden group cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
          alt="Brand Video"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
        />
        <div className="z-10 bg-background-paper p-6 border border-text-charcoal flex items-center justify-center transition-transform group-hover:scale-110">
          <Play fill="currentColor" className="text-text-charcoal" size={40} />
        </div>
        <p className="absolute bottom-4 left-0 right-0 text-center text-xs font-mono uppercase tracking-widest text-text-charcoal/80 px-4">
          Watch our brand manifesto and academic justification.
        </p>
      </section>

      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-[0.3em]">Origins</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="font-serif italic text-xl leading-relaxed text-zinc-700">
            <span className="text-8xl float-left mr-4 mt-2 font-bold not-italic leading-[0.6] text-text-charcoal">T</span>
            <p className="mb-8">
              he transition from academia to the professional sphere is rarely a seamless evolution. It is often a jarring pivot, marked by a profound sense of displacement. One finds oneself caught in the 'entre-deux'—the space between—no longer a student, yet feeling distinctly unequipped to embody the role of the seasoned professional.
            </p>
            <p>
              For years, the founder of L'Entre-Deux navigated this exact liminal space. Armed with degrees but lacking the requisite armor for boardroom battles, every morning presented a crisis of confidence.
            </p>
          </div>

          <div className="font-serif italic text-xl leading-relaxed text-zinc-700 md:border-l border-text-charcoal md:pl-16">
            <p className="mb-8">
              There was a desperate need for a middle ground—a sartorial vocabulary that bridged the gap. A uniform that borrowed the gravitas of historical tailoring but adapted it to the kinetic reality of the modern workday.
            </p>
            <p>
              Thus, L'Entre-Deux was conceived. Not merely as a clothing line, but as an antidote. We employ heavy-weight, structured fabrics—heritage tweeds, sturdy cotton canvases, and unyielding wools—crafted into relaxed, modern silhouettes.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            num: '01.',
            title: 'Structure',
            desc: 'Rigid fabrics provide psychological armor. We reject softness in favor of deliberate, defining lines.',
            cta: 'Shop Structured',
            to: ROUTES.collections,
          },
          {
            num: '02.',
            title: 'Utility',
            desc: 'Pockets designed for function, not decoration. Garments built to withstand the rigors of transit.',
            cta: 'Learn Why',
            to: ROUTES.comfort,
          },
          {
            num: '03.',
            title: 'Heritage',
            desc: 'Drawing inspiration from 20th-century workwear and academia, updated for contemporary demands.',
            cta: 'View Matrix',
            to: ROUTES.inspiration,
          },
        ].map((item, i) => (
          <div
            key={item.title}
            className={`p-8 border border-text-charcoal ${i === 1 ? 'bg-background-paper' : 'bg-surface-sepia'} hover:-translate-y-2 transition-transform duration-300 flex flex-col`}
          >
            <span className="text-3xl font-bold italic mb-4 block">{item.num}</span>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 border-b border-text-charcoal pb-2 w-fit">{item.title}</h3>
            <p className="text-zinc-600 leading-relaxed font-sans text-sm mb-8 flex-grow">{item.desc}</p>
            <button
              type="button"
              onClick={() => navigate(item.to)}
              className="text-[10px] font-bold uppercase tracking-widest border border-text-charcoal px-3 py-2 hover:bg-text-charcoal hover:text-white transition-colors text-center"
            >
              {item.cta}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
