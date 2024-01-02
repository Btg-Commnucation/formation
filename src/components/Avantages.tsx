import formation from "@/assets/formation.png";

const Avantages = () => {
  return (
    <section className="relative z-2 mt-[68px] desktop:mt-[-65px] bg-gray pb-[77px] pt-[67px] desktop:pt-[159px]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="after:z-1 relative max-w-[620px] px-5 text-center text-3xl font-bold text-white before:absolute before:inset-0 before:z-2 before:mx-auto before:h-full before:w-full before:rotate-178 before:bg-red-400 before:content-[''] after:absolute after:left-5 after:top-2 after:h-full after:w-full after:rotate-178 after:bg-red-700 after:content-['']">
          <span className="relative z-10 leading-snug">
            Quels avantages pour votre entreprise ?
          </span>
        </h2>
        <div className="mx-auto mt-[92px] flex flex-col desktop:flex-row max-w-[1485px] items-center justify-center gap-[24px]">
          <img
            src={formation}
            alt="Des livres rangés avec un livre ouvert sur le dessus"
          />
          <div className="font-normal text-base desktop:text-md max-w-[95%] desktop:max-w-full mx-auto leading-snug">
            <p>
              Se former aux{" "}
              <span className="bg-black p-1 text-yellow">bonnes pratiques</span>{" "}
              de la communication présente un avantage inestimable pour toute
              organisation.
              <br />
              <span className="bg-black p-1 text-yellow">
                C'est une opportunité
              </span>{" "}
              de cultiver une culture interne forte, où chaque membre de
              l'équipe devient un ambassadeur compétent et conscient des usages
              des réseaux sociaux.
            </p>
            <p className="mt-10">
              La communication évolue constatemment, et être capable de{" "}
              <span className="bg-black p-1 text-yellow">
                s'adapter rapidement
              </span>{" "}
              aux nouvelles fonctionnalités, aux tendances émergentes et aux
              changements d'algorithmes est crucial.
            </p>
            <strong className="mt-10 flow-root font-bold">
              Des formations régulières permettent de reter à jour et de
              capitaliser sur les opportunités émergentes.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avantages;
