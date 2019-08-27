export function contentReload() {
    let content = document.getElementById("content");
    let xhr = new XMLHttpRequest();
    xhr.open("POST","/admin/right_banners/ajax_content_reload",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send();
    xhr.onload = function() {
        content.innerHTML = xhr.responseText;
    };
}