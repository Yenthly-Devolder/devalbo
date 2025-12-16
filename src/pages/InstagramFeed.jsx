import { useEffect, useState } from 'react';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get credentials from environment variables
  const INSTAGRAM_BUSINESS_ACCOUNT_ID = import.meta.env.VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID;
  const ACCESS_TOKEN = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        // Check if credentials are configured
        if (!INSTAGRAM_BUSINESS_ACCOUNT_ID || !ACCESS_TOKEN) {
          setError('Instagram API credentials are not configured. Please add them to your .env file.');
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://graph.instagram.com/v18.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp&limit=3&access_token=${ACCESS_TOKEN}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error?.message || 'Failed to fetch Instagram posts');
        }

        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Instagram API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [INSTAGRAM_BUSINESS_ACCOUNT_ID, ACCESS_TOKEN]);

  if (loading) return <div style={{ padding: '40px 20px', textAlign: 'center' }}>Loading Instagram feed...</div>;
  
  if (error) {
    return (
      <div style={{ padding: '40px 20px', textAlign: 'center', color: '#d32f2f' }}>
        <h3>Instagram Feed</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h3>No posts available</h3>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '30px' }}>Latest from @devalbo.be</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div 
              style={{ 
                borderRadius: '8px', 
                overflow: 'hidden', 
                backgroundColor: '#f0f0f0', 
                cursor: 'pointer', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
                <img 
                  src={post.media_url} 
                  alt="Instagram post" 
                  style={{ 
                    width: '100%', 
                    height: '300px', 
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
              ) : (
                <video 
                  src={post.media_url} 
                  style={{ 
                    width: '100%', 
                    height: '300px', 
                    objectFit: 'cover' 
                  }} 
                  controls
                />
              )}
              <div style={{ padding: '15px', minHeight: '70px', backgroundColor: '#fff' }}>
                <p style={{ fontSize: '14px', color: '#666', margin: '0', lineHeight: '1.5' }}>
                  {post.caption ? post.caption.substring(0, 100) + (post.caption.length > 100 ? '...' : '') : 'No caption'}
                </p>
                <p style={{ fontSize: '12px', color: '#999', marginTop: '10px', margin: '0' }}>
                  {new Date(post.timestamp).toLocaleDateString()}
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