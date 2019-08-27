export function leftMenuReload() {
    let leftMenu = document.querySelector("#left-menu");
    let xhr = new XMLHttpRequest();
    xhr.open("GET","/admin/left_menu/ajax/menu",true);
    xhr.send();
    xhr.onload = function() {
        leftMenu.innerHTML = xhr.responseText;
    }
}