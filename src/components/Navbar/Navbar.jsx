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

  return (
    <header className="navbar">
      <nav className="navbar__content">
        <a href="#about" className="navbar__logo">
          Raül Jouman
        </a>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? "navbar__link--active" : ""}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="/cv-raul-jouman.pdf" className="navbar__cv" download>
          Descargar CV
        </a>
      </nav>
    </header>
  );
}

export default Navbar;