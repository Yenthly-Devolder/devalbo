import { useEffect, useState } from 'react';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace these with your actual values from Facebook Developer
  const INSTAGRAM_BUSINESS_ACCOUNT_ID = 'YOUR_INSTAGRAM_BUSINESS_ACCOUNT_ID';
  const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp&limit=3&access_token=${ACCESS_TOKEN}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (INSTAGRAM_BUSINESS_ACCOUNT_ID !== 'YOUR_INSTAGRAM_BUSINESS_ACCOUNT_ID') {
      fetchInstagramPosts();
    }
  }, []);

  if (loading) return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;
  if (error) return <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2>Recent Posts from @devalbo.be</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f0f0f0', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
                <img src={post.media_url} alt="Instagram post" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              ) : (
                <video src={post.media_url} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              )}
              <div style={{ padding: '15px', minHeight: '60px' }}>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
                  {post.caption ? post.caption.substring(0, 100) + (post.caption.length > 100 ? '...' : '') : 'No caption'}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;