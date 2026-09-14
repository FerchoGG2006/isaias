import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Variedades Isaías — Confección, Bordados & Estampados en Valledupar';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0C0D10',
          padding: '60px 80px',
          border: '14px solid #14151C',
          position: 'relative',
        }}
      >
        {/* Ambient Gold Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            right: '-150px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200, 169, 110, 0.18) 0%, rgba(12, 13, 16, 0) 70%)',
          }}
        />

        {/* Header / Brand Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '8px',
                backgroundColor: '#C8A96E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0C0D10',
                fontSize: '24px',
                fontWeight: '900',
              }}
            >
              VI
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  color: '#F4F1EA',
                  fontSize: '22px',
                  fontWeight: '800',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Variedades Isaías
              </span>
              <span
                style={{
                  color: '#C8A96E',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Taller Textil · Valledupar, Cesar
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#161720',
              border: '1px solid rgba(200, 169, 110, 0.3)',
              borderRadius: '999px',
              padding: '8px 18px',
              color: '#C8A96E',
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Valledupar · Taller Textil
          </div>
        </div>

        {/* Central Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 10,
            maxWidth: '1000px',
          }}
        >
          <h1
            style={{
              fontSize: '56px',
              fontWeight: '900',
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Confección de Prendas, Bordados Computarizados &amp; Estampados DTF
          </h1>
          <p
            style={{
              fontSize: '22px',
              color: '#A0A0A5',
              lineHeight: 1.4,
              margin: 0,
              maxWidth: '850px',
            }}
          >
            Taller especializado en telas frescas, bordado 3D Wilcom y estampados suaves de alta durabilidad en Valledupar. Envíos asegurados a toda Colombia.
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
            zIndex: 10,
          }}
        >
          {[
            'Bordadora Wilcom 3D',
            'DTF Textil Curado a 160°C',
            'Tela Piel de Durazno 220g',
            'Sublimación Fotográfica 4K',
            'Dotaciones Empresariales',
          ].map((tag) => (
            <div
              key={tag}
              style={{
                backgroundColor: '#141419',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#D0CFC9',
                fontSize: '14px',
                fontWeight: '600',
                padding: '6px 14px',
                borderRadius: '6px',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
