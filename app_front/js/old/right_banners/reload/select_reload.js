export function selectReload() {
    let select = document.querySelector("#add-main");
    let elem = document.createElement("div");
    let xhr = new XMLHttpRequest();
    xhr.open("POST","/admin/right_banners/ajax_select_reload",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send();
    xhr.onload = function() {
        elem.innerHTML = xhr.responseText;
        select.innerHTML = elem.querySelector("#add-main").innerHTML;
    };
}