export function itemReload (id) {
    let xhr = new XMLHttpRequest();
    let url = "/admin/left_menu/ajax/item/" + id;
    xhr.open("GET", url,true);
    xhr.send();
    xhr.onload = function() {
        let items_list = document.querySelectorAll(".full-item");
        for(let i = 0, length = items_list.length; i < length; i++) {
            let current_id = items_list[i].querySelector(".main-id");
            if(current_id.innerHTML === id) {
                let container = document.createElement("div");
                container.innerHTML = xhr.responseText;
                items_list[i].innerHTML = container.querySelector(".full-item").innerHTML;
            }
        }
        items_list.innerHTML = xhr.responseText;
    };
}