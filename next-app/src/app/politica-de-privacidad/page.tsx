import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { isaiasBusiness } from '@/config/brand';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad y Tratamiento de Datos Personales | Variedades Isaías',
  description:
    'Conoce los términos de tratamiento de datos personales de Variedades Isaías en cumplimiento de la Ley 1581 de 2012 (Habeas Data) en Colombia.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070708] text-[#F4F1EA] pt-8 pb-32">
        <div className="wrap max-w-4xl mx-auto">
          
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: 'Política de Privacidad' },
              ]}
            />
          </div>

          {/* Document Header */}
          <header className="pb-8 border-b border-white/10 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14151C] border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-mono mb-4">
              <span>CUMPLIMIENTO LEGAL · LEY 1581 DE 2012 (COLOMBIA)</span>
            </div>
            <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight leading-[1.15]">
              Política de Privacidad y Protección de Datos Personales
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#8A8A92] mt-3 font-mono">
              Última actualización: Enero de {new Date().getFullYear()} · Valledupar, Cesar, Colombia
            </p>
          </header>

          {/* Document Body */}
          <article className="prose prose-invert max-w-none text-xs sm:text-sm text-[#D0CFC9] leading-relaxed font-light flex flex-col gap-8">
            
            <section className="bg-[#0C0D10] border border-white/10 p-6 rounded-xs">
              <h2 className="text-base sm:text-lg font-bold text-[#F4F1EA] mb-2 font-sans">
                1. Identificación del Responsable del Tratamiento
              </h2>
              <p className="mb-2">
                <strong>{isaiasBusiness.name}</strong>, con domicilio principal y taller de producción textil en la ciudad de Valledupar, departamento del Cesar, República de Colombia, es la entidad responsable del tratamiento de los datos personales suministrados por sus clientes, proveedores y usuarios del sitio web.
              </p>
              <ul className="list-disc pl-5 space-y-1 font-mono text-[11px] text-[#A0A0A5]">
                <li><strong>Dirección física:</strong> {isaiasBusiness.streetAddress || 'Calle 16 # 19A - 45'}, Valledupar, Cesar.</li>
                <li><strong>Correo de atención:</strong> {isaiasBusiness.email || 'contacto@variedadesisaias.com'}</li>
                <li><strong>Línea de WhatsApp oficial:</strong> +{isaiasBusiness.whatsappPhone}</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base sm:text-lg font-bold text-[#F4F1EA] font-sans">
                2. Marco Legal y Ámbito de Aplicación
              </h2>
              <p>
                La presente Política de Tratamiento de la Información se expide en estricto cumplimiento de lo consagrado en la <strong>Ley Estatutaria 1581 de 2012</strong>, su <strong>Decreto Reglamentario 1377 de 2013</strong>, y demás normas que las adicionen, modifiquen o complementen, con el objeto de garantizar el derecho constitucional de Habeas Data que tienen todas las personas de conocer, actualizar y rectificar la información que se haya recogido sobre ellas.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base sm:text-lg font-bold text-[#F4F1EA] font-sans">
                3. Finalidades del Tratamiento de los Datos
              </h2>
              <p>
                Los datos personales recolectados (tales como nombre, teléfono móvil, dirección de entrega, ciudad y correo electrónico) son utilizados de manera exclusiva para los siguientes fines comerciales y operacionales:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#A0A0A5]">
                <li>Procesar, responder y liquidar solicitudes de cotización técnica de confección, bordado Wilcom y estampado DTF.</li>
                <li>Coordinar el despacho y entrega de pedidos mediante domicilio local en Valledupar o empresas de transporte nacional certificadas (Servientrega, Interrapidísimo, Envia, entre otras).</li>
                <li>Enviar montajes digitales y muestras virtuales para la aprobación formal previa a la producción textil.</li>
                <li>Generar la facturación y soporte contable de las compras efectuadas.</li>
                <li>Brindar atención de servicio al cliente y garantías sobre prendas entregadas.</li>
              </ul>
            </section>

            <section className="bg-[#14151C] border border-[#C8A96E]/20 p-6 rounded-xs flex flex-col gap-2">
              <h2 className="text-base sm:text-lg font-bold text-[#C8A96E] font-sans">
                4. Confidencialidad y Propiedad de Diseños y Logotipos
              </h2>
              <p>
                En <strong>{isaiasBusiness.name}</strong> respetamos rigurosamente la propiedad intelectual de nuestros clientes. Los logotipos, vectores, artes visuales, diseños gráficos o matrices de bordado que usted nos suministre para la personalización de sus prendas <strong>nunca serán transferidos, vendidos, cedidos ni empleados para clientes terceros</strong> sin su consentimiento previo y por escrito.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base sm:text-lg font-bold text-[#F4F1EA] font-sans">
                5. Derechos de los Titulares de los Datos (Habeas Data)
              </h2>
              <p>
                De acuerdo con el artículo 8 de la Ley 1581 de 2012, usted tiene derecho a:
              </p>
              <ol className="list-decimal pl-5 space-y-1.5 text-[#A0A0A5]">
                <li>Conocer, actualizar y rectificar sus datos personales frente a los Responsables del Tratamiento.</li>
                <li>Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.</li>
                <li>Ser informado previa solicitud respecto del uso que se le ha dado a sus datos personales.</li>
                <li>Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la normatividad legal.</li>
                <li>Revocar la autorización y/o solicitar la supresión del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.</li>
                <li>Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.</li>
              </ol>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base sm:text-lg font-bold text-[#F4F1EA] font-sans">
                6. Procedimiento para Consultas, Actualizaciones y Reclamos
              </h2>
              <p>
                Para ejercer cualquiera de sus derechos, el titular podrá enviar una solicitud indicando su nombre completo, número de documento y el motivo de su petición al correo electrónico <strong>{isaiasBusiness.email || 'contacto@variedadesisaias.com'}</strong> o a nuestra línea de atención directa en WhatsApp <strong>+{isaiasBusiness.whatsappPhone}</strong>. Daremos respuesta formal a su solicitud dentro de un término máximo de diez (10) días hábiles.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base sm:text-lg font-bold text-[#F4F1EA] font-sans">
                7. Cookies y Herramientas Analíticas
              </h2>
              <p>
                Nuestro sitio web emplea cookies técnicas y herramientas de medición estadística (Google Analytics 4) para entender métricas anónimas de navegación (páginas más visitadas, tiempo promedio de carga y dispositivos utilizados). En ningún caso estas herramientas recopilan contraseñas, datos bancarios o información reservada. El usuario puede deshabilitar las cookies en cualquier momento desde la configuración de su navegador web.
              </p>
            </section>

            <section className="border-t border-white/10 pt-6">
              <p className="text-[#8A8A92] font-mono text-xs">
                Esta política rige a partir de su publicación y permanecerá vigente durante el tiempo necesario para el cumplimiento de las finalidades comerciales y legales de la empresa.
              </p>
            </section>

          </article>

        </div>
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
