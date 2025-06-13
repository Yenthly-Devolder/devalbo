import { useEffect } from 'react';

const InstagramFeed = () => {
  useEffect(() => {
    // Load EmbedSocial widget script
    const script = document.createElement('script');
    script.src = 'https://embedsocial.com/cdn/ef.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize EmbedSocial widget after script loads
    script.onload = () => {
      if (window.EmbedSocial) {
        window.EmbedSocial.init();
      }
    };

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Recent Instagram Posts from @devalbo.be</h2>
      {/* Replace 'YOUR_EMBEDSOCIAL_REF_ID' with the actual ref ID from EmbedSocial */}
      <div
        className="embedsocial-feed"
        data-ref="YOUR_EMBEDSOCIAL_REF_ID"
        style={{ maxWidth: '800px', margin: '0 auto' }}
      ></div>
    </div>
  );
};

export default InstagramFeed;