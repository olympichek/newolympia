import {contentReload} from "../reload/content";
import {leftMenuReload} from "../reload/left_menu";
import {itemReload} from "../reload/item";
import {getCookie} from "../../../all/get_cookie_function";


export function deleteMain(deleteButton) {
    let id  = deleteButton.parentNode.querySelector(".main-id").innerHTML;
    let token = getCookie("client_temp_hash");
    let requestObj = {
        "id": id,
        "token": token
    };
    const requestJSON = JSON.stringify(requestObj);
    const request = "json=" + encodeURIComponent(requestJSON);
    let xhr = new XMLHttpRequest();
    xhr.open("POST","/admin/left_menu/main/delete",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(request);
    xhr.onload = function() {
        contentReload();
        leftMenuReload();
    }
}
export function deleteSub(deleteButton) {
    let id  = deleteButton.parentNode.querySelector(".sub-id").innerHTML;
    let parent_id = deleteButton.parentNode.parentNode.querySelector(".main-id").innerHTML;
    let token = getCookie("client_temp_hash");
    let requestObj = {
        "id": id,
        "token": token
    };
    const requestJSON = JSON.stringify(requestObj);
    const request = "json=" + encodeURIComponent(requestJSON);
    let xhr = new XMLHttpRequest();
    xhr.open("POST","/admin/left_menu/sub/delete",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(request);
    xhr.onload = function() {
        itemReload(parent_id);
        leftMenuReload();
    }
}