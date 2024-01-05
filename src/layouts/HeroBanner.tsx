import { RootState } from "@/app/store";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { setModal } from "@/features/modal/modalSlice";
import { Tarticle } from "@/features/posts/formationSlice";
import { useDispatch, useSelector } from "react-redux";

const HeroBanner = ({ formation }: { formation: Tarticle[] }) => {
  const data = formation[0];
  const scroll = useSelector((state: RootState) => state.scroll.data);
  const dispatch = useDispatch();
  const windowWidth = window.innerWidth;

  return (
    <section
      style={
        !scroll.state && windowWidth >= 1383
          ? { top: `${scroll.y + 158}px` }
          : {}
      }
      className={`${
        scroll.state ? "lg:fixed lg:top-40" : "lg:absolute"
      } relative z-50 mx-auto mt-[-85px] flex h-fit w-fit lg:right-80 lg:mt-0`}
    >
      <div className="absolute bottom-[-10px] right-[5px] h-[95%] w-[94%] rounded-[10px] border border-blue bg-white mobile:bottom-[-15px] mobile:right-[10px] tablet:rounded-[85px] lg:right-[-20px] lg:h-full lg:w-full"></div>
      <div className="relative z-2 mx-auto flex max-w-[94%] flex-col items-center justify-center rounded-[10px] bg-blue px-[49px] py-[47px] tablet:rounded-[85px] lg:w-[450px] lg:max-w-full">
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-center text-[28px] font-bold text-white tablet:text-lg">
            Vous souhaitez suivre cette formation ?
          </h2>
        </div>
        <Separator className="mx-auto mt-[9px] max-w-[320px] bg-white" />
        <div
          className="mx-auto my-[14px] text-center text-[27px] text-white tablet:text-md"
          dangerouslySetInnerHTML={{ __html: data.acf.zone_de_prix }}
        ></div>
        <Separator className="mx-auto mt-[9px] max-w-[320px] bg-white" />
        <div
          id="list"
          className="mt-[21px] text-center text-sm font-normal text-white"
          dangerouslySetInnerHTML={{ __html: data.acf.modalites }}
        ></div>
        <Button
          onClick={() => dispatch(setModal(true))}
          className="mx-auto mt-[42px] h-fit w-fit rounded-32 border border-black bg-black px-[20px] py-[15px] text-[26px] font-bold text-white duration-300 ease-in-out hover:border-white hover:bg-transparent"
        >
          Demande de devis
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;
