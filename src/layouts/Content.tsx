import { Tarticle } from "@/features/posts/formationSlice";

const Content = ({ formation }: { formation: Tarticle[] }) => {
  const data = formation[0];

  return (
    <section className="mx-[24px] mt-[53px] max-w-[1424px]">
      <h2 className="after:z-1 relative h-fit w-fit max-w-[620px] px-5 py-[15px] text-center text-45 font-bold text-white before:absolute before:inset-0 before:z-2 before:mx-auto before:h-full before:w-full before:rotate-178 before:bg-red-400 before:content-[''] after:absolute after:left-5 after:top-2 after:h-full after:w-full after:rotate-178 after:bg-red-700 after:content-['']">
        <span className="relative z-10 leading-snug">Programme</span>
      </h2>
      <div
        id="content"
        className="font-regular mt-[49px] max-w-[866px] text-[20px]"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </section>
  );
};

export default Content;
