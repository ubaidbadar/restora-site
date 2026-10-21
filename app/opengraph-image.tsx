import { ImageResponse } from 'next/og';
import SITE from '@/constants/site';

export const alt = `${SITE.name}: ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** The link preview on WhatsApp, Facebook, X and LinkedIn: the cloche, the name and the one-line promise. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: 'linear-gradient(135deg, #EEF2FF 0%, #F6F7F9 60%)', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ width: 96, height: 96, borderRadius: 22, background: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="64" height="64" viewBox="6 6 28 28" fill="#FFFFFF">
              <circle cx="20" cy="9.5" r="2.5" />
              <path d="M9 23a11 11 0 0 1 22 0z" />
              <rect x="7" y="25" width="26" height="4" rx="2" />
              <path d="M10.5 28h5L10 32.5z" />
            </svg>
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, color: '#0F172A' }}>Restora</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 60, fontWeight: 700, color: '#0F172A', lineHeight: 1.1, maxWidth: 980 }}>Orders, tables and khata for your restaurant.</div>
        <div style={{ marginTop: 24, fontSize: 32, color: '#334155' }}>Free · works offline · restora.live</div>
      </div>
    ),
    size,
  );
}
