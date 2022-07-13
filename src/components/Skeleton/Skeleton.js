import './Skeleton.scss';

export default function Skeleton() {

    return (
        <div className="Skeleton">
            <div className="Skeleton-Header">
                <div className="Skeleton-Circle PulseSkeleton"></div>
                <div className="Skeleton-MiniRectangle PulseSkeleton"></div>
            </div>
            <div className="Skeleton-Rectangle PulseSkeleton"></div>
            <div className="Skeleton-Rectangle PulseSkeleton"></div>
            <div className="Skeleton-Rectangle PulseSkeleton"></div>
        </div>
    );
}