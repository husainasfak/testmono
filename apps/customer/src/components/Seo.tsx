// components/SEO.tsx
import { Helmet } from "react-helmet";

type SEOProps = {
    title: string;
    description?: string;
    keywords?: string;
    canonical?: string;
};

const SEO = ({ title, description, keywords, canonical }: SEOProps) => {
    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Helmet>
    );
};

export default SEO;
