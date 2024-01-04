import background from "@/assets/hero-formation.png";
import { Button } from "@/components/ui/button";
import { setLoading } from "@/features/loading/loadingSlice";
import { setFormation } from "@/features/posts/formationSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const fetchFormations = async () => {
    try {
      const response = await axios(
        "https://admin.btg-communication-dev.com/wp-json/better-rest-endpoints/v1/posts",
      );
      dispatch(setFormation(response.data));
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFormations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="min-h-[278px]">
      <div className="relative mx-[24px] mt-[24px] min-h-[278px]">
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
        <Button className="absolute left-20 top-5 h-fit w-fit rounded-[22px] border border-white bg-white p-[10px] duration-300 ease-in-out hover:bg-transparent hover:text-white">
          <Link to="/" className="text-sm font-normal">
            Retour aux formations
          </Link>
        </Button>
        <img
          className="h-full min-h-[278px] w-full object-cover"
          src={background}
          alt="Un livre ouvert posé sur une planète"
        />
      </div>
    </header>
  );
};

export default Header;
