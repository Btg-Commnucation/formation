import cheffes from "@/assets/cheffes-entreprise.png";
import polygone from "@/assets/polygone.svg";

const HeroBanner = () => {
  return (
    <section className="relative z-10 mx-auto mt-[300px] max-w-[95%] desktop:mt-[215px] desktop:max-w-full">
      <div className="mx-auto max-w-[1310px]">
        <div className="relative flex flex-col-reverse items-center justify-center desktop:flex-row">
          <div className="absolute left-0 right-0 top-[-16rem] mx-auto flex min-h-[282px] max-w-[678px] items-center justify-center rounded-32 bg-blue px-[2rem] uppercase mobile-md:top-[-16rem] mobile:top-[-18rem] tablet:top-[-15em] desktop:right-[7rem] desktop:top-[-9em] desktop:mr-0 desktop:py-0">
            <p className="relative z-10 max-w-[568px] text-[27px] italic leading-10 text-white mobile:text-lg">
              Formez vous aux bonnes pratiques de la{" "}
              <span className="font-bold">communication</span> sur vos{" "}
              <span className="font-bold">réseaux</span> et vos outils{" "}
              <span className="font-bold">print & web</span>
            </p>
            <img
              src={polygone}
              alt="Flèche de dialogue"
              className="rotate-4 z-0 absolute left-5 top-[247px] h-fit w-fit"
            />
          </div>
          <img
            src={cheffes}
            alt="Image de deux cheffes d'entreprises montrant du doigt une bulle de dialogue"
          />
          <div className="flex min-h-[229px] w-[90%] max-w-[632px] items-center justify-center self-end rounded-32 border border-solid border-blue px-[2rem] py-[2rem] tablet:w-fit tablet:py-0 desktop:self-center">
            <p className="max-w-[492px] text-md leading-8">
              Se former aux bonnes pratiques des réseaux sociaux est bien plus
              qu'un semple investissement
            </p>
          </div>
        </div>
        <p className="mx-auto flex w-fit flex-col items-center justify-center rounded-[10px] bg-yellow px-[15px] py-[20px] text-center text-[30px] leading-none tablet:rounded-56 tablet:px-[61px] tablet:py-[52px] desktop:w-full desktop:text-2xl">
          C'est un pilier fondamental pour une présence{" "}
          <span className="font-bold">solide, cohérente et évolutive.</span>
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
