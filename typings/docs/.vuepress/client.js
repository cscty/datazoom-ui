import { defineClientConfig } from "@vuepress/client";
export default defineClientConfig({
    async enhance({ app, router, siteData }) {
        if (!__VUEPRESS_SSR__) {
            let components = await import("./components");
            app.use(components.default);
        }
    },
});
