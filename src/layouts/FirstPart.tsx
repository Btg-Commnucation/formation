import { Badge } from "@/components/ui/badge";
import clock from "@/assets/clock.png";
import { Tarticle } from "@/features/posts/formationSlice";
import he from "he";

const FirstPart = ({ formation }: { formation: Tarticle[] }) => {
  const data = formation[0];

  return (
    <>
      <section className="mx-[24px] mt-[42px] max-w-[1424px] desktop:mx-auto">
        <div className="flex items-center">
          <Badge className="flex h-fit w-fit items-center justify-center rounded-15 border-0 bg-white text-sm font-normal">
            <img src={clock} alt="Horloge" className="mr-1 max-w-[17.69px]" />
            {he.decode(data.acf.duree)}
          </Badge>
          <Badge className="flex h-fit w-fit items-center justify-center rounded-15 border-0 bg-white text-sm font-normal leading-snug">
            {he.decode(data.category_names[0])}
          </Badge>
        </div>
        <div className="mt-[20px] flex flex-col gap-[10px]">
          <h1 className="max-w-808px text-[30px] font-bold leading-snug text-blue tablet:text-3xl">
            {he.decode(data.title)}
          </h1>
        </div>
      </section>
      <section className="mt-[31px] bg-gray pb-[62px] pt-[33px] tablet:pt-[53px]">
        <div className="mx-[24px] max-w-[1424px] desktop:mx-auto">
          <h2 className="after:z-1 relative h-fit w-fit max-w-[620px] px-5 py-[15px] text-center text-md font-bold text-white before:absolute before:inset-0 before:z-2 before:mx-auto before:h-full before:w-full before:rotate-178 before:bg-red-400 before:content-[''] after:absolute after:left-2 after:top-2 after:h-full after:w-full after:rotate-178 after:bg-red-700 after:content-[''] tablet:text-45">
            <span className="relative z-10 flow-root rotate-2 leading-snug">
              Présentation
            </span>
          </h2>
          <p className="font-regular mt-[33px] max-w-[779px] text-[20px] leading-relaxed text-blue tablet:mt-[53px]">
            {he.decode(data.acf.partie_bleu)}
          </p>
          <p className="mt-[30px] max-w-[779px] text-[20px] font-normal italic leading-relaxed text-blackGray desktop:mt-[50px]">
            {he.decode(data.acf.partie_grise)}
          </p>
        </div>
      </section>
    </>
  );
};

export default FirstPart;
