import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/vue3";
import { createPinia } from "pinia";

import PageLayout from "./Shared/Layout.vue";

const pinia = createPinia();

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        const page = pages[`./Pages/${name}.vue`];
        if (page && page.default) {
            page.default.layout = page.default.layout || PageLayout;
        }

        return page;
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });
        app.use(plugin);
        app.use(pinia);
        app.component("Link", Link);
        app.component("Head", Head);
        app.mount(el);
    },

    title: (title) => `Boiler Template : ${title}`,
});