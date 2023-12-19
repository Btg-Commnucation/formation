import FormationContainer from "./FormationContainer";
import { Skeleton } from "./ui/skeleton";

const Formation = () => {
  return (
    <article className="mb-[156px] mt-[43px]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="after:z-1 after:bg-blue-700 relative max-w-[620px] px-5 text-center text-3xl font-bold text-white before:absolute before:inset-0 before:z-2 before:mx-auto before:h-full before:w-full before:rotate-178 before:bg-blue before:content-[''] after:absolute after:left-5 after:top-2 after:h-full after:w-full after:rotate-178 after:content-['']">
          <span className="relative z-10">Nos formations</span>
        </h2>
        <h3 className="mt-[33px] text-center text-2xl">
          À partir de <strong>250€ ht</strong>
        </h3>
        <div
          className="mt-[48px] flex items-center
        gap-10"
        >
          <Skeleton
            className="rounded-43 border-blue-700/40 flex h-[62px] w-[316px] cursor-pointer items-center
        justify-center border"
          >
            <Skeleton className="h-[25px] w-[198px] cursor-pointer rounded bg-blue/10" />
          </Skeleton>
          <Skeleton className="h-[25px] w-[198px] cursor-pointer rounded bg-blue/10" />
          <Skeleton className="h-[25px] w-[198px] cursor-pointer rounded bg-blue/10" />
        </div>
        <FormationContainer />
      </div>
    </article>
  );
};

export default Formation;
