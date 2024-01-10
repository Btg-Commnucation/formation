import Loading from "./Loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import clock from "@/assets/clock.png";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import pana from "@/assets/profil-anais.png";
import arthur from "@/assets/profile-arthur.png";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import he from "he";

const FormationContainer = ({
  currentCategory,
}: {
  currentCategory: string;
}) => {
  const loading = useSelector((state: RootState) => state.loading.data);
  const formation = useSelector((state: RootState) => state.formation.data);
  const [data, setData] = useState(formation);

  useEffect(() => {
    if (currentCategory === "") {
      setData(formation);
    } else {
      setData(
        formation.filter((formation) =>
          formation.category_names.includes(currentCategory),
        ),
      );
    }
  }, [currentCategory, formation]);

  return (
    <div className="mx-auto mt-[42px] grid w-fit max-w-[93%] grid-cols-1 gap-x-[15px] gap-y-[20px] tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-x-[59px] desktop:gap-y-[99px] xl:max-w-[1429px]">
      {loading ? (
        <Loading />
      ) : (
        <>
          {data.map((formation) => (
            <Card key={formation.id} className="rounded-32 border border-blue">
              <CardHeader className="relative p-0">
                <img
                  src={formation.media.medium_large}
                  className="obect-center min-h-[189px] w-full rounded-t-30 object-cover"
                  alt={formation.title}
                />
                <div className="absolute bottom-[-15px] left-[5px] flex w-full gap-2 tablet:left-[25px] tablet:gap-5">
                  <Badge className="flex h-fit w-fit items-center justify-center rounded-[15px] border-0 bg-white text-[16px] font-normal tablet:text-sm">
                    <img
                      src={clock}
                      alt="Horloge"
                      className="mr-1 max-w-[17.69px]"
                    />
                    <p>{he.decode(formation.acf.duree)}</p>
                  </Badge>
                  <Badge className="h-fit w-fit rounded-[15px] border-0 bg-white text-[16px] font-normal text-black tablet:text-sm">
                    {he.decode(formation.category_names[0])}
                  </Badge>
                  <Avatar className="absolute bottom-[-20px] right-[15px] h-[70px] w-[70px] rounded-full bg-blue-700/20 tablet:bottom-[-30px] tablet:right-10 tablet:h-[96px] tablet:w-[96px]">
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
                <CardDescription className="mt-[14px] flex h-fit w-full flex-col gap-2 text-sm font-normal leading-relaxed">
                  {he.decode(formation.excerpt)}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="h-fit w-fit rounded-32 border border-black bg-black px-[20px] py-[10px] text-sm font-normal text-white duration-300 ease-in-out hover:bg-white hover:text-black">
                  <Link to={`/${formation.slug}`}>Voir la formation</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default FormationContainer;
