export default function MapSection() {
  return (
    <section className="h-96 relative">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.843291895631!2d75.8417!3d26.7832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ2JzU5LjUiTiA3NcKwNTAnMzAuMSJF!5e0!3m2!1sen!2sin!4v1621345678901!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }}
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location of Poornima Institute"
      ></iframe>
    </section>
  );
}
