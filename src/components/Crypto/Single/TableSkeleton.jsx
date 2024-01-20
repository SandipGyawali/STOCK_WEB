import Skeleton from "react-loading-skeleton";

const skeletonCount = Array(12).fill(
  <div className="list-row">
    <div className="logo_name">
      <Skeleton circle={true} className="logo" />
      <Skeleton className="name" />
    </div>
    <div className="content">
      <Skeleton className="content-sk" />
      <Skeleton className="content-sk" />
      <Skeleton className="content-sk" />
      <Skeleton className="content-sk" />
    </div>
  </div>
);

function TableSkeleton() {
  return (
    <div className="list-card">
      {skeletonCount.map((content) => (
        <>
          {content}
          <div className="skeleton-line"></div>
        </>
      ))}
    </div>
  );
}

export default TableSkeleton;
