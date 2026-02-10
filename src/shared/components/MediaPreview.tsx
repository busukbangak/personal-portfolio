import { useEffect, useRef, useState } from 'react';

type Props = {
    videoPath: string;
    alt: string;
    className?: string;
}

export default function MediaPreview({ videoPath, alt, className = '' }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        observer.unobserve(video);
                    }
                });
            },
            { rootMargin: '100px' }
        );

        observer.observe(video);

        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={videoRef}
            className={`w-full h-full object-cover ${className}`}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={alt}
        >
            {shouldLoad && <source src={videoPath} type="video/webm" />}
            Your browser does not support the video tag.
        </video>
    );
}
