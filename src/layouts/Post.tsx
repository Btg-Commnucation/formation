import { useSelector } from "react-redux";
import Header from "./Header";
import { RootState } from "@/app/store";
import Loading from "./Loading";
import HeroBanner from "./HeroBanner";
import { useParams } from "react-router-dom";

const Post = () => {
  const loading = useSelector((state: RootState) => state.loading.data);
  const formations = useSelector((state: RootState) => state.formation.data);
  const { slug } = useParams<{ slug: string }>();
  const formation = formations.filter((formation) => formation.slug === slug);
  console.log(formation);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeroBanner formation={formation} />
        </>
      )}
    </>
  );
};

export default Post;
