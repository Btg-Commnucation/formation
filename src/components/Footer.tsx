import logo from "@/assets/logo-blanc.svg";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import linkedin from "@/assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-blue pt-[58px] pb-[93px]">
      <div className="flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="Logo de BTG Communication en blanc"
          className="mb-[22px]"
        />
        <ul className="flex gap-4 list-none">
          <li>
            <a
              href="https://www.linkedin.com/company/btg-communication/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Se rendre sur notre page Linkedin</span>
              <img src={linkedin} alt="Logo linkedin blanc" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/btg_communication/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">
                Se rendre sur notre page instagram
              </span>
              <img src={instagram} alt="Logo d'instagram en blanc" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/btg.communication"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Se rendre sur notre facebook</span>
              <img src={facebook} alt="Logo facebook blanc" />
            </a>
          </li>
        </ul>
        <ul className="mt-[53px] flex list-none gap-[123px]">
          <li>
            <a
              href="https://btg-communication.fr/savoir-faire/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-base text-white"
            >
              L'agence
            </a>
          </li>
          <li>
            <a
              href="mailto:contact@btg-communication.fr"
              target="_blank"
              rel="noreferrer noopener"
              className="text-base text-white"
            >
              Nous contacter
            </a>
          </li>
          <li>
            <a
              href="https://btg-communication.fr/blog"
              target="_blank"
              rel="noreferrer noopener"
              className="text-base text-white"
            >
              Le blog
            </a>
          </li>
          <li>
            <a
              href="https://btg-communication.fr/mentions-legales/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-base text-white"
            >
              Mentions Légales
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
