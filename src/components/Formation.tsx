import { useSelector } from "react-redux";
import FormationContainer from "./FormationContainer";
import { Skeleton } from "./ui/skeleton";
import { RootState } from "@/app/store";
import { Button } from "./ui/button";
import { useState } from "react";
import he from "he";

const Formation = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const loading = useSelector((state: RootState) => state.loading.data);
  const categories = useSelector((state: RootState) => state.categories.data);

  return (
    <article id="formation" className="mb-[156px] mt-[43px]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="after:z-1 relative max-w-[620px] px-5 text-center text-md font-bold text-white before:absolute before:inset-0 before:z-2 before:mx-auto before:h-full before:w-full before:rotate-178 before:bg-blue before:content-[''] after:absolute after:left-5 after:top-2 after:h-full after:w-full after:rotate-178 after:bg-blue-700 after:content-[''] tablet:text-3xl">
          <span className="relative z-10 flow-root rotate-2">
            Nos formations
          </span>
        </h2>
        <h3 className="mt-[33px] text-center text-xl tablet:text-2xl">
          À partir de <strong>250€ ht</strong>
        </h3>
        <div
          className="mt-[48px] flex flex-col items-center gap-[5px] desktop:flex-row
        desktop:gap-10"
        >
          {loading ? (
            <>
              <Skeleton
                className="flex h-[62px] w-[316px] cursor-pointer items-center justify-center rounded-43
          border border-blue-700/40"
              >
                <Skeleton className="h-[25px] w-[198px] cursor-pointer rounded bg-blue/10" />
              </Skeleton>
              <Skeleton className="h-[25px] w-[198px] cursor-pointer rounded bg-blue/10" />
              <Skeleton className="h-[25px] w-[198px] cursor-pointer rounded bg-blue/10" />
            </>
          ) : (
            <>
              <Button
                className={`${
                  currentCategory === "" ? "border-blue" : "border-transparent"
                } h-fit w-fit rounded-43 border  px-[24px] py-[14px] text-[20px] font-normal leading-snug text-blue hover:bg-blue hover:text-white tablet:text-md`}
                onClick={() => setCurrentCategory("")}
              >
                Toutes nos formations
              </Button>
              {categories.map((category) => (
                <Button
                  className={`${
                    currentCategory === category.name
                      ? "border-blue"
                      : "border-transparent"
                  } h-fit w-fit rounded-43 border px-[24px] py-[14px] text-[20px] font-normal text-blue hover:bg-blue hover:text-white tablet:text-md`}
                  key={category.id}
                  onClick={() => setCurrentCategory(category.name)}
                >
                  {he.decode(category.name)}
                </Button>
              ))}
            </>
          )}
        </div>
        <FormationContainer currentCategory={currentCategory} />
      </div>
    </article>
  );
};

export default Formation;
