import { RootState } from "@/app/store";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tarticle } from "@/features/posts/formationSlice";
import { useSelector } from "react-redux";

const HeroBanner = ({ formation }: { formation: Tarticle[] }) => {
  const data = formation[0];
  const scroll = useSelector((state: RootState) => state.scroll.data);
  return (
    <section
      style={!scroll.state ? { top: `${scroll.y + 158}px` } : {}}
      className={`${
        scroll.state ? "fixed top-40" : "absolute"
      } right-40 z-50 flex h-fit w-fit`}
    >
      <div className="absolute bottom-[-15px] right-[-20px] h-full w-full rounded-[85px] border border-blue bg-white"></div>
      <div className="relative z-2 flex w-[450px] flex-col items-center justify-center rounded-[85px] bg-blue px-[49px] py-[47px]">
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-center text-lg font-bold text-white">
            Vous souhaitez suivre cette formation ?
          </h2>
        </div>
        <Separator className="mx-auto mt-[9px] max-w-[320px] bg-white" />
        <div
          className="mx-auto my-[14px] text-center text-md text-white"
          dangerouslySetInnerHTML={{ __html: data.acf.zone_de_prix }}
        ></div>
        <Separator className="mx-auto mt-[9px] max-w-[320px] bg-white" />
        <div
          id="list"
          className="mt-[21px] text-center text-sm font-normal text-white"
          dangerouslySetInnerHTML={{ __html: data.acf.modalites }}
        ></div>
        <Button className="mx-auto mt-[42px] h-fit w-fit rounded-32 border border-black bg-black px-[20px] py-[15px] text-[26px] font-bold text-white duration-300 ease-in-out hover:border-white hover:bg-transparent">
          Demande de devis
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;
