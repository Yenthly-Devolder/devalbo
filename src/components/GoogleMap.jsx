function GoogleMap() {
  return (
    <div className="relative h-0 overflow-hidden" style={{ paddingTop: '56.25%' }}>
      <iframe
        title="Google Map"
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.7949719632713!2d4.235667915635354!3d51.09197391807013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3e136d75c30df%3A0xc7cebbf1f277d4ed!2sBareldreef%20117%2C%202880%20Bornem%2C%20Belgium!5e0!3m2!1sen!2sus!4v1643520114251!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
