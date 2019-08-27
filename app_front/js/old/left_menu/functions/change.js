export function changeMain (changeButton) {
    let select  = changeButton.parentNode.querySelector(".main-pages-list");
    select.disabled = false;
    let saveButton = changeButton.parentNode.querySelector(".save-main-button");
    saveButton.style.display = "inline";
    changeButton.style.display = "none";
}
export function changeSub (changeButton) {
    let select  = changeButton.parentNode.querySelector(".sub-pages-list");
    select.disabled = false;
    let saveButton = changeButton.parentNode.querySelector(".save-sub-button");
    saveButton.style.display = "inline";
    changeButton.style.display = "none";
}