declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent;
    export default component;
}
declare module "./docs/.vuepress/**/*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent;
    export default component;
}
