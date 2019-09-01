import Vue from "vue/dist/vue.esm.browser";
import App from "Components/VueTest/App.vue";


export class VueTest {

    main() {
        new Vue({
            el: "#app",
            render (h) {
                return h(App)
            }
        });
    }

}