import Vue from "vue/dist/vue.esm.browser";
import Menu from "Components/LeftMenu/Menu.vue";


export class LeftMenu {

    main() {

        new Vue({
            el: "#menu-app",
            render (h) {
                return h(Menu)
            }
        });
    }

}