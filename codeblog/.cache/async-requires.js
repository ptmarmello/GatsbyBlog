// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-jsx": () => import("./../../../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-templates-post-jsx": () => import("./../../../src/templates/post.jsx" /* webpackChunkName: "component---src-templates-post-jsx" */),
  "component---src-templates-tag-jsx": () => import("./../../../src/templates/tag.jsx" /* webpackChunkName: "component---src-templates-tag-jsx" */)
}

