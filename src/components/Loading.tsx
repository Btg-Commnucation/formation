import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import clock from "@/assets/clock.png";

const Loading = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="rounded-32 border border-blue">
          <CardHeader className="relative p-0">
            <Skeleton className="rounded-t-30 h-[189px] w-full bg-blue/10" />
            <div className="absolute bottom-[-10px] left-[25px] flex w-full gap-5">
              <Badge className="rounded-15 flex h-fit w-fit items-center justify-center border-0 bg-white">
                <img
                  src={clock}
                  alt="Horloge"
                  className="mr-1 max-w-[17.69px]"
                />
                <Skeleton className="bg-black/10 h-[15px] w-[21px] cursor-pointer rounded" />
              </Badge>
              <Badge className="rounded-15 flex h-fit w-fit items-center justify-center border-0 bg-white">
                <Skeleton className="bg-black/10 h-[15px] w-[130px] cursor-pointer rounded" />
              </Badge>
              <Skeleton className="rounded-full bg-blue-700/20 absolute bottom-[-30px] right-10 h-[96px] w-[96px]" />
            </div>
          </CardHeader>
          <CardContent className="mt-[42px]">
            <CardTitle className="flex flex-col gap-2">
              <Skeleton className="h-[37px] w-[397px] bg-blue/10" />
              <Skeleton className="h-[37px] w-[150px] bg-blue/10" />
            </CardTitle>
            <div className="mt-[14px] flex h-fit w-full flex-col gap-2">
              <Skeleton className="bg-black/10 h-[20px] w-[397px]" />
              <Skeleton className="bg-black/10 h-[20px] w-[397px]" />
              <Skeleton className="bg-black/10 h-[20px] w-[110px]" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="bg-black h-fit w-fit rounded-32 px-[20px] py-[15px]">
              <Skeleton className="h-[20px] w-[133px] rounded bg-white/20" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Loading;
