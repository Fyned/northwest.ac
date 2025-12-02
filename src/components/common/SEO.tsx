import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const siteTitle = "University of NorthWest";
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultDescription = "An ISO certified, international university dedicated to excellence in higher education.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
    </Helmet>
  );
};