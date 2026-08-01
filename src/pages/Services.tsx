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
        intro="Whether you are establishing a new business, expanding operations, attracting investment, or strengthening governance, our services are designed to support your business at every stage."
        accent="teal.png"
      />

      <section className="bg-night py-20 text-paper">
        <ServicesCarousel />
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-sm bg-night p-12 text-paper md:flex-row md:items-center md:p-16">
              <h2 className="display-md max-w-[16ch]">{contact.title}</h2>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-3 rounded-sm bg-crimson px-8 py-4 text-sm uppercase tracking-[0.16em] text-paper transition-colors hover:bg-crimson-bright"
              >
                {contact.cta}
                <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
