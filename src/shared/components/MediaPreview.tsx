import { useEffect, useRef, useState } from 'react';

type Props = {
    mediaPath: string;
    alt: string;
    className?: string;
}

export default function MediaPreview({ mediaPath, alt, className = '' }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    // Determine if the media is a video or image based on file extension
    const isVideo = /\.(webm|mp4|ogg)$/i.test(mediaPath);
    const isImage = /\.(webp|jpg|jpeg|png|gif)$/i.test(mediaPath);

    useEffect(() => {
        const mediaElement = isVideo ? videoRef.current : imageRef.current;
        if (!mediaElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        observer.unobserve(mediaElement);
                    }
                });
            },
            { rootMargin: '100px' }
        );

        observer.observe(mediaElement);

        return () => observer.disconnect();
    }, [isVideo, isImage]);

    if (isImage) {
        return (
            <img
                ref={imageRef}
                src={shouldLoad ? mediaPath : undefined}
                alt={alt}
                className={`w-full h-full object-cover ${className}`}
                loading="lazy"
            />
        );
    }

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
            {shouldLoad && <source src={mediaPath} type="video/webm" />}
            Your browser does not support the video tag.
        </video>
    );
}
