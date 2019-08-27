import {addImageAjaxFunction} from "./add_ajax_function";

export function addImageFunction() {
    let image_url;
    CKFinder.popup({
        chooseFiles: true,
        onInit: function(finder) {
            finder.on("files:choose", function(evt) {
                let file = evt.data.files.first();
                image_url = file.getUrl();
                addImageAjaxFunction(image_url);
            });
            finder.on("file:choose:resizedImage", function(evt) {
                image_url = evt.data.resizedUrl;
                addImageAjaxFunction(image_url);
            });
        }
    });
}