import {changeMain, changeSub} from "./functions/change";
import {changeMainSelect, changeSubSelect} from "./functions/change_select";
import {saveMain, saveSub} from "./functions/save";
import {addMain, addSub} from "./functions/add";
import {deleteMain, deleteSub} from "./functions/delete";

export function load() {
    let content = document.querySelector("#content");
    content.addEventListener("click", function(event) {
        let target = event.target;
        while (target !== content) {
            if (target.tagName === "BUTTON") {
                if(target.classList.contains("change-main-button")) {
                    changeMain(target);
                }
                else if(target.classList.contains("change-sub-button")) {
                     changeSub(target);
                }
                else if(target.classList.contains("save-main-button")) {
                    saveMain(target);
                }
                else if(target.classList.contains("save-sub-button")) {
                    saveSub(target);
                }
                else if(target.classList.contains("add-main-button")) {
                    addMain(target);
                }
                else if(target.classList.contains("add-sub-button")) {
                    addSub(target);
                }
                else if(target.classList.contains("delete-main-button")) {
                    deleteMain(target);
                }
                else if(target.classList.contains("delete-sub-button")) {
                    deleteSub(target);
                }
                return;
            }
            target = target.parentNode;
        }
    });
    content.addEventListener("change", function(event) {
        let target = event.target;
        while (target !== content) {
            if (target.tagName === "SELECT") {
                if (target.classList.contains("main-pages-list")) {
                    changeMainSelect(target);
                }
                else if (target.classList.contains("sub-pages-list")) {
                    changeSubSelect(target);
                }
                return;
            }
            target = target.parentNode;
        }
    });
}