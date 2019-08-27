import {saveFunction} from "./save_function";

export function changeCaptionFunction(changeButton) {
    let input = changeButton.parentNode.querySelector(".caption-input");
    let saveButton = changeButton.parentNode.querySelector(".save-caption");
    input.readOnly = false;
    saveButton.style.display = "inline";
    changeButton.style.display = "none";
}
export function changeLinkFunction(changeButton) {
    let input = changeButton.parentNode.querySelector(".link-input");
    let saveButton = changeButton.parentNode.querySelector(".save-link");
    input.readOnly = false;
    saveButton.style.display = "inline";
    changeButton.style.display = "none";
}
export function changeImageFunction(changeButton) {
    let input = changeButton.parentNode.querySelector(".image-input");
    let saveButton = changeButton.parentNode.querySelector(".save-image");
    CKFinder.popup({
        chooseFiles: true,
        onInit: function(finder) {
            finder.on("files:choose", function(evt) {
                let file = evt.data.files.first();
                input.value = file.getUrl();
                saveFunction(saveButton, "image");
            });
            finder.on("file:choose:resizedImage", function(evt) {
                input.value = evt.data.resizedUrl;
                saveButton.style.display = "inline";
                changeButton.style.display = "none";
                saveFunction(saveButton, "image");
            });
        }
    });
}