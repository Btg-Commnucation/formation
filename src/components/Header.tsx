import background from "@/assets/bg-header.svg";

const Header = () => {
  return (
    <header>
      <div className="bg-primary max-w-[1872px] mx-auto mt-[24px] relative">
        <a
          href="https://btg-communication.fr"
          target="_blank"
          rel="noreferrer noopener"
          className="absolute top-2 left-2"
        >
          <span className="sr-only">
            Se rendre sur le site de BTG Communication
          </span>
          <img src="/logo-btg-formation.png" alt="Logo BTG Communication" />
        </a>
        <img
          className="mx-auto max-w-[1064px]"
          src={background}
          alt="Un livre ouvert posé sur une planète"
        />
        <h1 className="absolute left-0 right-0 flex flex-col mx-auto text-4xl font-bold text-center text-white top-2 w-fit">
          Formez vous aux{" "}
          <span className="text-white relative px-5 before:content-[''] before:bg-red-400 before:absolute before:w-full before:z-2 before:h-full before:inset-0 before:mx-auto before:rotate-178 after:content-[''] after:bg-red-700 after:w-full after:h-full after:rotate-178 after:left-5 after:absolute after:z-1 after:top-2">
            <span className="relative z-10">Bonnes pratiques</span>
          </span>{" "}
          de communication
        </h1>
      </div>
    </header>
  );
};

export default Header;
