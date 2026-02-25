import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, type = 'website' }) => {
  const siteTitle = "University of NorthWest";
  const fullTitle = title === 'Home' ? `${siteTitle} - Excellence in Higher Education` : `${title} | ${siteTitle}`;
  const defaultDescription = "University of NorthWest - An ISO certified, international university dedicated to excellence in higher education since 1999. Distance learning programmes for students in 25+ countries.";
  const desc = description || defaultDescription;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};
