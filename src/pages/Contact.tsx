import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import Wordmark from "@/components/Wordmark";
import { brand, contact, services } from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title={contact.title}
        intro={contact.intro}
        accent="purple.png"
      />

      <section className="pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-[var(--spacing-gutter)] lg:grid-cols-[1.3fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-sm border border-line bg-paper-2 p-10">
              <Wordmark tone="dark" size="md" />

              <p className="mt-8 font-[var(--font-display)] text-lg italic text-crimson-deep">
                {brand.tagline}
              </p>

              <div className="mt-8 space-y-6 border-t border-line pt-8">
                <div>
                  <p className="eyebrow text-muted">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-2 block text-ink transition-colors hover:text-crimson"
                  >
                    {contact.email}
                  </a>
                </div>
                <div>
                  <p className="eyebrow text-muted">Advisory desks</p>
                  <ul className="mt-2 space-y-1 text-ink-soft">
                    {services.map((s) => (
                      <li key={s.id}>{s.title}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow text-muted">Affiliation</p>
                  <p className="mt-2 text-ink-soft">
                    An affiliate of {brand.parent}. Advisory services are
                    independently provided by the LLP.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
