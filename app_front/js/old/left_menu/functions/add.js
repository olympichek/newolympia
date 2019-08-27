import {leftMenuReload} from "../reload/left_menu";
import {contentReload} from "../reload/content";
import {itemReload} from "../reload/item";
import {getCookie} from "../../../all/get_cookie_function";



export function addMain() {
    let main_select = document.querySelector(".main-items-list");
    let after_id = main_select.value;
    let token = getCookie("client_temp_hash");
    let requestObj = {
        "after_id": after_id,
        "token": token
    };
    const requestJSON = JSON.stringify(requestObj);
    const request = "json=" + encodeURIComponent(requestJSON);
    let xhr = new XMLHttpRequest();
    xhr.open("POST","/admin/left_menu/main/add",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(request);
    xhr.onload = function() {
        contentReload();
        leftMenuReload();
    }
}
export function addSub(addButton) {
    let sub_select = document.querySelector(".sub-items-list");
    let after_id = sub_select.value;
    let parent_id = addButton.parentNode.parentNode.querySelector(".main-id").innerHTML;
    let token = getCookie("client_temp_hash");
    let requestObj = {
        "after_id": after_id,
        "parent_id": parent_id,
        "token": token
    };
    const requestJSON = JSON.stringify(requestObj);
    const request = "json=" + encodeURIComponent(requestJSON);
    let xhr = new XMLHttpRequest();
    xhr.open("POST","/admin/left_menu/sub/add",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(request);
    xhr.onload = function() {
        itemReload(parent_id);
        leftMenuReload();
    }
}