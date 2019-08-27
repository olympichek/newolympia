export class ResizeColumns {

    main() {
        const obj = this;
        window.addEventListener("DOMContentLoaded", function(){
            obj.onHeightChange(document.getElementById("main"), function(){
                obj.resize();
            });
        });
        window.addEventListener("load", obj.resize);
        window.addEventListener("resize", obj.debounce(obj.resize, 200));
    }

    debounce(fn, interval) {
        let timer;
        return function debounced() {
            clearTimeout(timer);
            let args = arguments;
            let that = this;
            timer = setTimeout(function callOriginalFn() {
                fn.apply(that, args);
            }, interval);
        };
    }

    onHeightChange(elm, callback){
        let lastHeight = elm.clientHeight, newHeight;
        (function run(){
            newHeight = elm.clientHeight;
            if(lastHeight !== newHeight)
                callback();
            lastHeight = newHeight;

            if(elm.heightChangeTimer)
                clearTimeout(elm.heightChangeTimer);

            elm.heightChangeTimer = setTimeout(run, 200);
        })();
    }

    resize() {
        let left_column = document.getElementById("left-column-center");
        let right_column = document.getElementById("right-column-center");
        let center = document.getElementById("main");
        let center_height = center.offsetHeight;
        let left_menu = document.getElementById("left-menu");
        let left_menu_height = left_menu.offsetHeight;
        let right_menu = document.getElementById("right-menu");
        let right_menu_height = right_menu.offsetHeight;
        let max_height = center_height;
        if(left_menu_height > max_height) {
            max_height = left_menu_height;
        }
        if(right_menu_height > max_height) {
            max_height = right_menu_height;
        }
        let column_top = document.getElementById("left-column-top");
        let column_bottom = document.getElementById("left-column-bottom");
        let column_top_height = column_top.offsetHeight;
        let column_bottom_height = column_bottom.offsetHeight;
        let result_height = (max_height - column_top_height - column_bottom_height + 50) + "px";
        let page = document.getElementsByTagName("body")[0].className;
        if(page.indexOf("body-page") !== -1 ){
            left_column.style.height = result_height;
            let left_column_full = document.getElementById("left-column");
            let result_height_right = (left_column_full.offsetHeight);
            right_column.style.height = (result_height_right) + "px";
        }
        if(page.indexOf("body-main") !== -1){
            left_column.style.height = result_height;
            right_column.style.height = result_height;
        }

    }

}