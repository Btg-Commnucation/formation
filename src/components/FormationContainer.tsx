import { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
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
import pana from "@/assets/pana.jpg";
import { AvatarFallback } from "@radix-ui/react-avatar";

type Tarticle = {
  id: number;
  title: string;
  excerpt: string;
  media: {
    medium_large: string;
  };
  category_names: string[];
  acf: {
    duree: string;
    formateur: string;
  };
};

const FormationContainer = () => {
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState<Tarticle[] | null>(null);

  const fetchFormations = async () => {
    try {
      const response = await axios(
        "https://admin.btg-communication-dev.com/wp-json/better-rest-endpoints/v1/posts",
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFormations();
  }, []);

  return (
    <div className="mx-auto mt-[42px] grid w-full max-w-[1429px] grid-cols-3 gap-x-[59px] gap-y-[99px]">
      {loading ? (
        <Loading />
      ) : (
        <>
          {data!.map((formation) => (
            <Card key={formation.id} className="rounded-32 border border-blue">
              <CardHeader className="relative p-0">
                <img
                  src={formation.media.medium_large}
                  className="rounded-t-30 min-h-[189px] w-full"
                />
                <div className="absolute bottom-[-15px] left-[25px] flex w-full gap-5">
                  <Badge className="flex h-fit w-fit items-center justify-center rounded-[15px] border-0 bg-white text-sm font-normal">
                    <img
                      src={clock}
                      alt="Horloge"
                      className="mr-1 max-w-[17.69px]"
                    />
                    <p>{formation.acf.duree}</p>
                  </Badge>
                  <Badge className="text-black h-fit w-fit rounded-[15px] border-0 bg-white text-sm font-normal">
                    {formation.category_names[0]}
                  </Badge>
                  <Avatar className="rounded-full bg-blue-700/20 absolute bottom-[-30px] right-10 h-[96px] w-[96px]">
                    <AvatarImage src={pana} alt="Photo du formateur" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent className="mt-[42px]">
                <CardTitle className="flex flex-col gap-2 text-xl leading-none text-blue">
                  {formation.title}
                </CardTitle>
                <CardDescription className="mt-[14px] flex h-fit w-full flex-col gap-2 text-sm font-normal">
                  {formation.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-black border-black hover:text-black h-fit w-fit rounded-32 border px-[20px] py-[15px] text-sm font-normal text-white duration-300 ease-in-out hover:bg-white">
                  Voir la formation
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
