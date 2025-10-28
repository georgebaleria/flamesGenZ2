import { Helmet } from 'react-helmet-async';
import organizationSchema from '../schema/organization.json';
import websiteSchema from '../schema/website.json';
import webApplicationSchema from '../schema/webapplication.json';
import breadcrumbSchema from '../schema/breadcrumb.json';
import faqSchema from '../schema/faq.json';
import softwareApplicationSchema from '../schema/softwareapplication.json';

export const StructuredData = () => {
  return (
    <Helmet>
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {/* WebApplication Schema */}
      <script type="application/ld+json">
        {JSON.stringify(webApplicationSchema)}
      </script>
      
      {/* BreadcrumbList Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* FAQPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      {/* SoftwareApplication Schema */}
      <script type="application/ld+json">
        {JSON.stringify(softwareApplicationSchema)}
      </script>
    </Helmet>
  );
};
