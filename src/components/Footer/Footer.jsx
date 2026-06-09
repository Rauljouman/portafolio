import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© 2026 Raül Jouman. Desarrollado con React y CSS.</p>

        <div className="footer__links">
          <a
            href="https://github.com/Rauljouman"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/raul-jouman-ip/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:rauljouman@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;