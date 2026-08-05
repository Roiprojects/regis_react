import Link from "@/components/AppLink";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui";
import ServicesCarousel from "@/components/ServicesCarousel";
import { contact } from "@/lib/content";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Comprehensive Corporate Advisory Services"
        intro="Businesses encounter different challenges as they evolve. We provide the legal, governance, regulatory, and strategic perspective needed to navigate complexity, manage risk, and pursue opportunities with clarity."
        accent="teal.png"
      />

      <section className="bg-night py-20 text-paper">
        <ServicesCarousel />
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
              <h2 className="display-lg max-w-[16ch] text-inkg">
                {contact.title}
              </h2>
              <div className="max-w-md">
                <p className="text-lg leading-relaxed text-inkg-soft">
                  {contact.intro}
                </p>
                <Link href="/contact" className="btn btn-terra group mt-8">
                  {contact.cta}
                  <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
