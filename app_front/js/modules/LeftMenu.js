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

    reload() {
        const leftMenu = document.querySelector("#left-menu");
        const xhr = new XMLHttpRequest();
        xhr.open("GET","/admin/left_menu/ajax/menu",true);
        xhr.send();
        xhr.onload = () => {
            leftMenu.innerHTML = xhr.responseText;
        }
    }

}