import * as change from "./functions/change_functions";
import {saveFunction} from "./functions/save_function";
import {addImageFunction} from "./functions/add_function";
import {deleteImageFunction} from "./functions/delete_function";

export function load() {
    let content = document.querySelector("#content");
    content.addEventListener("click", function (event) {
        let target = event.target;
        while (target !== content) {
            if (target.tagName === "BUTTON") {
                if (target.className === "change-caption") {
                    change.changeCaptionFunction(target);
                }
                else if (target.className === "save-caption") {
                    saveFunction(target, "caption");
                }
                else if (target.className === "change-link") {
                    change.changeLinkFunction(target);
                }
                else if (target.className === "save-link") {
                    saveFunction(target, "link");
                }
                else if (target.className === "change-image") {
                    change.changeImageFunction(target);
                }
                else if (target.className === "save-image") {
                    saveFunction(target, "image");
                }
                else if (target.className === "add-image") {
                    addImageFunction();
                }
                else if (target.className === "delete-image") {
                    deleteImageFunction(target);
                }
                return;
            }
            target = target.parentNode;
        }
    });
}