import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import clock from "@/assets/clock.png";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Loading = () => {
  return (
    <>
      <section className="z-50 fixed right-40 top-40 flex h-fit w-fit">
        <div className="absolute bottom-[-15px] right-[-20px] h-full w-full rounded-[85px] border border-blue bg-white"></div>
        <div className="relative z-2 flex w-[450px] flex-col items-center justify-center rounded-[85px] bg-blue px-[49px] py-[47px]">
          <div className="flex flex-col gap-[5px]">
            <Skeleton className="h-[35px] w-[352px] rounded-10 bg-white/10" />
            <Skeleton className="h-[35px] w-[352px] rounded-10 bg-white/10" />
          </div>
          <Separator className="mx-auto mt-[9px] max-w-[320px] bg-white" />
          <Skeleton className="mx-auto my-[14px] h-[35px] w-[300px] rounded-10 bg-white/10" />
          <Separator className="mx-auto mt-[9px] max-w-[320px] bg-white" />
          <Skeleton className="mx-auto mt-[21px] h-[24px] w-[192px] rounded-10 bg-white/10" />
          <Skeleton className="mx-auto mt-[11px] h-[24px] w-[192px] rounded-10 bg-white/10" />
          <Skeleton className="mx-auto mt-[11px] h-[24px] w-[192px] rounded-10 bg-white/10" />
          <Skeleton className="mx-auto mt-[11px] h-[24px] w-[192px] rounded-10 bg-white/10" />
          <Button className="mx-auto mt-[42px] h-fit w-fit rounded-32 border border-black bg-black px-[20px] py-[15px]">
            <Skeleton className="h-[36px] w-[209px] rounded-10 bg-white/10" />
          </Button>
        </div>
      </section>
      <section className="mx-auto mt-[42px] max-w-[1424px]">
        <div className="flex">
          <Badge className="flex h-fit w-fit items-center justify-center rounded-15 border-0 bg-white">
            <img src={clock} alt="Horloge" className="mr-1 max-w-[17.69px]" />
            <Skeleton className="h-[15px] w-[21px] cursor-pointer rounded bg-black/10" />
          </Badge>
          <Badge className="flex h-fit w-fit items-center justify-center rounded-15 border-0 bg-white">
            <Skeleton className="h-[15px] w-[130px] cursor-pointer rounded bg-black/10" />
          </Badge>
        </div>
        <div className="mt-[20px] flex flex-col gap-[10px]">
          <Skeleton className="h-[50px] w-[808px] bg-blue/10" />
          <Skeleton className="h-[50px] w-[808px] bg-blue/10" />
          <Skeleton className="h-[50px] w-[765px] bg-blue/10" />
        </div>
      </section>
      <section className="mt-[31px] bg-gray pb-[62px] pt-[53px]">
        <div className="mx-auto max-w-[1424px]">
          <h2 className="after:z-1 relative h-fit w-fit max-w-[620px] px-5 py-[15px] text-center text-3xl font-bold text-white before:absolute before:inset-0 before:z-2 before:mx-auto before:h-full before:w-full before:rotate-178 before:bg-red-400 before:content-[''] after:absolute after:left-5 after:top-2 after:h-full after:w-full after:rotate-178 after:bg-red-700 after:content-['']">
            <Skeleton className="relative z-10 h-[54px] w-[245px] bg-white/20" />
          </h2>
          <div className="mt-[53px] flex flex-col gap-[5px]">
            <Skeleton className="h-[25px] w-[730px] bg-blue/10" />
            <Skeleton className="h-[25px] w-[750px] bg-blue/10" />
            <Skeleton className="h-[25px] w-[779px] bg-blue/10" />
            <Skeleton className="h-[25px] w-[500px] bg-blue/10" />
          </div>
          <div className="mt-[66px] flex flex-col gap-[5px]">
            <Skeleton className="bg-blackGray/10 h-[25px] w-[730px]" />
            <Skeleton className="bg-blackGray/10 h-[25px] w-[750px]" />
            <Skeleton className="bg-blackGray/10 h-[25px] w-[779px]" />
            <Skeleton className="bg-blackGray/10 h-[25px] w-[500px]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Loading;
