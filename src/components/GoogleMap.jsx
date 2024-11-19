function GoogleMap() {
  return (
    <div className="relative h-0 overflow-hidden" style={{ paddingTop: '56.25%' }}>
      <iframe
        title="Google Map"
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.488621531218!2d4.104907115622762!3d51.0281177795616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c593a3de7c81%3A0xb5c8a5cb2c01a31c!2sSint%20Margrietstraat%2013%2C%209200%20Dendermonde%2C%20Belgium!5e0!3m2!1sen!2sus!4v1643520114251!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
