import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogPostsSelection extends Schema.Component {
  collectionName: 'components_blog_posts_selections';
  info: {
    displayName: 'postsSelection';
    icon: 'earth';
  };
  attributes: {
    heading: Attribute.String;
    featuredPosts: Attribute.Relation<
      'blog.posts-selection',
      'oneToMany',
      'api::post.post'
    >;
  };
}

export interface ConfigSocialLink extends Schema.Component {
  collectionName: 'components_config_social_links';
  info: {
    displayName: 'socialLink';
    icon: 'emotionHappy';
  };
  attributes: {
    socialMedia: Attribute.Enumeration<
      ['github', 'youtube', 'twitter', 'facebook', 'whatsup']
    > &
      Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface LayoutFeaturedCourse extends Schema.Component {
  collectionName: 'components_layout_featured_courses';
  info: {
    displayName: 'featuredCourse';
    icon: 'restaurant';
  };
  attributes: {
    course: Attribute.Relation<
      'layout.featured-course',
      'oneToOne',
      'api::course.course'
    >;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
    icon: 'dashboard';
  };
  attributes: {
    callToAction: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    buttons: Attribute.Component<'layout.link', true>;
  };
}

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
    icon: 'arrowRight';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface LayoutMission extends Schema.Component {
  collectionName: 'components_layout_missions';
  info: {
    displayName: 'mission';
    icon: 'cloud';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Our Mission'>;
    content: Attribute.Text & Attribute.Required;
    showLogo: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface LayoutNewsletterForm extends Schema.Component {
  collectionName: 'components_layout_newsletter_forms';
  info: {
    displayName: 'newsletterForm';
    icon: 'layer';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text;
  };
}

export interface LayoutPageInfo extends Schema.Component {
  collectionName: 'components_layout_page_infos';
  info: {
    displayName: 'PageInfo';
    icon: 'priceTag';
  };
  attributes: {
    content: Attribute.RichText;
    coverimage: Attribute.Media;
    seo: Attribute.Component<'seo.seoinformation'>;
  };
}

export interface LayoutServicesPreview extends Schema.Component {
  collectionName: 'components_layout_services_previews';
  info: {
    displayName: 'servicesPreview';
    icon: 'rocket';
  };
  attributes: {
    services: Attribute.Relation<
      'layout.services-preview',
      'oneToMany',
      'api::service.service'
    >;
  };
}

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
      'blog.posts-selection': BlogPostsSelection;
      'config.social-link': ConfigSocialLink;
      'layout.featured-course': LayoutFeaturedCourse;
      'layout.hero': LayoutHero;
      'layout.link': LayoutLink;
      'layout.mission': LayoutMission;
      'layout.newsletter-form': LayoutNewsletterForm;
      'layout.page-info': LayoutPageInfo;
      'layout.services-preview': LayoutServicesPreview;
      'seo.seoinformation': SeoSeoinformation;
    }
  }
}
