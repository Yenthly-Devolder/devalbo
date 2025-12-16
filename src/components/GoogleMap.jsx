function GoogleMap() {
  return (
    <div className="relative h-0 overflow-hidden" style={{ paddingTop: '56.25%' }}>
      <iframe
        title="Google Map"
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.484223!2d4.284699!3d51.004722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c39e9f7f7a7a7d%3A0x1234567890abcdef!2sSint-Margrietstraat%2013%2C%209200%20Dendermonde%2C%20Belgium!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMap;