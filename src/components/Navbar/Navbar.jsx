import { useEffect, useState } from "react";
import "./Navbar.css";

const navLinks = [
  { id: "about", label: "Sobre mí" },
  { id: "technologies", label: "Tecnologías" },
  { id: "projects", label: "Proyecto" },
  { id: "experience", label: "Experiencia" },
  { id: "education", label: "Formación" },
  { id: "contact", label: "Contacto" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (const link of navLinks) {
        const section = document.getElementById(link.id);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar__content">
        <a href="#about" className="navbar__logo" onClick={closeMenu}>
          Raül Jouman
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <div
          className={`navbar__links ${
            isMenuOpen ? "navbar__links--open" : ""
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className={activeSection === link.id ? "navbar__link--active" : ""}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/cv-raul-jouman.pdf"
            className="navbar__cv navbar__cv--mobile"
            download
            onClick={closeMenu}
          >
            Descargar CV
          </a>
        </div>

        <a
          href="/cv-raul-jouman.pdf"
          className="navbar__cv navbar__cv--desktop"
          download
        >
          Descargar CV
        </a>
      </nav>
    </header>
  );
}

export default Navbar;