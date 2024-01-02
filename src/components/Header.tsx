/* eslint-disable react-hooks/exhaustive-deps */
import background from "@/assets/bg-header.svg";
import { useDispatch } from "react-redux";
import { setFormation } from "@/features/posts/formationSlice";
import { setLoading } from "@/features/loading/loadingSlice";
import axios from "axios";
import { useEffect } from "react";
import { setCategories } from "@/features/posts/categoriesSlice";
import bookIcon from "@/assets/formation.svg";
import { Button } from "./ui/button";

const Header = () => {
  const dispatch = useDispatch();

  const getCategories = async () => {
    try {
      const response = await axios(
        "https://admin.btg-communication-dev.com/wp-json/wp/v2/categories",
      );
      dispatch(setCategories(response.data));
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFormations = async () => {
    try {
      const response = await axios(
        "https://admin.btg-communication-dev.com/wp-json/better-rest-endpoints/v1/posts",
      );
      dispatch(setFormation(response.data));
      await getCategories();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFormations();
  }, []);

  return (
    <>
      <header>
        <div className="relative desktop:mx-[24px] desktop:mt-[24px] bg-primary">
          <a
            href="https://btg-communication.fr"
            target="_blank"
            rel="noreferrer noopener"
            className="absolute left-2 top-2"
          >
            <span className="sr-only">
              Se rendre sur le site de BTG Communication
            </span>
            <img src="/logo-btg-formation.png" alt="Logo BTG Communication" />
          </a>
          <img
            className="mx-auto max-w-[1064px] object-fit object-center-bottom"
            src={background}
            alt="Un livre ouvert posé sur une planète"
          />
          <h1 className="absolute left-0 right-0 top-2 mx-auto flex w-fit flex-col text-center tablet:text-4xl text-2xl font-bold text-white">
            Formez vous aux{" "}
            <span className="after:z-1 relative px-5 text-white before:absolute before:inset-0 before:z-2 before:mx-auto before:h-full before:w-full before:rotate-178 before:bg-red-400 before:content-[''] after:absolute after:left-5 after:top-2 after:h-full after:w-full after:rotate-178 after:bg-red-700 after:content-['']">
              <span className="relative z-10">Bonnes pratiques</span>
            </span>{" "}
            de communication
          </h1>
        </div>
      </header>
      <a
        href="#formation"
        className="z-50 fixed bottom-5 right-5 flex flex-col items-center justify-center gap-[5px]"
      >
        <img
          src={bookIcon}
          alt="Pictogramme d'un livre ouvert"
          className="max-w-[42px]"
        />
        <Button className="w-fit rounded-32 border border-black bg-black px-[20px] py-[15px] text-sm font-normal text-white duration-300 ease-in-out hover:bg-transparent hover:text-black">
          Les formations
        </Button>
      </a>
    </>
  );
};

export default Header;
