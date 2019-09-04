import {Cookie} from "Services/Cookie";

export class PageAdminLinks {

    main() {
        const create_link = document.getElementById("page-create-href");
        create_link.addEventListener("click", () => {this.createLinkClicked()});

        const edit_link = document.getElementById("page-edit-href");
        edit_link.addEventListener("click", () => {this.editLinkClicked()});

        const delete_link = document.getElementById("page-delete-href");
        delete_link.addEventListener("click", () => {this.deleteLinkClicked()});
    }

    createLinkClicked() {
        const page_name = document.getElementById("create-page-name").value;
        const xhr = new XMLHttpRequest();
        const token = Cookie.getByName("temp_hash").value;
        const request = "name=" + encodeURIComponent(page_name) + "&token=" + encodeURIComponent(token);
        const check = /^[a-zA-Z0-9_]+$/;
        const href_value = "/admin/page_admin/edit/" + page_name;
        if (page_name.match(check)) {
            const editWindow = window.open("", "_blank");
            xhr.open("POST", "/admin/page_admin/create",true);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send(request);
            xhr.onload = () => {
                this.reloadEditList();
                this.reloadDeleteList();
                editWindow.location.replace(href_value);
            };
        }
        else {
            window.open("/admin/page_admin/create_error", "_blank");
        }
    }

    editLinkClicked() {
        const pages_list = document.getElementById("pages-list-edit");
        const loading_page = pages_list.value;
        const href_value = "/admin/page_admin/edit/" + loading_page;
        window.open(href_value, "_blank");
    }

    deleteModalWindow() {
        
    }

    deleteLinkClicked() {
        const pages_list = document.getElementById("pages-list-delete");
        const page_name = pages_list.value;
        const xhr = new XMLHttpRequest();
        const token = Cookie.getByName("temp_hash").value;
        const request = "name=" + encodeURIComponent(page_name) + "&token=" + encodeURIComponent(token);
        xhr.open("POST", "/admin/page_admin/delete",true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(request);
        xhr.onload = () => {
            this.reloadEditList();
            this.reloadDeleteList();
        }
    }

    reloadEditList() {
        const pages_list_edit = document.getElementById("pages-list-edit");
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/admin/page_admin/pages_list/edit", true);
        xhr.send();
        xhr.onload = () => {
            pages_list_edit.innerHTML = this.buildList(xhr.responseText);
        };
    }

    reloadDeleteList() {
        const pages_list_delete = document.getElementById("pages-list-delete");
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/admin/page_admin/pages_list/delete",true);
        xhr.send();
        xhr.onload = () => {
            pages_list_delete.innerHTML = this.buildList(xhr.responseText);
        };
    }

    buildList(responseText) {
        const arr = JSON.parse(responseText);
        let html = ``;
        for(let i = 0; i < arr.length; i++) {
            html += `<option value="${arr[i][0]}">${arr[i][1]}</option>`;
        }
        return html;
    }

}