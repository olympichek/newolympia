import {contentReload} from "../reload/content_reload";
import {rightImagesReload} from "../reload/right_images_reload";

export function addImageAjaxFunction(image_url) {
    let url = window.location.pathname;
    let page_name = url.split("/")[4];
    let select = document.querySelector("#add-main");
    let select_value = select.value;
    let requestObj = {
        "page_name": page_name,
        "after": select_value,
        "image": image_url
    };
    const requestJSON = encodeURIComponent(JSON.stringify(requestObj));
    const request = "add=" + requestJSON;
    let xhr = new XMLHttpRequest();
    xhr.open("POST","/admin/right_banners/add",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(request);
    xhr.onload = function() {
        contentReload();
        rightImagesReload();
    };
}