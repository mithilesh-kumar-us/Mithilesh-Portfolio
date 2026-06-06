import { ImageResponse } from 'next/og';

export const alt = 'Developer Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <span
            style={{
              fontSize: 48,
              color: '#0ea5e9',
              fontWeight: 'bold',
            }}
          >
            {'<'}
          </span>
          <span
            style={{
              fontSize: 48,
              color: 'white',
              fontWeight: 'bold',
              marginLeft: 8,
              marginRight: 8,
            }}
          >
            Portfolio
          </span>
          <span
            style={{
              fontSize: 48,
              color: '#0ea5e9',
              fontWeight: 'bold',
            }}
          >
            {'/>'}
          </span>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#94a3b8',
            textAlign: 'center',
          }}
        >
          React • Next.js • TypeScript • Node.js
        </div>
      </div>
    ),
    { ...size }
  );
}
