export function contentReload() {
    let content = document.querySelector("#content");
    let xhr = new XMLHttpRequest();
    xhr.open("GET","/admin/left_menu/ajax/content",true);
    xhr.send();
    xhr.onload = function() {
        content.innerHTML = xhr.responseText;
    }
}