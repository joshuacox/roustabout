'use client';

import React, { useEffect } from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  responsive?: boolean;
  className?: string;
}

export default function AdBanner({
  slot = '1234567890',
  format = 'auto',
  responsive = true,
  className = '',
}: AdBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // @ts-expect-error adsbygoogle is defined on window by Google AdSense
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.debug('AdSense script initialization notice:', err);
    }
  }, []);

  return (
    <div className={`my-8 text-center overflow-hidden ${className}`}>
      <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">
        Advertisement
      </div>
      <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-2 min-h-[90px] flex items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minWidth: '250px' }}
          data-ad-client="ca-pub-8973108060277483"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      </div>
    </div>
  );
}
