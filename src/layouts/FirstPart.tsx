import { Badge } from "@/components/ui/badge";
import clock from "@/assets/clock.png";
import { Tarticle } from "@/features/posts/formationSlice";
import he from "he";

const FirstPart = ({ formation }: { formation: Tarticle[] }) => {
  const data = formation[0];

  return (
    <>
      <section className="mx-auto mt-[42px] max-w-[1424px]">
        <div className="flex">
          <Badge className="flex h-fit w-fit items-center justify-center rounded-15 border-0 bg-white text-sm font-normal">
            <img src={clock} alt="Horloge" className="mr-1 max-w-[17.69px]" />
            {he.decode(data.acf.duree)}
          </Badge>
          <Badge className="flex h-fit w-fit items-center justify-center rounded-15 border-0 bg-white text-sm font-normal leading-snug">
            {he.decode(data.category_names[0])}
          </Badge>
        </div>
        <div className="mt-[20px] flex flex-col gap-[10px]">
          <h1 className="max-w-808px text-3xl font-bold leading-snug text-blue">
            {he.decode(data.title)}
          </h1>
        </div>
      </section>
      <section className="mt-[31px] bg-gray pb-[62px] pt-[53px]">
        <div className="mx-auto max-w-[1424px]">
          <h2 className="after:z-1 text-45 relative h-fit w-fit max-w-[620px] px-5 py-[15px] text-center font-bold text-white before:absolute before:inset-0 before:z-2 before:mx-auto before:h-full before:w-full before:rotate-178 before:bg-red-400 before:content-[''] after:absolute after:left-5 after:top-2 after:h-full after:w-full after:rotate-178 after:bg-red-700 after:content-['']">
            <span className="relative z-10 leading-snug">Présentation</span>
          </h2>
          <p className="font-regular mt-[53px] max-w-[779px] text-sm text-blue">
            {he.decode(data.acf.partie_bleu)}
          </p>
          <p className="mt-[66px] max-w-[779px] text-sm font-normal italic text-blackGray">
            {he.decode(data.acf.partie_grise)}
          </p>
        </div>
      </section>
    </>
  );
};

export default FirstPart;
