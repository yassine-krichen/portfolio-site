import { ImageResponse } from 'next/og';

import { site } from '@/content/site';

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BG = '#0a0a0a';
const TEXT = '#ececec';
const MUTED = '#8a8f98';
const ACCENT = '#f5a524';
const HAIRLINE = '#1f2329';

// Dynamic Open Graph image so a shared link renders a real branded preview.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: BG,
          color: TEXT,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 14, height: 14, background: ACCENT }} />
          <div
            style={{ color: MUTED, fontSize: 26, letterSpacing: 2 }}
          >
            status: available for new projects
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 104, fontWeight: 700, lineHeight: 1.02 }}>
            {site.name}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginTop: 16,
            }}
          >
            <div style={{ width: 56, height: 4, background: ACCENT }} />
            <div style={{ fontSize: 40, color: ACCENT }}>{site.role}</div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: `1px solid ${HAIRLINE}`,
            paddingTop: 28,
            fontSize: 26,
            color: MUTED,
          }}
        >
          <div>Next.js · NestJS · FastAPI · TypeScript</div>
          <div>{site.email}</div>
        </div>
      </div>
    ),
    size,
  );
}
