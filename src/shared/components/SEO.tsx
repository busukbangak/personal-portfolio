import { Helmet } from "react-helmet-async";

type Props = {
    title: string;
    description: string;
    iconPath: string;
    previewPath: string;

}

export default function SEO({ title, description, iconPath, previewPath }: Props) {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <link rel="icon" type="image/svg+xml" href={iconPath} />
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            {/* Open Graph / Facebook*/}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={previewPath} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={previewPath} />

            {/* Meta Tags Generated with https://metatags.io  */}
        </Helmet>
    )
}