import { Tarticle } from "@/features/posts/formationSlice";

const Content = ({ formation }: { formation: Tarticle[] }) => {
  const data = formation[0];

  return (
    <section className="mx-[24px] mt-[33px] max-w-[1424px] tablet:mt-[53px] desktop:mx-auto">
      <h2 className="after:z-1 relative h-fit w-fit max-w-[620px] px-5 py-[15px] text-center text-md font-bold text-white before:absolute before:inset-0 before:z-2 before:mx-auto before:h-full before:w-full before:rotate-178 before:bg-red-400 before:content-[''] after:absolute after:left-2 after:top-2 after:h-full after:w-full after:rotate-178 after:bg-red-700 after:content-[''] tablet:text-45">
        <span className="relative z-10 flow-root rotate-2 leading-snug">
          Programme
        </span>
      </h2>
      <div
        id="content"
        className="font-regular mt-[33px] max-w-[866px] text-[20px] tablet:mt-[49px]"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </section>
  );
};

export default Content;
