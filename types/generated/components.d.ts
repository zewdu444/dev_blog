import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeoinformation extends Schema.Component {
  collectionName: 'components_seo_seoinformations';
  info: {
    displayName: 'seoinformation';
    icon: 'search';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'seo.seoinformation': SeoSeoinformation;
    }
  }
}
