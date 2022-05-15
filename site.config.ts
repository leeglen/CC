import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ca1a6948a53f4562a47ce83a9412b4b7',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'o-id',

  // basic site info (required)
  name: 'LIGAN',
  domain: 'LIGAN.cc',
  author: 'LIGAN',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: 'chusight1',
  github: 'chusight',
  zhihu: 'chusight',
  // linkedin: '',
  // instagram: 'onet2lee',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
     navigationStyle: 'custom',
     navigationLinks: [
       {
         title: 'About',
         pageId: '72af5f5b7c2244aa875a45bd0a4650c0'
       },
       {
         title: 'Idea',
         pageId: '47b5a54f7f9d45f584b7823c32a0af54'
       },
       {
         title: 'Contact',
         pageId: 'f8903ada47814765b64d0a5f3b1af0ca'
       }
     ]
})
