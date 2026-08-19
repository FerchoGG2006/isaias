import Image from 'next/image';
import { QuoteLink } from '@/components/ui/QuoteLink';
import { brand } from '@/config/brand';

export function QuoteSection() {
  const phoneConfigured = Boolean(brand.whatsappPhone);

  return (
    <section id="nosotros" className="quote-section">
      <div className="quote-section__image" aria-hidden="true">
        <Image src="/media/embroidery-threads.jpeg" alt="" fill sizes="100vw" className="cover-image" />
      </div>
      <div className="quote-section__wash" aria-hidden="true" />
      <div className="editorial-shell quote-section__content">
        <span className="technical-label">Variedades Isaías / Valledupar</span>
        <h2>Tu idea merece una pieza que se pueda mirar de cerca.</h2>
        <p>Hablemos de la prenda, el material y la técnica que quieres explorar.</p>
        <QuoteLink className="button button--light" message="Hola, quiero solicitar una cotización para un proyecto personalizado.">
          Solicitar cotización <span aria-hidden="true">↗</span>
        </QuoteLink>
      </div>

      <div id="contacto" className="contact-anchor editorial-shell">
        <span>Contacto</span>
        <p>{phoneConfigured ? 'Escríbenos para iniciar tu cotización.' : 'Configura NEXT_PUBLIC_WHATSAPP_PHONE para activar el enlace directo de cotización.'}</p>
      </div>
    </section>
  );
}
