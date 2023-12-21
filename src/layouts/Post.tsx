import { useSelector } from "react-redux";
import Header from "./Header";
import { RootState } from "@/app/store";
import Loading from "./Loading";
import HeroBanner from "./HeroBanner";
import { useLocation, useParams } from "react-router-dom";
import FirstPart from "./FirstPart";
import Content from "./Content";
import SameTheme from "./SameTheme";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import ContactModal from "./ContactModal";

const Post = () => {
  const loading = useSelector((state: RootState) => state.loading.data);
  const formations = useSelector((state: RootState) => state.formation.data);
  const { slug } = useParams<{ slug: string }>();
  const formation = formations.filter((formation) => formation.slug === slug);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeroBanner formation={formation} />
          <FirstPart formation={formation} />
          <Content formation={formation} />
          <SameTheme currentFormation={formation} />
          <ContactModal formation={formation} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Post;
