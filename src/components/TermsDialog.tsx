import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

type TermsDialogProps = {
  triggerClassName?: string;
};

export default function TermsDialog({ triggerClassName }: TermsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={triggerClassName}>
          Terms of Service
        </button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(720px,85vh)] sm:max-w-3xl rounded-none border-text-charcoal bg-background-paper [&>button:last-child]:hidden">
        <div className="overflow-y-auto">
          <DialogHeader className="border-b-2 border-text-charcoal px-6 py-5 text-left">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
              Legal Notices Edition • 20th Century Style • For the Modern Academic
            </p>
            <DialogTitle className="text-3xl uppercase tracking-tight">The Daily Sartorial</DialogTitle>
            <DialogDescription asChild>
              <div className="pt-2 text-xs font-mono uppercase tracking-[0.16em] text-zinc-500">
                Terms & Conditions
              </div>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-7 px-6 py-6 md:px-8">
            <section>
              <h2 className="mb-3 border-b border-text-charcoal pb-1 text-xl italic">1. Acceptance of Terms</h2>
              <p className="text-[15px] leading-relaxed text-zinc-700">
                By accessing the digital presence of <strong>The Daily Sartorial</strong>, you are entering into a formal
                agreement to abide by the following rules of conduct and trade. These terms are designed to protect the
                integrity of our 20th-century European aesthetic and our mission to provide beginner-friendly professional
                attire to the university community.
              </p>
            </section>

            <section>
              <h2 className="mb-3 border-b border-text-charcoal pb-1 text-xl italic">2. Purpose of Service</h2>
              <p className="text-[15px] leading-relaxed text-zinc-700">
                Our platform provides both a commercial storefront and an educational "Inspiration" resource. While we
                strive to help students "mix and match" and navigate the complexities of formal wear, the final sartorial
                choice remains the responsibility of the customer. We provide the structure; you provide the flow.
              </p>
            </section>

            <section>
              <h2 className="mb-3 border-b border-text-charcoal pb-1 text-xl italic">3. Intellectual Property</h2>
              <p className="text-[15px] leading-relaxed text-zinc-700">
                All content included on this site—including our "Old Newspaper" templates, moving hero-section videos,
                garment designs (specifically our high-waisted silhouettes), and the "Modern Academic" series
                descriptions—is the exclusive property of The Daily Sartorial. Reproduction of our "Inspiration" pages for
                commercial use is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="mb-3 border-b border-text-charcoal pb-1 text-xl italic">
                4. Product Representation & Variations
              </h2>
              <p className="text-[15px] leading-relaxed text-zinc-700">
                Because our brand utilizes textures like charcoal wool, herringbone, and silk-crepe, please note that
                digital displays may vary slightly from the physical garment. We aim for 20th-century authenticity; minor
                variations in weave and fabric weight are hallmarks of the "modern touch" and structured flow we promise.
              </p>
            </section>

            <section>
              <h2 className="mb-3 border-b border-text-charcoal pb-1 text-xl italic">5. Returns & Exchange Policy</h2>
              <p className="text-[15px] leading-relaxed text-zinc-700">
                We understand that finding the right professional fit is a journey. Returns are accepted within 30 days,
                provided the items remain in "as-new" condition. High-waisted trousers must not show signs of wear or
                altered hemlines to be eligible for a refund.
              </p>
            </section>

            <section>
              <h2 className="mb-3 border-b border-text-charcoal pb-1 text-xl italic">6. Limitation of Liability</h2>
              <p className="text-[15px] leading-relaxed text-zinc-700">
                The Daily Sartorial shall not be held liable for any missed internship opportunities, failed
                presentations, or social faux pas. Our clothing is a tool for professional identity, but as noted in the
                works of Pierre Bourdieu, the <em>habitus</em> is cultivated by the wearer, not just the wool.
              </p>
            </section>
          </div>
        </div>

        <DialogFooter className="border-t border-text-charcoal px-6 py-4">
          <div className="mr-auto hidden text-[10px] font-mono uppercase tracking-[0.14em] text-zinc-500 md:block">
            <p className="flex items-center gap-2">
              <FileText size={13} />
              Published in Hong Kong. All rights reserved.
            </p>
            <p className="mt-1 normal-case italic tracking-normal">
              "Dressing the leaders of tomorrow in the elegance of yesterday."
            </p>
          </div>
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="rounded-none border-text-charcoal bg-background-paper text-xs uppercase tracking-widest hover:bg-text-charcoal hover:text-background-paper"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
