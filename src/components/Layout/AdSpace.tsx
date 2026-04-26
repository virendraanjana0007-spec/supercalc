'use client';

import { useEffect } from 'react';

interface AdSpaceProps {
  position: string;
  adSlot?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdSpace({ position, adSlot }: AdSpaceProps) {
  useEffect(() => {
    try {
      // Initialize AdSense ad
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense initialization error:', err);
    }
  }, []);

  return (
    <div 
      className="my-6 p-4 text-center"
      style={{ 
        minHeight: '100px',
        background: 'linear-gradient(135deg, #f7fafc, #edf2f7)',
        border: '2px dashed #cbd5e0',
        borderRadius: '0.75rem',
      }}
    >
      {/* Google AdSense Ad Unit */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8857627341562937"
        data-ad-slot={adSlot || '1234567890'} // Replace with actual ad slot after creating in AdSense
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      
      {/* Placeholder text - will be replaced by actual ad */}
      <p className="text-sm text-gray-500 mt-2">
        📢 Ad Space - {position}
      </p>
      <p className="text-xs text-gray-400">
        Google AdSense Active
      </p>
    </div>
  );
}
