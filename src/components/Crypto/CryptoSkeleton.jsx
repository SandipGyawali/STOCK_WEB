import SkeletonCard from "../Skeleton/CardSkeleton";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./crypto.css";
import TableSkeleton from "./Single/TableSkeleton";

function CryptoSkeleton() {
  return (
    <div className="crypto-skeleton-wrapper">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="list-top">
          <Skeleton className="top" />
          <Skeleton className="top" />
        </div>
        <SkeletonCard />
        <TableSkeleton />
      </SkeletonTheme>
    </div>
  );
}

export default CryptoSkeleton;
