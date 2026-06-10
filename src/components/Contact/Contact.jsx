import "./Contact.css";

function Contact() {
  return (
    <section className="contact section reveal" id="contact">
      <div className="contact__header">
        <h2>¿Hablamos?</h2>
        <p>
          Estoy abierto a nuevas oportunidades como desarrollador junior,
          especialmente en posiciones relacionadas con backend, full stack,
          desarrollo web o soporte técnico orientado a entornos tecnológicos.
        </p>
      </div>

      <div className="contact__content">
        <form
          className="contact-form"
          action="https://formsubmit.co/rauljouman@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="Nuevo mensaje desde el portfolio"
          />

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <input
            type="hidden"
            name="_autoresponse"
            value="Gracias por contactar conmigo. He recibido tu mensaje y responderé lo antes posible."
          />

          <div className="contact-form__group">
            <label htmlFor="name">Nombre_</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="email">Email_</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="subject">Asunto_</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Motivo del mensaje"
              required
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="message">Mensaje_</label>
            <textarea
              id="message"
              name="message"
              placeholder="¿En qué puedo ayudarte?"
              rows="5"
              required
            ></textarea>
          </div>

          <button className="contact-form__button" type="submit">
            Enviar mensaje
          </button>
        </form>

        <aside className="contact-info">
          <div className="contact-info__item">
            <div className="contact-info__icon">@</div>

            <div>
              <p>Email directo</p>
              <a href="mailto:rauljouman@gmail.com">
                rauljouman@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-info__item">
            <div className="contact-info__icon">↗</div>

            <div>
              <p>Redes</p>

              <div className="contact-info__links">
                <a
                  href="https://www.linkedin.com/in/raul-jouman-ip/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <span>/</span>

                <a
                  href="https://github.com/Rauljouman"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;