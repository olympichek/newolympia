export function rightImagesReload() {
    let rightMenu = document.querySelector("#right-menu");
    let xhr = new XMLHttpRequest();
    let request_url = window.location.pathname;
    let ajax_url = "/admin/right_banners/ajax_images_reload/";
    let page_name = request_url.split("/")[4];
    ajax_url += page_name;
    xhr.open("POST", ajax_url,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send();
    xhr.onload = function() {
        rightMenu.innerHTML = xhr.responseText;
    };
}