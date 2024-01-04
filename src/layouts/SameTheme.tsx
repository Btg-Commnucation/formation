import { RootState } from "@/app/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tarticle } from "@/features/posts/formationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import he from "he";
import clock from "@/assets/clock.png";
import pana from "@/assets/profil-anais.png";
import arthur from "@/assets/profile-arthur.png";
import { setScroll, setScrollY } from "@/features/loading/scrollSlice";
import { useEffect, useRef } from "react";

const SameTheme = ({ currentFormation }: { currentFormation: Tarticle[] }) => {
  const section = useRef<HTMLElement | null>(null);
  const dispatch = useDispatch();
  const formation = useSelector((state: RootState) => state.formation.data);
  const data = formation.filter(
    (formation) =>
      formation.category_names[0] === currentFormation[0].category_names[0] &&
      formation.id !== currentFormation[0].id,
  );

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const callBackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    dispatch(setScroll(!entry.isIntersecting));
    dispatch(setScrollY(window.scrollY));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, options);
    if (section.current) observer.observe(section.current);

    return () => {
      if (section.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(section.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section, options]);

  return (
    <section
      ref={section}
      className="mx-auto mb-[68px] mt-[88px] flex max-w-[95%] flex-col items-center justify-center gap-[51px] xl:max-w-[1424px]"
    >
      <h2 className="rounded-32 bg-yellow p-[20px] text-center text-lg font-normal uppercase italic">
        Sur le même thème
      </h2>
      <ul className="lg:grid-cols-3 lg:gap-[20px] grid w-[95%] grid-cols-1 gap-[15px] tablet:grid-cols-2 desktop:w-full xl:gap-[59px]">
        {data.slice(0, 3).map((formation) => (
          <li key={formation.id}>
            <Card className="rounded-32 border border-blue">
              <CardHeader className="relative p-0">
                <img
                  src={formation.media.medium_large}
                  className="min-h-[189px] w-full rounded-t-30"
                />
                <div className="absolute bottom-[-15px] left-[25px] flex w-full gap-5">
                  <Badge className="flex h-fit w-fit items-center justify-center rounded-[15px] border-0 bg-white text-[16px] font-normal tablet:text-sm">
                    <img
                      src={clock}
                      alt="Horloge"
                      className="mr-1 max-w-[17.69px]"
                    />
                    <p>{he.decode(formation.acf.duree)}</p>
                  </Badge>
                  <Badge className="h-fit w-fit rounded-[15px] border-0 bg-white text-[16px] font-normal  text-black tablet:text-sm">
                    {he.decode(formation.category_names[0])}
                  </Badge>
                  <Avatar className="absolute bottom-[-20px] right-[50px] h-[70px] w-[70px] rounded-full bg-blue-700/20 tablet:bottom-[-30px] tablet:right-10 tablet:h-[96px] tablet:w-[96px]">
                    <AvatarImage
                      src={formation.acf.formateur === "Anaïs" ? pana : arthur}
                      alt="Photo du formateur"
                    />
                    <AvatarFallback>
                      {formation.acf.formateur === "Anaïs" ? "AN" : "AV"}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent className="mt-[42px]">
                <CardTitle className="flex flex-col gap-2 text-xl leading-none text-blue">
                  {he.decode(formation.title)}
                </CardTitle>
                <CardDescription className="mt-[14px] flex h-fit w-full flex-col gap-2 text-sm font-normal">
                  {he.decode(formation.excerpt)}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="h-fit w-fit rounded-32 border border-black bg-black px-[20px] py-[15px] text-sm font-normal text-white duration-300 ease-in-out hover:bg-white hover:text-black">
                  <Link to={`/${formation.slug}`}>Voir la formation</Link>
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SameTheme;
