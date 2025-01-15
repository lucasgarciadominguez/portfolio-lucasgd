import styles from './ContactStyles.module.css';
import emailjs from 'emailjs-com';

function sendMail(e) {
  e.preventDefault(); // Evita recargar la página

  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  emailjs
  .send(
    import.meta.env.VITE_SERVICE_KEY, // keys from .env
    import.meta.env.VITE_TEMPLATE_KEY,
    params, 
    import.meta.env.VITE_PUBLIC_KEY 
  )
  .then(
    (response) => {
      alert('Email sent successfully!');
      console.log('Success:', response);
    },
    (error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Check console for details.');
    }
  );

}

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={sendMail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;