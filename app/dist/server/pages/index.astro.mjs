import { e as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BALmWQ3K.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  console.log("This runs in your terminal, not the browser");
  return renderTemplate`<html data-astro-cid-j7pv25f6> ${maybeRenderHead()}<body data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Hello World!</h1>  </body></html>`;
}, "/Users/fahadahmed/development/2025/astro-firebase-mvp/app/src/pages/index.astro", undefined);

const $$file = "/Users/fahadahmed/development/2025/astro-firebase-mvp/app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
