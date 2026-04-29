import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Journal() {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-12">
      <section className="text-center mb-16 border-b border-text-charcoal pb-12">
        <span className="text-[10px] md:text-sm uppercase font-bold tracking-[0.2em] text-accent-teal mb-4 block">Comfort & Fit</span>
        <span className="text-[10px] md:text-sm uppercase font-bold tracking-[0.2em] text-zinc-500 mb-4 block">Journal of Functional Aesthetics</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 italic">The Science of the High Waist</h1>
        <p className="text-lg md:text-xl italic text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          An investigation into the structural and psychological benefits of elevated trouser lines.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 border border-text-charcoal mb-24 overflow-hidden">
        <div className="bg-surface-sepia p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-text-charcoal relative group">
          <div className="w-full aspect-square border border-text-charcoal/20 bg-white/30 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            <div className="w-48 h-48 rounded-full border-2 border-text-charcoal/30 flex items-center justify-center relative">
              <div className="absolute top-0 w-full h-[2px] bg-red-400 transform -translate-y-4 opacity-50" />
              <div className="absolute bottom-0 w-full h-[2px] bg-emerald-400 transform translate-y-4" />
              <span className="text-[10px] font-mono uppercase opacity-40">Kinetic Center</span>
            </div>
            <div className="mt-8 flex gap-8">
              <div className="h-4 w-4 bg-red-400 opacity-50" />
              <div className="h-4 w-4 bg-emerald-400" />
            </div>
          </div>
          <div className="mt-8 flex justify-between text-[10px] font-bold uppercase tracking-widest border-t border-text-charcoal pt-4">
            <span>Fig A. Slim Fit (Anxious)</span>
            <span>Fig B. High Waist (Empowering)</span>
          </div>
        </div>

        <div className="p-12 md:p-16 flex flex-col justify-center bg-background-paper">
          <h2 className="text-3xl font-bold mb-8 italic leading-tight">Social vs. Physical Comfort</h2>
          <div className="space-y-6 text-zinc-700 leading-relaxed font-serif text-lg">
            <p>
              The modern slim-fit trouser often trades physical comfort for a perceived sleekness. This creates a state of low-level anxiety—a constant awareness of the garment restricting natural movement and sitting uncomfortably low on the hips.
            </p>
            <p>
              Conversely, the true high-waisted trouser, anchored at the natural waist (the narrowest point of the torso), provides a secure foundation. It drapes rather than clings, allowing the fabric to fall elegantly.
            </p>

            <blockquote className="pl-6 border-l-2 border-text-charcoal py-2 italic font-bold">
              "Social comfort begins when physical discomfort is eliminated. You cannot command a room when you are consciously adjusting your hemline."
            </blockquote>

            <p>
              By elevating the waistline, we elongate the leg visually and remove the constriction around the thighs and hips, achieving a silhouette that is simultaneously authoritative and effortless.
            </p>
          </div>
        </div>
      </section>

      <section className="border border-text-charcoal">
        <div className="p-8 border-b border-text-charcoal bg-white flex flex-col items-center text-center">
          <h3 className="text-3xl font-bold italic mb-2 tracking-tight">The Transitionalist Fit Guide</h3>
          <p className="text-xs uppercase tracking-widest font-bold opacity-40">Technical Specifications</p>
        </div>

        <div className="divide-y divide-text-charcoal">
          {[
            {
              q: 'How should a high-waisted trouser sit?',
              a: 'The waistband should sit firmly at your natural waist—typically an inch or two above the navel. It should be snug enough to stay up without a belt, but allow enough room to comfortably insert two fingers.',
              correct: 'Anchored at natural waist, clean drape.',
              incorrect: 'Resting on hips, pulling across front.',
            },
            {
              q: 'The Anatomy of the Perfect Blazer Fit',
              a: "The shoulders are paramount; the seam should end exactly where your natural shoulder ends. Any overhang indicates a jacket that is too large, while pulling indicates it's too small. The closure should meet cleanly without forming an 'X' crease across the button.",
              correct: 'Clean shoulder line, zero pull on button.',
              incorrect: 'Padded overhang, horizontal stress lines.',
            },
            {
              q: 'Why are our blazers not too slim and not too baggy?',
              a: 'We target a balanced drape: enough room through the chest and sleeves for movement and layering, with a defined waist and shoulder line so the jacket still reads as intentional tailoring rather than borrowed sizing.',
              correct: 'Ease where you move; structure where you present.',
              incorrect: 'Skin-tight suppression or undefined volume.',
            },
          ].map((item, i) => (
            <details key={item.q} className="group" open={i === 0}>
              <summary className="flex justify-between items-center p-8 bg-background-paper cursor-pointer list-none group-open:bg-surface-sepia transition-colors">
                <span className="text-xl font-bold italic">{item.q}</span>
                <ChevronDown className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-8 bg-white border-t border-text-charcoal font-serif italic text-lg leading-relaxed text-zinc-700">
                <p className="mb-8">{item.a}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 border border-text-charcoal">
                  <div className="p-6 border-b md:border-b-0 md:border-r border-text-charcoal">
                    <span className="text-[10px] font-bold uppercase tracking-widest block mb-2 text-emerald-600">Correct</span>
                    <p className="text-sm not-italic font-sans">{item.correct}</p>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest block mb-2 text-red-600">Incorrect</span>
                    <p className="text-sm not-italic font-sans">{item.incorrect}</p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
