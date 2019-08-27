import {selectReload} from "../reload/select_reload";
import {rightImagesReload} from "../reload/right_images_reload";

export function saveFunction(saveButton, item) {
    let input;
    let changeButton;
    if(item === "caption") {
        input = saveButton.parentNode.querySelector(".caption-input");
        changeButton = saveButton.parentNode.querySelector(".change-caption");
    }
    else if(item === "link") {
        input = saveButton.parentNode.querySelector(".link-input");
        changeButton = saveButton.parentNode.querySelector(".change-link");
    }
    else if(item === "image") {
        input = saveButton.parentNode.querySelector(".image-input");
        changeButton = saveButton.parentNode.querySelector(".change-image");
    }
    let tr = saveButton.parentNode.parentNode;
    let image_id = tr.id;
    image_id = image_id.substring(6);
    let caption_value = input.value;
    let requestObj = {
        "id": image_id,
        "item": item,
        "value": caption_value
    };
    const requestJSON = encodeURIComponent(JSON.stringify(requestObj));
    const request = "save=" + requestJSON;
    let xhr = new XMLHttpRequest();
    xhr.open("POST","/admin/right_banners/save",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(request);
    xhr.onload = function() {
        input.readOnly = true;
        saveButton.style.display = "none";
        changeButton.style.display = "inline";
        selectReload();
        rightImagesReload();
    };
}