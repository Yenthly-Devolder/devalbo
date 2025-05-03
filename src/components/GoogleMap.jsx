function GoogleMap() {
  return (
    <div className="relative h-0 overflow-hidden" style={{ paddingTop: '56.25%' }}>
      <iframe
        title="Google Map"
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.574314583242!2d4.302935315625614!3d51.00468597955722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c39e7b7f7a7c7d%3A0x9a8c6f7a6b7b7c7e!2sZwaluwstraat%2071%2C%201840%20Londerzeel%2C%20Belgium!5e0!3m2!1sen!2sus!4v1698765432109!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMap;