import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Filter, ArrowRight } from 'lucide-react';
import { ROUTES } from '../types';

interface ExtraDetail {
  label: string;
  content: string;
}

interface Product {
  id: string;
  series: 'Men' | 'Women';
  name: string;
  mat: string;
  price: number;
  img: string;
  shortDesc: string;
  extraDetails: ExtraDetail[];
  objectPosition?: string;
}

const PRODUCTS: Product[] = [
  // MEN'S SERIES
  {
    id: 'm1',
    series: 'Men',
    name: 'The "Oxford" High-Waisted Trouser',
    mat: 'Charcoal Worsted Wool',
    price: 185,
    img: '/images/high-waisted.jpeg',
    shortDesc: 'Straight-leg cut, double pleats, and a permanent crease. Designed to elongate the legs with side-adjusters.',
    objectPosition: 'center 40%',
    extraDetails: [
      { label: 'The Problem Solved', content: 'Eliminates the "disheveled" look of low-rise pants during long lectures.' },
      { label: 'Beginner Tip', content: 'These eliminate the need for a belt, reducing visual clutter. Pair with any tucked-in tee for an instant upgrade.' },
      { label: 'Mix & Match', content: 'Works with the "Union" Knitted Vest for a library look or the "Fleet Street" Blazer for formal presentations.' }
    ]
  },
  {
    id: 'm2',
    series: 'Men',
    name: 'The "Fleet Street" Herringbone Blazer',
    mat: 'Grey Textured Herringbone',
    price: 350,
    img: '/images/herringbone.jpeg',
    shortDesc: 'Unlined, soft-shoulder blazer. Notched lapels and patch pockets. Feels like a cardigan, looks like a suit.',
    objectPosition: 'center 15%',
    extraDetails: [
      { label: 'The Design', content: 'The "soft-shoulder" construction allows for full range of motion—perfect for carrying heavy laptop bags.' },
      { label: 'The Vibe', content: 'Evokes the 1930s journalist aesthetic.' },
      { label: 'Styling Note', content: 'Features internal "hidden" pockets for student IDs and transit cards.' }
    ]
  },
  {
    id: 'm3',
    series: 'Men',
    name: 'The "Morning Lecture" Grandad Collar Shirt',
    mat: 'White 100% Egyptian Cotton',
    price: 120,
    img: '/images/Gemini_Generated_Image_sk6ym1sk6ym1sk6y.png',
    shortDesc: 'Crisp white cotton with a band collar. Half-placket "popover" design for effortless layering.',
    objectPosition: 'center 15%',
    extraDetails: [
      { label: 'Why it Works', content: 'Less intimidating than a "suit shirt" while remaining significantly more professional than a polo.' },
      { label: 'Educational Insight', content: 'Transitioning to formalwear is easiest when you remove the tie requirement. This shirt does that naturally.' }
    ]
  },
  {
    id: 'm4',
    series: 'Men',
    name: 'The "Union" Knitted Vest',
    mat: 'Navy Blue Merino Wool Blend',
    price: 145,
    img: '/images/knitted-vest.png',
    shortDesc: 'Sleeveless knit with a subtle V-neck. Ribbed hem designed to sit perfectly at high-rise waistbands.',
    objectPosition: 'center 15%',
    extraDetails: [
      { label: 'Functionality', content: 'Adds warmth in cold lecture halls without the bulk of a full sweater.' },
      { label: 'Aesthetic', content: 'The quintessential 20th-century European "Intellectual" look.' },
      { label: 'Coordination', content: 'Can be worn under a blazer or on its own with the "Oxford" trousers.' }
    ]
  },
  {
    id: 'm5',
    series: 'Men',
    name: 'The "Common Room" Double-Breasted Jacket',
    mat: 'Navy "Drape" Wool',
    price: 420,
    img: '/images/double-breasted.webp',
    shortDesc: 'Modern take on the 1940s "drape" suit. Powerful silhouette with a relaxed chest and four-button front.',
    objectPosition: 'center 15%',
    extraDetails: [
      { label: 'The Professional Edge', content: 'Specifically for graduation, internships, or high-stakes presentations.' },
      { label: 'Beginner Friendly', content: 'We have pre-set the button stance so it looks balanced whether you are tall or short.' },
      { label: 'Styling', content: 'Best worn with contrasting trousers (e.g., Grey Oxford) for a "broken suit" look.' }
    ]
  },
  {
    id: 'm6',
    series: 'Men',
    name: 'The "Bridge" Lightweight Overcoat',
    mat: 'Tan Water-Resistant Gabardine',
    price: 550,
    img: '/images/overcoat.webp',
    shortDesc: 'Single-breasted "Mac" style with a concealed placket. Knee-length for a clean professional line.',
    objectPosition: 'center 20%',
    extraDetails: [
      { label: 'The Polish', content: 'An overcoat instantly hides any "rushed" outfit underneath.' },
      { label: 'Design Touch', content: 'Includes a vintage-style "newspaper pocket" on the side.' },
      { label: 'Versatility', content: 'Light enough for transitional seasons but large enough to layer over a blazer.' }
    ]
  },
  // WOMEN'S SERIES
  {
    id: 'w1',
    series: 'Women',
    name: 'The "Sorbonne" Pleated Midi Dress',
    mat: 'Navy Wool-Crepe & Cotton',
    price: 385,
    img: '/images/midi-.jpeg',
    shortDesc: 'Structured bodice with a white "Peter Pan" collar. Flows into a heavy-pleated skirt hitting below the knee.',
    objectPosition: 'center 15%',
    extraDetails: [
      { label: 'The Modern Touch', content: 'Hidden side pockets large enough for a smartphone.' },
      { label: 'The Balance', content: 'Provides the "authority" of a suit with the comfort of a summer dress.' },
      { label: 'Inspiration', content: '1950s Parisian university style.' }
    ]
  },
  {
    id: 'w2',
    series: 'Women',
    name: 'The "Archive" Pinstripe Waistcoat',
    mat: 'Black Tailored Pinstripe Wool',
    price: 195,
    img: '/images/pinstripe.webp',
    shortDesc: 'V-neck, four-button front with an adjustable silk back-strap. Sharp, cinched silhouette.',
    objectPosition: 'center 20%',
    extraDetails: [
      { label: 'Problem Solved', content: '"Business Casual" for women often lacks structure. This adds a "sharp" edge.' },
      { label: 'Style Hack', content: 'Wear it over a turtleneck in winter or as a standalone top in summer for a daring but professional look.' }
    ]
  },
  {
    id: 'w3',
    series: 'Women',
    name: 'The "Silk Road" Bow-Tie Blouse',
    mat: 'Cream Sustainably Sourced Silk',
    price: 265,
    img: '/images/bow-tie-blouse.jpeg',
    shortDesc: 'Large floppy bow at the neck with "bishop" sleeves and elongated cuffs.',
    objectPosition: 'center 15%',
    extraDetails: [
      { label: 'Variety', content: 'The bow can be tied tight for a formal look or left loose like a scarf for a "creative professional" vibe.' },
      { label: 'Educational Insight', content: 'High-quality silk creates a "halo effect" of professionalism, even when paired with simple jeans.' }
    ]
  },
  {
    id: 'w4',
    series: 'Women',
    name: 'The "Athenaeum" Pencil Skirt',
    mat: 'Olive Green Travel-Wool Blend',
    price: 220,
    img: '/images/pencil-skirt.jpeg',
    shortDesc: 'High-waisted with a subtle side slit. Resists wrinkling after hours of sitting.',
    objectPosition: 'center 40%',
    extraDetails: [
      { label: 'The Silhouette', content: 'A 1940s classic. We’ve added 5% elastane for modern comfort and mobility.' },
      { label: 'Beginner Friendly', content: 'The high waist allows for a clean tuck-in of any blouse, hiding the "waistline struggle".' }
    ]
  },
  {
    id: 'w5',
    series: 'Women',
    name: 'The "Vienna" Cape Coat',
    mat: 'Charcoal Wool with Gold Buttons',
    price: 475,
    img: '/images/cape-coat.jpeg',
    shortDesc: 'Hybrid blazer-coat with structured shoulders and open arm-slits for dramatic ease of movement.',
    objectPosition: 'center 15%',
    extraDetails: [
      { label: 'The Vibe', content: 'Dramatic yet understated. It’s the ultimate "power piece" for student leaders.' },
      { label: 'Flow & Structure', content: 'The shoulders provide suit structure, while the body provides the "flowy" silhouette.' }
    ]
  },
  {
    id: 'w6',
    series: 'Women',
    name: 'The "Bibliothèque" Tapered Slacks',
    mat: 'Grey Check Brushed Wool',
    price: 195,
    img: '/images/tapered-slacks.jpeg',
    shortDesc: 'Hollywood Waistband for a seamless line. Tapered ankle with a soft, brushed interior.',
    objectPosition: 'center 40%',
    extraDetails: [
      { label: 'The Daily Driver', content: 'These look like trousers but feel like leggings due to the brushed interior.' },
      { label: 'Mix & Match', content: 'Pair with the "Silk Road" blouse for business-formal or a white tee for a weekend vibe.' }
    ]
  }
];

export default function Collections() {
  const navigate = useNavigate();
  const { series } = useParams<{ series?: string }>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (series && series !== 'men' && series !== 'women') {
      navigate(ROUTES.collections, { replace: true });
    }
  }, [series, navigate]);

  const filterSeries: 'All' | 'Men' | 'Women' =
    series === 'men' ? 'Men' : series === 'women' ? 'Women' : 'All';

  const setFilterSeries = (s: 'All' | 'Men' | 'Women') => {
    if (s === 'All') navigate(ROUTES.collections);
    else if (s === 'Men') navigate(ROUTES.collectionsMen);
    else navigate(ROUTES.collectionsWomen);
  };

  const filteredProducts =
    filterSeries === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.series === filterSeries);

  return (
    <div className="max-w-container-max mx-auto px-4 md:px-6 py-12">
      {/* Editorial Navigation / "The Daily Sartorial" Masthead */}
      <div className="border-b-2 border-text-charcoal mb-12 flex flex-col md:flex-row justify-between items-center py-6 gap-6">
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-tighter leading-none mb-1">THE DAILY SARTORIAL</h1>
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-60">Volume VIII • Issue XIV • Published in London & Paris</p>
        </div>
        <div className="flex bg-text-charcoal p-1 order-1 md:order-2">
          {(['All', 'Men', 'Women'] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilterSeries(s)}
              className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                filterSeries === s ? 'bg-background-paper text-text-charcoal' : 'text-white hover:bg-white/10'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Classifieds Sidebar */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="border-2 border-text-charcoal p-6 bg-white sticky top-32 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-serif text-2xl font-bold border-b border-text-charcoal pb-4 mb-6">Classifieds & Features</h2>
            
            <div className="space-y-8">
              <div className="border-b border-text-charcoal/20 pb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Search size={14} /> Search Archive
                </h3>
                <div className="border border-text-charcoal px-3 py-2 flex">
                  <input type="text" placeholder="Keywords..." className="bg-transparent border-none text-[10px] uppercase font-mono w-full focus:ring-0" />
                </div>
              </div>

              <div className="border-b border-text-charcoal/20 pb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Filter size={14} /> Refine Silhouette
                </h3>
                <div className="space-y-2">
                  {['High-Waist', 'Structured', 'Flowy'].map(f => (
                    <label key={f} className="flex items-center gap-2 cursor-pointer group">
                      <div className="w-3 h-3 border border-text-charcoal flex-shrink-0 group-hover:bg-accent-teal transition-colors" />
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100">{f}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[9px] leading-relaxed font-serif italic text-zinc-500">
                  "The transitional wardrobe is not a change of costume, but a change of posture. We design for the kinetic student."
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* News Card Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <motion.article 
                key={prod.id}
                layoutId={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className="bg-white border border-text-charcoal group cursor-pointer flex flex-col h-full hover:shadow-[8px_8px_0px_0px_rgba(43,43,43,1)] transition-all duration-300"
              >
                <div className="p-4 border-b border-text-charcoal flex justify-between items-center bg-stone-50">
                   <span className="text-[9px] font-bold uppercase tracking-widest">{prod.series}'s Dispatch</span>
                   <span className="text-[9px] font-mono text-zinc-400">Ref: {prod.id.toUpperCase()}</span>
                </div>
                
                <div className="relative aspect-[3/4] overflow-hidden grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 bg-zinc-200">
                  <img 
                    src={prod.img} 
                    alt={prod.name} 
                    className="w-full h-full object-cover" 
                    style={{ objectPosition: prod.objectPosition || 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-text-charcoal/10 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="p-6 flex flex-col flex-grow relative">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold font-serif leading-tight group-hover:text-accent-teal transition-colors mb-2">{prod.name}</h3>
                    <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">{prod.mat}</p>
                  </div>
                  
                  <div className="h-[1px] w-full bg-text-charcoal/10 my-4" />

                  <p className="text-sm font-serif italic text-zinc-600 leading-relaxed mb-6 flex-grow ">
                    {prod.shortDesc}
                  </p>

                  <div className="flex justify-between items-end mt-auto pt-4">
                    <span className="text-lg font-bold">${prod.price}</span>
                    <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-text-charcoal pb-1 translate-y-0 group-hover:-translate-y-1 transition-transform">
                      Read More <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Modal / Feature Story */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-text-charcoal/40 backdrop-blur-sm" 
            />
            
            <motion.div 
              layoutId={selectedProduct.id}
              className="relative w-full max-w-5xl bg-background-paper border-2 border-text-charcoal shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-text-charcoal text-white hover:bg-accent-teal transition-colors"
              >
                <X size={20} />
              </button>

              {/* Photo Column */}
              <div className="md:col-span-5 h-[300px] md:h-full relative bg-stone-200">
                <img 
                  src={selectedProduct.img} 
                  alt={selectedProduct.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
                  style={{ objectPosition: selectedProduct.objectPosition || 'center 20%' }}
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-text-charcoal to-transparent">
                  <h2 className="text-white text-3xl font-bold font-serif italic leading-tight">{selectedProduct.name}</h2>
                </div>
              </div>

              {/* Story Column */}
              <div className="md:col-span-7 p-8 md:p-12 overflow-y-auto">
                <div className="mb-12">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-teal block mb-4">Feature Investigation</span>
                  <h2 className="text-4xl font-bold font-serif mb-6 leading-tight">Beyond the Threads: A Sartorial Analysis</h2>
                  <p className="text-lg font-serif italic text-zinc-600 mb-8 leading-relaxed">
                    {selectedProduct.shortDesc}
                  </p>
                  <div className="flex items-center justify-between border-y border-text-charcoal py-4 mb-12">
                    <span className="text-3xl font-black">${selectedProduct.price}</span>
                    <button className="btn-primary">Add to Inventory</button>
                  </div>
                </div>

                <div className="space-y-12">
                  {selectedProduct.extraDetails.map((detail, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-40 flex-shrink-0">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-2">{detail.label}</h4>
                      </div>
                      <div className="flex-grow">
                        <p className="font-serif text-lg leading-relaxed text-zinc-700 italic">
                          {detail.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-12 border-t border-text-charcoal flex flex-col md:flex-row gap-8 justify-between items-center text-center md:text-left">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Technical Material</p>
                    <p className="text-sm font-bold">{selectedProduct.mat}</p>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => navigate(ROUTES.inspiration)} className="text-[10px] font-bold uppercase tracking-widest border border-text-charcoal px-4 py-2 hover:bg-stone-100">Style Instructions</button>
                    <button type="button" onClick={() => navigate(ROUTES.about)} className="text-[10px] font-bold uppercase tracking-widest border border-text-charcoal px-4 py-2 hover:bg-stone-100">Origin Story</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
