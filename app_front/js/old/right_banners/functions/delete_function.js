import {contentReload} from "../reload/content_reload";
import {rightImagesReload} from "../reload/right_images_reload";

export function deleteImageFunction(deleteButton) {
    let tr = deleteButton.parentNode.parentNode;
    let image_id = tr.id;
    image_id = image_id.substring(6);
    let requestObj = {
        "id": image_id
    };
    const requestJSON = encodeURIComponent(JSON.stringify(requestObj));
    const request = "delete=" + requestJSON;
    let xhr = new XMLHttpRequest();
    xhr.open("POST","/admin/right_banners/delete",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(request);
    xhr.onload = function() {
        contentReload();
        rightImagesReload();
    };
}