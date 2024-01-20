import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./skeleton.css";
import SkeletonContent from "./SkeletonContent";

function SkeletonCard() {
  return (
    <div className="skeleton-wrapper">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="skeleton-wrapper">
          <div className="card">
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
          </div>
        </div>
      </SkeletonTheme>

      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="skeleton-wrapper">
          <div className="card">
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
          </div>
        </div>
      </SkeletonTheme>

      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="skeleton-wrapper">
          <div className="card">
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
            <SkeletonContent />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default SkeletonCard;
