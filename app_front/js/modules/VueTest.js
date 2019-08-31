import Vue from "Libs/vue/vue.esm.browser.js";
export class VueTest {

    main() {

        const app = new Vue({
            el: "#app",
            delimiters: ["${","}"],
            data: {
                message: "Hello Vue!"
            }
        });

        Vue.component("button-counter", {
            data: function () {
                return {
                    count: 0
                }
            },
            template: `<button v-on:click="count++">Счётчик кликов — {{ count }}</button>`
        })
    }

}