import Head from "../components/HomePage/Head";
import "../components/HomePage/HomePage.css";
import MarketCard from "../components/HomePage/MarketCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //styling loader for react
import SkeletonCard from "../components/Skeleton/CardSkeleton";
import { useGetCryptoTrendDataQuery } from "../store/api/cryptoApiSlice";
import "../components/HomePage/HomePage.css";
import CryptoCarousel from "../components/Crypto/CryptoCarousel";
import RegisterReq from "../components/HomePage/RegisterReq";
import Community from "../components/HomePage/Community";

function Home() {
  // this helps in caching and reduces the stress of useEffect
  const { data, isLoading, isError, error } = useGetCryptoTrendDataQuery();
  // handling the loading before data is being fetched
  if (isLoading) {
    return <SkeletonCard />;
  }

  // if error then give the error message.
  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="home-container">
      <Head />
      <CryptoCarousel data={data.coins} />
      <div className="market-heading">
        <span>Market</span>
      </div>
      <MarketCard data={data} />
      <RegisterReq />
      <Community />
    </div>
  );
}

export default Home;
