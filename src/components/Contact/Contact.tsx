import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_zf9aerk",
        "template_gdn2y8x",
        form.current,
        "83kRfB6jgzmb21MF0"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Poruka poslata");
          form.current?.reset();
        },
        (error) => {
          console.error("Error:", error);
          alert("Greška pri slanju poruke");
        }
      );
  };

  return (
    <div className="contact-us-form">
      <h2>Kontaktirajte nas</h2>
      <form onSubmit={handleSubmit} ref={form}>
        <div className="form-group">
          <label htmlFor="name">Ime:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Poruka:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button className="submit-button" type="submit">
          POŠALJI
        </button>
      </form>
    </div>
  );
}
