import { useEffect, useRef } from 'react';

export const BentoVideoCard: React.FC<{
	videoUrl: string;
	posterUrl: string;
	className?: string;
	isHovered?: boolean;

}> = ({ videoUrl, posterUrl, className, isHovered = false }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) videoRef.current.play();
    }
  }, [isHovered]);

  return (
    <div className={className} onMouseEnter={handleMouseEnter}>
      <video
        id={'celebrate-milestones-video'}
        ref={videoRef}
				poster={posterUrl}
        controls={false}
        muted={true}
        preload="metadata"
        className={`object-cover w-full h-full max-w-full`}
      >
        <source src={videoUrl} />
      </video>
    </div>
  );
};
