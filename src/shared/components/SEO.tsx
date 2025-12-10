import { Helmet } from "react-helmet-async";

type Props = {
    title: string;
    description: string;
    iconPath: string;
    previewPath: string;
    url?: string;
}

export default function SEO({ title, description, iconPath, previewPath, url }: Props) {
    const canonicalUrl = url || 'https://busukbangak.dev';
    const fullImageUrl = previewPath.startsWith('http') ? previewPath : `https://busukbangak.dev${previewPath}`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Wan Abdul Aliim Wanali",
        "url": "https://busukbangak.dev",
        "jobTitle": "HCI Developer",
        "description": "HCI-focused developer bridging technology and people",
        "alumniOf": [
            "HAW Hamburg",
            "Universität zu Lübeck"
        ],
        "email": "aliim.wanali@gmail.com",
        "sameAs": [
            "https://github.com/busukbangak",
            "https://www.linkedin.com/in/aliimwan/",
            "https://busukbangak.itch.io/",
            "https://www.xing.com/profile/WanAbdulAliim_Wanali/web_profiles"
        ]
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <link rel="icon" type="image/svg+xml" href={iconPath} />
            <link rel="canonical" href={canonicalUrl} />
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="author" content="Wan Abdul Aliim Wanali" />
            <meta name="keywords" content="portfolio, developer, HCI, human-computer interaction, web development, UX design" />
            
            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            {/* Open Graph / Facebook*/}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullImageUrl} />

            {/* Meta Tags Generated with https://metatags.io  */}
        </Helmet>
    )
}