import cheffes from "@/assets/cheffes-entreprise.png";
import polygone from "@/assets/polygone.svg";

const HeroBanner = () => {
  return (
    <section className="relative z-10 dekstop:mt-[215px] mt-[300px]">
      <div className="mx-auto max-w-[1310px]">
        <div className="relative flex desktop:flex-row flex-col-reverse items-center justify-center">
          <div className="absolute top-[-15em] right-[20rem] desktop:right-[7rem] desktop:top-[-8em] flex h-[282px] w-[678px] items-center justify-center rounded-32 bg-blue">
            <p className="max-w-[568px] text-lg italic text-white">
              Formez vous aux bonnes pratiques de la{" "}
              <span className="font-bold">communication</span> sur vos{" "}
              <span className="font-bold">réseaux</span> et vos outils{" "}
              <span className="font-bold">print & web</span>
            </p>
            <img
              src={polygone}
              alt="Flèche de dialogue"
              className="rotate-4 absolute left-5 top-[247px] h-fit w-fit"
            />
          </div>
          <img
            src={cheffes}
            alt="Image de deux cheffes d'entreprises montrant du doigt une bulle de dialogue"
          />
          <div className="flex min-h-[229px] min-w-[632px] items-center justify-center rounded-32 border border-solid border-blue">
            <p className="max-w-[492px] text-md">
              Se former aux bonnes pratiques des réseaux sociaux est bien plus
              qu'un semple investissement
            </p>
          </div>
        </div>
        <p className="flex w-fit mx-auto desktop:w-full px-[61px] flex-col items-center justify-center rounded-56 bg-yellow py-[52px] text-center dekstop:text-2xl text-[30px] leading-snug">
          C'est un pilier fondamental pour une présence{" "}
          <span className="font-bold">solide, cohérente et évolutive.</span>
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
