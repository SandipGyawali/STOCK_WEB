import Skeleton from "react-loading-skeleton";
import "./skeleton.css";

function SkeletonContent() {
  return (
    <div className="card-content">
      <Skeleton circle={true} className="circle-card" />
      <div className="skeleton-line">
        <Skeleton />
      </div>
    </div>
  );
}

export default SkeletonContent;
