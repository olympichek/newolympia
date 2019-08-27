import {itemReload} from "../reload/item";
import {leftMenuReload} from "../reload/left_menu";
import {getCookie} from "../../../all/get_cookie_function";

export function saveMain (saveButton) {
    let id = saveButton.parentNode.querySelector(".main-id").innerHTML;
    let select = saveButton.parentNode.querySelector(".main-pages-list");
    let page_id = select.value;
    let token = getCookie("client_temp_hash");
    let requestObj = {
        "id": id,
        "page_id": page_id,
        "token": token
    };
    const requestJSON = JSON.stringify(requestObj);
    const request = "json=" + encodeURIComponent(requestJSON);
    let xhr = new XMLHttpRequest();
    xhr.open("POST","/admin/left_menu/main/save",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(request);
    xhr.onload = function() {
        itemReload(id);
        leftMenuReload();
    };
}
export function saveSub (saveButton) {
    let id = saveButton.parentNode.querySelector(".sub-id").innerHTML;
    let select = saveButton.parentNode.querySelector(".sub-pages-list");
    let page_id = select.value;
    let token = getCookie("client_temp_hash");
    let requestObj = {
        "id": id,
        "page_id": page_id,
        "token": token
    };
    const requestJSON = JSON.stringify(requestObj);
    const request = "json=" + encodeURIComponent(requestJSON);
    let xhr = new XMLHttpRequest();
    xhr.open("POST","/admin/left_menu/sub/save",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(request);
    xhr.onload = function() {
        itemReload(id);
        leftMenuReload();
    };
}