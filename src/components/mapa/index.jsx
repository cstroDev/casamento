import './index.scss';

export default function Mapa() {
  return (
    <div style={{ textAlign: 'start', marginBottom:'40px' }}>
      <h3>Instruções</h3>
      <iframe
        title="Localização"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.9987572452683!2d-47.42297148797832!3d-23.424412056489317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf5fd919f6c20d%3A0x6de2e119c4805cc9!2sCondom%C3%ADnio%20parque%20sal%C3%A9m!5e0!3m2!1spt-BR!2sbr!4v1761615082437!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: '10px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}