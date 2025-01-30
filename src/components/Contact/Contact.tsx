import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser"

export default function Contact() {
    const form = useRef<any>(null);

    const handleSubmit = (e: any) => {
      e.preventDefault();
      console.log(form.current);
      emailjs
        .sendForm(
          "service_8knh531",
          "template_8zq10sa",
          form.current,
          "QH7o6FmxhnXxLLkKy",
        )
        .then(
          (result:any) => {
            console.log(result.text);
            alert('Poruka poslata')
          },
          (error:any) => {
            console.error(error);
          }
        );
  
    };
  
    return (
      <div className="contact-us-form">
        <h2>Kontaktirajte nas</h2>
        <form onSubmit={handleSubmit} ref={form}>
          <div className="form-group">
            <label htmlFor="name">Ime:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Poruka:</label>
            <textarea
              id="message"
              name="message"
              required
            ></textarea>
          </div>
          <button className='submit-button' type='submit'>POŠALJI</button>
        </form>
      </div>
    );
  };
